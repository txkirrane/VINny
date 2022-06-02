import uuid
from django.db import models

class Model(models.Model):

    # 
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True