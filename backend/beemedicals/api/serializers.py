from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ('id','name','image_url','description','short_description') 

    def get_image_url(self, category):
        request = self.context.get('request')
        photo_url = category.image.url
        return request.build_absolute_uri(photo_url)

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["image"]

class ProductSerializer(serializers.ModelSerializer):

    images_urls = serializers.SerializerMethodField()
    class Meta:
        model = Product
        fields = ('id','name','description','short_description','stock','price','images_urls')

    def get_images_urls(self,product):
        request = self.context.get("request")
        return [request.build_absolute_uri(primg.image.url) for primg in product.images.all()]
        #return [request.build_absolute_uri(primg["image"]) for primg in  ProductImageSerializer(context=self.context,instance=product.images.all(), many=True).data]
        



# class CartSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = "__all__"