from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Job
from .serializers import JobSerializer, LoginSerializer

from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import RegisterSerializer


@api_view(['GET'])
def job_list(request):
    jobs=Job.objects.filter(is_active=True, daily_wage__gt=500)

    serializer = JobSerializer(jobs, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'message': 'Registration successful',
            'token': token.key,
            'username': user.username,
            'email': user.email
        }, status=status.HTTP_201_CREATED)

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )



@api_view(['POST'])
def login_user(request):
    serializer = LoginSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.validated_data['user']

        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'message': 'Login successful',
            'token': token.key,
            'username': user.username
        })

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )