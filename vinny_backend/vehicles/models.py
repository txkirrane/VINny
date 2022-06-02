from django.db import models
from vinny_backend.models import Model

# Create your models here.

class Make(Model):

    name = models.CharField(max_length=32, blank=False, null=False)

class Vehicle(Model):

    CONDITION_CHOICES = (
        ("NEW", "New"),
        ("PRE", "Pre-owned"),
        ("CPO", "Certified Pre-owned"),
        ("SLV", "Salvage")
    )

    # Owner of vehicle
    owner = models.ForeignKey('accounts.ExtendedUser', on_delete=models.CASCADE, related_name='vehicles')

    # Make, model, and year of vehicle
    vehicle_make = models.ForeignKey('vehicles.Make', on_delete=models.CASCADE, related_name='vehicles')
    vehicle_model = models.ForeignKey('vehicles.Model', on_delete=models.CASCADE, related_name='vehicles')
    vehicle_year = models.PositiveSmallIntegerField(max_length=4, blank=False)

    # Vehicle VIN
    vehicle_vin = models.CharField(max_length=17)

    # Vehicle characteristics
    vehicle_mileage = models.PositiveIntegerField()
    vehicle_condition = models.IntegerField(choices=CONDITION_CHOICES, max_length=3)