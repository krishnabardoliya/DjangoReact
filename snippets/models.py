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
    class Meta:
        verbose_name_plural = 'Profile'

    