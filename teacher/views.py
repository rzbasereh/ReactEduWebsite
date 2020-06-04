from django.http import JsonResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
from django.contrib import messages
from .models import TeacherForm, Question, QuestionPack
from manager.models import TeacherAccess, Grade
from main.models import Message, Notification
from django.core import serializers
from django.db.models import Q


# Create your views here.
def commonData(request):
    full_name = request.user.get_full_name()
    avatar = TeacherForm.objects.filter(user=request.user.teacher)[0].avatar.url
    has_message = Message.objects.filter(user=request.user, is_seen=False).exists()
    message = Message.objects.filter(user=request.user)
    has_notification = Notification.objects.filter(user=request.user, is_seen=False).exists()
    notification = Notification.objects.filter(user=request.user, is_seen=False)
    user = {
        'full_name': full_name,
        'avatar': avatar,
        'has_message': has_message,
        'message': message,
        'has_notification': has_notification,
        'notification': notification,
    }
    return user


def index(request):
    user = commonData(request)
    return render(request, 'teacher/index.html', {'user': user})


def questions(request):
    user = commonData(request)
    questions_data = {
        'count': Question.objects.filter(Q(author=request.user.teacher) | Q(is_publish=True)).count(),
        'list': Question.objects.filter(Q(author=request.user.teacher) | Q(is_publish=True)).order_by('-pk')[:10],
    }
    grade = Grade.objects.last().source
    pack_pk = -1
    selected_question = []
    if QuestionPack.objects.filter(teacher=request.user.teacher).count() > 0:
        if not QuestionPack.objects.filter(teacher=request.user.teacher).last().submit:
            pack_pk = QuestionPack.objects.last().id
            selected_question = list(QuestionPack.objects.get(id=pack_pk).questions.all().values_list('id', flat=True))
    return render(request, 'teacher/questions.html',
                  {'user': user, 'questions': questions_data, 'selected_question': selected_question,
                   "pack_pk": pack_pk, 'grade': grade})


def newQuestion(request):
    if TeacherAccess.objects.filter(teacher=request.user.teacher).exists() and \
            TeacherAccess.objects.filter(teacher=request.user.teacher)[0].add_question_access:
        user = commonData(request)
        pk = request.session['pk']
        del request.session['pk']
        return render(request, 'teacher/new_question.html', {'user': user, 'pk': pk})
    messages.error(request, "شما مجاز به انجام این عملیات نیستید!")
    return HttpResponseRedirect(reverse('teacher:questions'))


def saveGrades(request):
    if request.method == "POST":
        grades = request.POST.getlist('grades[]')
        if len(grades) == 0:
            return JsonResponse({"value": "empty list"})
        else:
            author = request.user.teacher
            question = Question(author=author, grades=grades)
            question.save()
            pk = question.id
            request.session['pk'] = pk
            return JsonResponse({"value": "success", "url": reverse("teacher:newQuestion")})
    else:
        return JsonResponse({"value": "invalid Request"})


def addQuestion(request):
    if request.method == "POST":
        pk = request.POST.get('pk')
        author = request.user.teacher
        body = request.POST.get('body')
        choice1 = request.POST.get('ChoiceVal1')
        choice2 = request.POST.get('ChoiceVal2')
        choice3 = request.POST.get('ChoiceVal3')
        choice4 = request.POST.get('ChoiceVal4')
        is_redirect = request.POST.get('redirect')
        # choice5 = ""
        # print(is_redirect == "tru")
        is_redirect = False
        # if SubGrade.objects.filter(name=request.POST.get('GradeSelect')).exists():
        #     grade = SubGrade.objects.filter(name=request.POST.get('GradeSelect')).first()
        # else:
        grade = ""
        # lesson = request.POST.get('LessonSelect')
        # chapter = request.POST.get('ChapterSelect')
        lesson = None
        chapter = None
        correct_ans = ""
        verbose_ans = request.POST.get('verbose_ans')
        is_publish = False
        if Question.objects.filter(id=pk).exists():
            question = Question.objects.get(id=pk)
            question.body = body
            question.author = author
            question.verbose_ans = verbose_ans
            question.choice_1 = choice1
            question.choice_2 = choice2
            question.choice_3 = choice3
            question.choice_4 = choice4
            question.grade = grade
            question.lesson = lesson
            question.chapter = chapter
            question.is_publish = is_publish
            question.save()
            if not is_redirect:
                return JsonResponse({'success': "update"})
        else:
            return JsonResponse({'success': "Error"})
        messages.success(request, 'successfully add')
        return HttpResponseRedirect(reverse('teacher:questions'))
    else:
        return JsonResponse({'error': 'Invalid Request!'})


def cancelAddQuestion(request, pk):
    if Question.objects.filter(id=pk).exists():
        Question.objects.filter(id=pk).delete()
    messages.success(request, "تغییرات با موفقیت لغو شد!")
    return HttpResponseRedirect(reverse('teacher:questions'))


def selectedQuestion(request):
    if request.method == "POST":
        pk = request.POST.get('pk')
        state = request.POST.get('state')
        teacher = request.user.teacher
        if state == "add":
            if QuestionPack.objects.filter(teacher=request.user.teacher).count() == 0 or QuestionPack.objects.filter(
                    teacher=request.user.teacher).last().submit:
                question_pack = QuestionPack(teacher=teacher)
                question_pack.save()
                question_pack.questions.add(Question.objects.get(id=pk))
                pack_pk = question_pack.id
                count = question_pack.questions.count()
                return JsonResponse({"value": "success", "type": "add", "pack_pk": pack_pk, "count": count})
            else:
                question_pack = QuestionPack.objects.get(teacher=request.user.teacher, submit=False)
                question_pack.questions.add(Question.objects.get(id=pk))
                pack_pk = question_pack.id
                count = question_pack.questions.count()
                return JsonResponse({"value": "success", "type": "add", "pack_pk": pack_pk, "count": count})
        elif state == "remove":
            if QuestionPack.objects.filter(teacher=request.user.teacher, submit=False).exists():
                question_pack = QuestionPack.objects.get(teacher=request.user.teacher, submit=False)
                question_pack.questions.remove(Question.objects.get(id=pk))
                pack_pk = question_pack.id
                count = question_pack.questions.count()
                return JsonResponse({"value": "success", "type": "remove", "pack_pk": pack_pk, "count": count})
        return JsonResponse({"value": "error"})
    # elif request.method == "GET":
    #     pack_pk = request.GET.get('pack_pk')
    #     if QuestionPack.objects.filter(id=pack_pk).exists():
    #         question_pack = QuestionPack.objects.get(id=pack_pk)
    #         selected_questions = serializers.serialize("json", question_pack.questions.all())
    #         return JsonResponse({"value": "success", "questions": selected_questions})
    #     else:
    #         return JsonResponse({"value": "forbidden access"})


def filter_page(request):
    if request.method == "POST":
        if request.POST.get("requestType") == "pagination":
            unit = int(request.POST.get('unit'))
            page = int(request.POST.get('page'))
            start = (page - 1) * unit
            end = unit * page
            new_questions = serializers.serialize("json", Question.objects.filter(
                Q(author=request.user.teacher) | Q(is_publish=True)).order_by('-pk')[start:end])
            # checked = list(QuestionPack.objects.get(submit=False).questions.all().values_list("id", flat=True))
            return JsonResponse({"value": "success", "questions": new_questions})
        elif request.POST.get("requestType") == "my_questions":
            unit = int(request.POST.get('unit'))
            page = 1
            start = (page - 1) * unit
            end = unit * page
            new_questions = serializers.serialize("json",
                                                  Question.objects.filter(author=request.user.teacher)
                                                  .order_by('-pk')[start:end])
            checked = 1
            return JsonResponse({"value": "success", "questions": new_questions, "checked": checked})
    else:
        return JsonResponse({"value": "forbidden access"})


def edit_question(request):
    user = commonData(request)
    if QuestionPack.objects.filter(teacher=request.user.teacher).count() == 0:
        messages.success(request, "برای دسترسی به این صفحه لازم است ابتدا تعدادی سوال انتخاب کنید.")
        return HttpResponseRedirect(reverse("teacher:questions"))
    else:
        if QuestionPack.objects.filter(teacher=request.user.teacher).last().submit:
            messages.success(request, "برای دسترسی به این صفحه لازم است ابتدا تعدادی سوال انتخاب کنید.")
            return HttpResponseRedirect(reverse("teacher:questions"))
        else:
            selected_questions = QuestionPack.objects.filter(teacher=request.user.teacher).last().questions.all()
            pack_pk = QuestionPack.objects.filter(teacher=request.user.teacher).last().id
            return render(request, 'teacher/pre_submit_exam.html',
                          {"user": user, "questions": selected_questions, "pack_pk": pack_pk})


def save_edit_question(request):
    name = request.POST.get('name')
    second = request.POST.get('second')
    minute = request.POST.get('minute')
    hour = request.POST.get('hour')
    more_info = request.POST.get('more_info')
    pack_pk = request.POST.get('pack_pk')
    question_pack = QuestionPack.objects.get(submit=False, id=pack_pk)
    question_pack.name = name
    question_pack.second = second
    question_pack.minute = minute
    question_pack.hour = hour
    question_pack.info = more_info
    question_pack.submit = True
    question_pack.save()
    return HttpResponseRedirect(reverse('teacher:examManagement'))


def delete_exam(request, pack_pk):
    QuestionPack.objects.get(id=pack_pk).delete()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER'))


def classRoom(request):
    user = commonData(request)
    return render(request, 'teacher/class_room.html', {'user': user})


def examManagement(request):
    user = commonData(request)
    question_packs = QuestionPack.objects.filter(submit=True).all()
    return render(request, 'teacher/manage_exam.html', {'user': user, 'packs': question_packs})
