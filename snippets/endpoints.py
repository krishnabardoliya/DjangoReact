from snippets.views import Profile,ProfileP
from django.conf.urls import include, url
from rest_framework import routers
from snippets.views import login, addprofile, delprofile
from django.contrib.auth import views as auth_views

router = routers.DefaultRouter()
router.register('user', Profile)
router.register('profile',ProfileP)



urlpatterns = [
    
    url("^", include(router.urls)),
    url(r'^login/', login ),
    url(r'^addprofile/', addprofile ),
    url(r'^delprofile/', delprofile ),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),
]