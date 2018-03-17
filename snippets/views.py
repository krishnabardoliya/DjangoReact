from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from snippets.serializers import UserSerializer
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import views, serializers, status
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
import json
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from rest_framework.decorators import api_view

from django.shortcuts import render
from rest_framework import viewsets, permissions
from snippets.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import views, serializers, status
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
import json
import jwt
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from rest_framework.decorators import api_view,permission_classes


# Create your views here.
class Profile(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = UserSerializer


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def login(request):
    print(request.method)
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        username = body['username']
        password = body['password']
        user = authenticate(username=username, password=password)
        if user:
            auth_login(request, user)
            if request.user.is_authenticated:
                #print(request.user.email)
                return HttpResponse({'status':'true','message':'login successfull'}, status=200)
    return HttpResponse({'status':'false','message':'fail login'}, status=400)

