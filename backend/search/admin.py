from django.contrib import admin
from .models import Card
class CardAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_on', 'updated_on')



# Register your models here.
admin.site.register(Card, CardAdmin)