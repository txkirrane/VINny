from django.contrib import admin

from django.contrib.auth.admin import UserAdmin

from .models import ExtendedUser, Notification

# Register your models here.

class ExtendedUserAdmin(UserAdmin):
    model = ExtendedUser
    fieldsets = UserAdmin.fieldsets

admin.site.register(ExtendedUser, ExtendedUserAdmin)
admin.site.register(Notification)