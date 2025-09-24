from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_root, name='api-root'),  # /api/
    path('hello/', views.hello, name='hello'),  # /api/hello/
    path('status/', views.status, name='status'),  # /api/status/
]
