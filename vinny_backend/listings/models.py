from django.db import models
from vinny_backend.models import Model

# Create your models here.

class Listing(Model):

    # Owner and author of the listing
    owner = models.ForeignKey('accounts.ExtendedUser', on_delete=models.CASCADE, related_name='listings')
    vehicle = models.ForeignKey('vehicles.Vehicle', on_delete=models.CASCADE, related_name='listings')