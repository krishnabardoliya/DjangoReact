from django.contrib import admin
from snippets.models import Profile
# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_display=('user','username','firstname','lastname','age') 


admin.site.register(Profile,ProfileAdmin)    