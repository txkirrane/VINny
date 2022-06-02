from django.db import models
from django.contrib.auth.models import AbstractUser

from vinny_backend.models import Model

# Create your models here.

class ExtendedUser(AbstractUser, Model):
    class Meta:
        pass

class Notification(Model):

    # Target user for notification
    user = models.ForeignKey('accounts.ExtendedUser', on_delete=models.CASCADE, related_name='notifications')

    # Title and 
    title = models.CharField(max_length=64, blank=False, null=False)
    details = models.TextField()

    # Link
    link = models.URLField(null=True, blank=True)