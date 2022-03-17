from search import views
from django.urls import path, include
from rest_framework import routers
from search import views

router = routers.DefaultRouter()
router.register(r'cards', views.CardView, 'todo')

urlpatterns = [
    # path('', views.CardList.as_view(), name='home'),
    path('api/', include(router.urls)),

    
]