from django.contrib import admin

from actors.models import Actor, ActorImage

@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):

    fieldsets = (
         (None, {'fields': ('name', 'last_name', 'male', 'age',
                            'town', 'height', 'body', 'hair_col',
                            'eyes_col', 'person', 'education', 'language',
                            'roles', 'skills', 'main_image', 'images',
                            'video', 'enable')}),
     )
    filter_horizontal = ('images',)
    ordering = ('last_name',)
    search_fields = ('last_name', 'name',)


admin.site.register(ActorImage)
