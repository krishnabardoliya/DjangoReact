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
from snippets.serializers import UserSerializer,ProfileSerializer
from django.contrib.auth.models import User
from rest_framework import views, serializers, status
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import HttpResponse
from .models import Profile as ProfileModel
import json
import jwt
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from rest_framework.decorators import api_view,permission_classes
from django.http import JsonResponse

# Create your views here.
class Profile(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = UserSerializer


class ProfileP(viewsets.ModelViewSet):
    queryset = ProfileModel.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ProfileSerializer
    

@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def login(request):
    print(request.method)
    if request.method == "POST":
        if request.user.is_authenticated():
            a = User.objects.get(id=request.user.id)
            cd = {
                "id":a.id,
                "username":a.username,
                "password":a.password,
                "email":a.email
            }
            #print(cd)
            return JsonResponse(cd, status=200)
        else:    
            body_unicode = request.body.decode('utf-8')
            body = json.loads(body_unicode)
            username = body['username']
            password = body['password']
            user = authenticate(username=username, password=password)
            if user:
                auth_login(request, user)
                if request.user.is_authenticated:
                    print("id",request.user.id)
                    a = User.objects.get(id=request.user.id)
                    cd = {
                            "id":a.id,
                            "username":a.username,
                            "password":a.password,
                            "email":a.email
                        }
                    return JsonResponse(cd, status=200)
        return HttpResponse({'status':'false','message':'fail login'}, status=400)



@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def addprofile(request):
    if request.method == "POST":
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        option1=False
        option2=False
        gender=None
        date=None
        color=None
        colorp=None

        for key, value in body.items():
            if key=='firstName':
                first_name = body['firstName']
            if key=='lastName':     
                last_name = body['lastName']
            if key=='Age':         
                age = body['Age']
            userr = body['user']
            username_ = body['username']
            if key=='gender':  
                gender=body['gender']
            if key=='option1':     
                option1=body['option1']
            if key=='option2':     
                option2=body['option2']
            if key=='date':     
                date=body['date'] 
            if key=='color':     
                color=body['color']
            if key=='colorp':    
                colorp=body['colorp']            
        print(userr)
        try:
            a = ProfileModel.objects.get(user_id=userr)
        except:
            print("no user")
            a = None
        if a:
            ProfileModel.objects.get(user_id=userr).delete()
            s = ProfileModel()
            s.user_id = userr
            s.firstname = first_name
            s.lastname = last_name
            s.username= username_
            s.age = age
            if option1:
                s.option1=option1
            if option2:    
                s.option2=option2
            if gender:    
                s.gender=gender
            if color:    
                s.color=color 
            if date:    
                s.date=date
            if colorp:    
                s.colorp=colorp        
            s.save()
        else:
            s = ProfileModel()
            s.user_id = userr
            s.firstname = first_name
            s.lastname = last_name
            s.age = age
            s.username=username_
            if option1:
                s.option1=option1
            if option2:    
                s.option2=option2
            if gender:    
                s.gender=gender
            if color:    
                s.color=color
            if date:    
                s.date=date
            if colorp:    
                s.colorp=colorp              
            s.save()
        return HttpResponse({'status':'true'}, status=200)
    return HttpResponse({'status':'false'}, status=400)


@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def delprofile(request):
    if request.method == "POST":
        print(request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        userr = body['user']
        try:
            ProfileModel.objects.get(user_id=userr).delete()
        except:
            print("no user")
        return HttpResponse({'status':'true'}, status=200)    
            

# fetch profile

@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def list_(request):
    if request.method == "POST":
        print("in list__")
        print(request.body)
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        print(body)
        userr = body['user']
        print(userr)
        try:
            a=ProfileModel.objects.get(user_id=userr)
            print(a.username)
            print(a.lastname)

        except:
            a=None
            print("no user")
        if a:
            cd = {"firstName":a.firstname, "lastName":a.lastname, "Age":a.age ,"option1":a.option1,"option2":a.option2,"gender":a.gender,"color":a.color,"date":a.date,"colorp":a.colorp}
            print(cd)
            return JsonResponse(cd, status=200)
        else:
            return HttpResponse({'status':'true'}, status=404)
    return HttpResponse({'status':'false'}, status=400) 
