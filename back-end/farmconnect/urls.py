from django.urls import path
from . import views

urlpatterns = [
    path('jobs/', views.job_list, name='job-list'),
    path('register/', views.register_user, name='register'),
    path('login/', views.login_user, name='login'),
    path('my-jobs/', views.my_jobs, name='my-jobs'),
]