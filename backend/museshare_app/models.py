from django.db import models
# from custom.fields import SeparatedValuesField

# Represents a single project
class MusicProject(models.Model):
    
    title = models.CharField(max_length=70, blank=False, default='', verbose_name='Title')
    description = models.CharField(max_length=200,blank=False, default='', verbose_name='Description')
    published = models.BooleanField(default=False, verbose_name='Project completed')
    needs = models.CharField(max_length=70, blank=False, default='', verbose_name='Current needs')
    upload = models.FileField(upload_to='uploads/', verbose_name='Audio file')
    tags = models.CharField(max_length=70, blank=False, verbose_name='Genre tags')

    # Metadata
    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.title

    def get_file_path(self):
        return self.upload.url

    def get_absolute_url(self):
        """Returns the url to access a particular instance of the model."""
        return reverse('model-detail-view', args=[str(self.id)])


