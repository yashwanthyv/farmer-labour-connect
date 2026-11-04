from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Job
from .serializers import JobSerializer


@api_view(['GET'])
def job_list(request):
    jobs=Job.objects.filter(is_active=True, daily_wage__gt=500)

    serializer = JobSerializer(jobs, many=True)

    return Response(serializer.data)