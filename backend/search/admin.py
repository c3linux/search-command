from django.contrib import admin
from .models import Card

@admin.action(description='Publish selected commands')
def make_published(modeladmin, request, queryset):
    queryset.update(status='1')
class CardAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_on', 'updated_on', 'status')
    actions = [make_published]


# Register your models here.
admin.site.register(Card, CardAdmin)


