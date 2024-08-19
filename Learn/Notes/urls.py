from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FolderViewSet, TagViewSet, NoteViewSet

router = DefaultRouter()
router.register(r'folders', FolderViewSet)
router.register(r'tags', TagViewSet)
router.register(r'notes', NoteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
