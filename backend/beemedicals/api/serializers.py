from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id','name','image_url','description','short_description','slug') 

    def get_image_url(self, category):
        request = self.context.get('request')
        photo_url = category.image.url
        return request.build_absolute_uri(photo_url)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

# class ProductImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = "image"


# class CartSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = "__all__"