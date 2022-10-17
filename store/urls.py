from django.urls import path

from . import viewse

urlpatters = [
    path('<str:str>', views.product, name='store')
]
