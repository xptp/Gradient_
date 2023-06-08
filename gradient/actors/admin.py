from django.contrib import admin
from django.utils.safestring import mark_safe

from actors.models import Actor, ActorImage


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):

    fieldsets = (
         (None, {'fields': ('name', 'last_name', 'male', 'age',
                            'town', 'height', 'body', 'hair_col',
                            'eyes_col', 'person', 'education', 'language',
                            'roles', 'skills', 'main_image', 'images',
                            'video', 'prewiew', 'shoe', 'dress', 'measurement',
                            'enable')}),
     )
    readonly_fields = ['prewiew']

    def prewiew(self, obj):
        return mark_safe(f'<img src="{obj.main_image.url}">')

    filter_horizontal = ('images',)
    ordering = ('last_name',)
    search_fields = ('last_name', 'name',)


@admin.register(ActorImage)
class ActorImageAdmin(admin.ModelAdmin):
    readonly_fields = ['prewiew']
    ordering = ('last_name',)
    search_fields = ('last_name',)

    def prewiew(self, obj):
        return mark_safe(f'<img src="{obj.images.url}">')

    class Meta:
        model = ActorImage
