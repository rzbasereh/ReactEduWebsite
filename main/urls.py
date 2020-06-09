from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.StudentsList.as_view(), name="index"),
    # path('login/', views.loginPage, name="login"),
    # path('logout/', views.logoutUser, name="logout"),
    # path('recover-pass/', views.recoverPassword, name="recoverPassword"),
    path('auth/', views.login, name="auth"),
    path('login/check/', views.check_email, name="check_email"),
    # path('notFound/', views.notFound, name="notFound"),
]
urlpatterns = format_suffix_patterns(urlpatterns)
