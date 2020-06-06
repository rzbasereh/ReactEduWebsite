from rest_framework import serializers
from django.contrib.auth.models import User
from django.db import models


class StudentSerializer(serializers.ModelSerializer):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    STATUS = (
        ('Check', 'در حال بررسی'),
        ('Active', 'فعال'),
        ('Suspend', 'مسدود'),
    )
    status = models.CharField(max_length=7, choices=STATUS, default="Check")
    created_at = models.DateTimeField(auto_now_add=True)
