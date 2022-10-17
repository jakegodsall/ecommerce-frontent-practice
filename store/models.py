from django.db import models

# Create your models here.


class Brand(models.Model):
    name = models.CharField(max_length=128)
    region = models.CharField(max_length=64)


class Product(models.Model):
    name = models.CharField(max_length=128)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    description = models.TextField()
    original_price = models.FloatField()
    discount = models.FloatField()
    quantity = models.IntegerField()
    date = models.DateField()
    front_image = models.CharField(max_length=64)
    side_image = models.CharField(max_length=64)
    back_image = models.CharField(max_length=64)
