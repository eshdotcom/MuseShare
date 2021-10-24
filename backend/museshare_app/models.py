from django.db import models
# from custom.fields import SeparatedValuesField

class MusicProject(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    published = models.BooleanField(default=False)
    needs = models.CharField(max_length=70, blank=False, default='')
    upload = models.FileField(upload_to='uploads/')
    # tags = SeparatedValuesField()



