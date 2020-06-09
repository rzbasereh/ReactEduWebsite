from rest_framework.authentication import SessionAuthentication, BasicAuthentication
# from rest_framework.permissions import IsAuthenticate
from django.contrib.auth.models import User
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Student, Teacher, Adviser, Manager
from .serializers import StudentSerializer
# from .forms import LoginForm
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt


class index(APIView):
    def get(self, request, format=None):
        try:
            students = Student.objects.all()
            serialize_student = StudentSerializer(students)
            data = serialize_student.data
            return Response({"data": data}, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class StudentsList(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def check_email(request):
    email = request.data.get('email')
    if User.objects.filter(email=email).exists():
        return Response({"exists": True}, status=status.HTTP_200_OK)
    else:
        return Response({"exists": False}, status=status.HTTP_200_OK)


class Authentication(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        valid_user = serializer.validated_data['user']
        email = request.data.get('email')
        password = request.data.get('password')
        username = User.objects.get(email=email)
        remember_token = bool(request.data.get('remember', None))
        print(username)
        user = authenticate(username=username, password=password)
        if user is not None:
            print(request.data)
            login(request.data, user)
            token = Token.objects.get_or_create(user=valid_user)
            print(token.key)
            if not remember_token:
                request.session.set_expiry(0)
            return Response({'user': userType(user), 'token': "ff"})
        else:
            return Response({"data": "رمز عبور خود را به درستی وارد کنید!"}, status=status.HTTP_200_OK)


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


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    username = User.objects.get(email=email)
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=status.HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key, 'user': userType(user)},
                    status=status.HTTP_200_OK)


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
