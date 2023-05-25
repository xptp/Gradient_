from django.contrib import admin

from actors.models import Actor, ActorImage


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    ordering = ('last_name',)
    search_fields = ('last_name', 'name',)


admin.site.register(ActorImage)
