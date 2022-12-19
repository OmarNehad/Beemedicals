import json
from django.http import JsonResponse
from .models import *
from rest_framework import generics,views,status
from .serializers import *
from rest_framework.response import Response
from django.middleware.csrf import get_token
from django.contrib.auth import authenticate, login,logout
from django.views.decorators.http import require_POST
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

    


# Create your views here.
class GetCategoryList(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class GetProductsList(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    
class GetCategoryProducts(views.APIView):
    serializer_class = ProductSerializer
    def get(self,request,ctslug):
        queryset = Category.objects.filter(slug=ctslug)
        if len(queryset) > 0:
            return Response(self.serializer_class( queryset[0].products.all(), many=True, context={'request': request}).data, status=status.HTTP_200_OK)
        return Response({'Category Not Found': 'Invalid Category name.'}, status=status.HTTP_404_NOT_FOUND)


class GetProduct(views.APIView):
    serializer_class = ProductSerializer
    def get(self,request,prslug):
        queryset  = Product.objects.filter(slug=prslug)        
        if len(queryset) > 0:
            return Response(self.serializer_class(queryset[0],context={'request': request}).data, status=status.HTTP_200_OK)
        return Response({'Product Not Found': 'Invalid Product name.'}, status=status.HTTP_404_NOT_FOUND)


# class GetCartItems(views.APIView,LoginRequiredMixin):
#     def get(request, format=None):
#         #items = CartItem.objects.filter(cart__user=request.user)
#         cart = Cart.objects.filter(customer=request.user)
#         return Response({CartSerializer(cart).data})
#         #return JsonResponse({"username", request.user.username})



# class SearchResults(views.APIView):
#     serializer_class = ProductSerializer
#     lookup_url_kwarg = 'q'
#     def get(self,request):
#         keyword = request.data.get(self.lookup_url_kwarg)
#         queryset = Product.objects.filter(name__contains=keyword)
#         return Response(self.serializer_class(queryset,many=True).data, status=status.HTTP_200_OK)


# def get_csrf(request):
#     response = JsonResponse({"Info": "Success - Set CSRF cookie"})
#     response["X-CSRFToken"] = get_token(request)
#     return response


# @require_POST
# def loginView(request):
#     data = json.loads(request.body)
#     username = data.get("username")
#     password = data.get("password")

#     if username is None or password is None:
#         return JsonResponse({"info": "Username and Password is needed"})

#     user = authenticate(username=username, password=password)

#     if user is None:
#         return JsonResponse({"info": "User does not exist"}, status=400)

#     login(request, user)
#     return JsonResponse({"info": "User logged in successfully"})


# class WhoAmIView(APIView):
#     authentication_classes = [SessionAuthentication]
#     permission_classes = [IsAuthenticated]

#     @staticmethod
#     def get(request, format=None):
#         print(request.user.username)
#         return JsonResponse({"username", request.user.username})