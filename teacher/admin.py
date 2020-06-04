from django.contrib import admin
from .models import Exam, Question, TeacherForm, ClassRoom, QuestionPack, Report, ReportAttach

# Register your models here.
admin.site.register(TeacherForm)
admin.site.register(Exam)
admin.site.register(Question)
admin.site.register(ClassRoom)
admin.site.register(QuestionPack)
admin.site.register(Report)
admin.site.register(ReportAttach)
