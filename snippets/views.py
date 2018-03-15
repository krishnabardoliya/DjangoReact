from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from snippets.serializers import UserSerializer
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import views, serializers, status
from rest_framework.response import Response

# Create your views here.
class Profile(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = UserSerializer

