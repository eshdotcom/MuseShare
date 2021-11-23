from django.contrib import admin

# Register your models here.
from .models import MusicProject, Genre

admin.site.register(MusicProject)
admin.site.register(Genre)
