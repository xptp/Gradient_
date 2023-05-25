from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ActorsMenViewSet, ActorsViewSet, ActorsWomenViewSet

app_name = 'api'

router = DefaultRouter()
router.register('actors', ActorsViewSet, basename='actors')
router.register('male', ActorsMenViewSet, basename='male')
router.register('female', ActorsWomenViewSet, basename='female')

urlpatterns = [
    path('', include(router.urls)),
]
