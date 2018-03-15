from snippets.views import Profile
from django.conf.urls import include, url
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', Profile)

urlpatterns = [
    url("^", include(router.urls)),
]