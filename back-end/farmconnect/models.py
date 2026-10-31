from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):

    ROLE_CHOICES = [
        ('FARMER', 'Farmer'),
        ('LABOURER', 'Labourer'),
    ]

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    phone = models.CharField(max_length=15, unique=True)

    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES
    )

    location = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.user.username



class Job(models.Model):

    farmer = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    title = models.CharField(max_length=150)

    description = models.TextField()

    location = models.CharField(max_length=100)

    workers_required = models.IntegerField()

    daily_wage = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    job_date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class JobApplication(models.Model):

    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('ACCEPTED', 'Accepted'),
        ('REJECTED', 'Rejected'),
    ]

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE
    )

    labourer = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    applied_at = models.DateTimeField(auto_now_add=True)

    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    def __str__(self):
        return f"{self.labourer.username} - {self.job.title}"
