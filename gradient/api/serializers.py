from rest_framework import serializers

from actors.models import Actor


class ActorsSerializer(serializers.ModelSerializer):
    """Сериализатор просмотра актёров"""

    class Meta:
        model = Actor
        fields = ('id', 'url', 'name', 'last_name',
                  'male', 'age', 'main_image', 'enable')


class ActorsDetailSerializer(serializers.ModelSerializer):
    """Сериализатор подробного просмотра актёра"""

    class Meta:
        model = Actor
        fields = ('id', 'name', 'last_name', 'age', 'town',
                  'height', 'body', 'hair_col', 'eyes_col',
                  'person', 'education', 'language',
                  'roles', 'roles_teatre', 'skills', 'main_image', 'images',
                  'video', 'hair_long',
                  'shoe', 'dress', 'measurement', )
        depth = 1
