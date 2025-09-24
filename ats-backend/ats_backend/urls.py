from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def root_view(request):
    return JsonResponse({
        'message': 'ATS Backend API is running!',
        'endpoints': {
            'admin': '/admin/',
            'api_hello': '/api/hello/',
        }
    })

urlpatterns = [
    path('', root_view, name='root'),  # Add this line
    path('admin/', admin.site.urls),
    path('api/', include('ats_app.urls')),
]
