from django.db import models
# from custom.fields import SeparatedValuesField

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(max_length=100, help_text='Enter a musical genre (e.g. Heavy Metal)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class MusicProject(models.Model):
    """Model representing a single project"""    
    title = models.CharField(max_length=70, blank=False, default='', verbose_name='Title')
    description = models.CharField(max_length=200,blank=False, default='', verbose_name='Description')
    published = models.BooleanField(default=False, verbose_name='Project completed')
    upload = models.FileField(upload_to='uploads/', verbose_name='Audio file')
    tags = models.CharField(max_length=70, blank=False, verbose_name='Identifier tags')
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this song')

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


