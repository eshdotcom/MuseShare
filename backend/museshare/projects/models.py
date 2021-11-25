from django.db import models

class MusicProject(models.Model):
    pass

class Genre(models.Model):
    """Model representing a book genre."""
    name = models.CharField(max_length=100, help_text='a musical genre (e.g. Heavy Metal)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class MusicProject(models.Model):
    """Model representing a single project"""    
    title = models.CharField(max_length=70, blank=False, default='', verbose_name='Title')
    primarykey = models.primarykey
    description = models.CharField(max_length=200,blank=False, default='', verbose_name='Description of music project')
    upload = models.FileField(upload_to='uploads/', verbose_name='Audio file')
    image = models.ImageField(upload_to='uploads/', verbose_name='Project cover art')
    tags = models.CharField(max_length=70, blank=False, verbose_name='Music identifier tags')
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this song')
    last_updated = models.DateField(null=True, blank=True)

    # Metadata
    class Meta:
        ordering = ['-title']

    def __str__(self):
        return self.title

    def get_audio_path(self):
        return self.upload.url

    def get_image_path(self):
        return self.image.url

    def get_absolute_url(self):
        """Returns the url to access a particular instance of the model."""
        return reverse('model-detail-view', args=[str(self.title)])