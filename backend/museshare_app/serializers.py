from rest_framework import serializers 
from tutorials.models import Tutorial
 
 
class MuseshareAppSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = MusicProject
        fields = ('id',
                  # Add fields
                  )