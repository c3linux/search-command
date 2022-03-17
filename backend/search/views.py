from django.shortcuts import render
from .models import Card
from rest_framework import viewsets
from .serializers import CardSerializer
from rest_framework.decorators import action
from rest_framework.response import Response,status
# Create your views here.

class CardView(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.filter(status=1).order_by('-created_on')
    
    @action(detail=True, methods=['post'])
    def post_card(self, request, pk=None):
        card = self.get_object()
        serializer = CardSerializer(data=request.data)
        if serializer.is_valid():
            # card.post_card(serializer.validated_data['password'])
            card.save()
            return Response({'status': 'success'})
        
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)