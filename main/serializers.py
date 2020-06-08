from rest_framework import serializers
from .models import Student
from django.contrib.auth.models import User
from django.db import models


class StudentSerializer(serializers.ModelSerializer):
    # user = serializers.ReadOnlyField()

    class Meta:
        model = Student
        fields = ('id', 'user', 'status', 'created_at')
