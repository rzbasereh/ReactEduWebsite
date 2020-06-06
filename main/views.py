from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render, redirect
from django.http import JsonResponse

from .models import Student, Teacher, Adviser, Manager
from .serializers import StudentSerializer
# from .forms import LoginForm
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse


class index(APIView):
    def get(self, request, format=None):
        try:
            students = Student.objects.all()
            serialize_student = StudentSerializer(students)
            data = serialize_student.data
            return Response({"data": data}, status=status.HTTP_200_OK)
        except:
            pass


def loginPage(request):
    if request.user.is_authenticated:
        return redirect(reverse('index'))
    return render(request, 'main/login.html', {})


def logoutUser(request):
    logout(request)
    return redirect('/')


def notFound(request):
    return render(request, 'main/404.html', {})


def recoverPassword(request):
    return render(request, 'main/recoverPassword.html', {})


def LoginPost(request):
    if request.method == 'POST':
        pass
        # form = LoginForm(request.POST)
        # if form.is_valid():
        #     email = request.POST.get('email')
        #     password = request.POST.get('password')
        #     remember_token = request.POST.get('remember_me', None)
        #     user = authenticate(request, username=email, password=password)
        #     print(user)
        #     print(remember_token)
        #     if user is not None:
        #         login(request, user)
        #         if not remember_token:
        #             request.session.set_expiry(0)
        #         return JsonResponse({'url': reverse('index') + userType(user)})
        # else:
        #     return JsonResponse({'form-errors': form.errors})
    else:
        return JsonResponse({'Error'})


def userType(user):
    if Student.objects.filter(user=user).count():
        return "student"
    elif Teacher.objects.filter(user=user).count():
        return "teacher"
    elif Adviser.objects.filter(user=user).count():
        return "adviser"
    elif Manager.objects.filter(user=user).count():
        return "manager"
    else:
        return "none"
