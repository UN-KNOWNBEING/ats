from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def api_root(request):
    return Response({
        'message': 'Welcome to ATS API!',
        'version': '1.0',
        'endpoints': {
            'hello': '/api/hello/',
            'status': '/api/status/',
        }
    })

@api_view(['GET'])
def hello(request):
    return Response({
        'message': 'ATS Backend is working!', 
        'status': 'success'
    })

@api_view(['GET'])
def status(request):
    return Response({
        'status': 'online',
        'server': 'Django',
        'timestamp': '2024-12-15'
    })
