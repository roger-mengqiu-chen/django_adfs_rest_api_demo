
from django_auth_adfs.rest_framework import AdfsAccessTokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes


# Create your views here.
@api_view(['GET'])
@authentication_classes([AdfsAccessTokenAuthentication])
@permission_classes([IsAuthenticated])
def getData(request):
    return Response('API is working')
