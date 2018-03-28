from django.db import models
import django.contrib.auth 
from django.contrib.auth.models import User

# Create your models here.
class Profile(models.Model):
    user = models.ForeignKey(User, null=True, blank=False)
    username = models.TextField(blank=False)
    firstname = models.TextField(blank=False)
    lastname = models.TextField(blank=False)
    age = models.PositiveIntegerField(default=1,blank=False)
    option1 = models.BooleanField(default=False)
    option2 = models.BooleanField(default=False)
    gender = models.TextField(blank=False)
    color = models.TextField(blank=False)
    colorp = models.TextField(blank=False)
    date = models.DateTimeField(blank=True, null=True)
    class Meta:
        verbose_name_plural = 'Profile'

