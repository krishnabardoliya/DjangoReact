from snippets.views import Profile
from django.conf.urls import include, url
from rest_framework import routers
from snippets.views import login
from django.contrib.auth import views as auth_views

router = routers.DefaultRouter()
router.register('user', Profile)

urlpatterns = [
    
    url("^", include(router.urls)),
    url(r'^login/', login),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout')
]