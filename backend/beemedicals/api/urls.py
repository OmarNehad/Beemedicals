
from re import search
from django.contrib import admin
from django.urls import path, include
from .views import *

app_name = "api"

urlpatterns = [
        path('all-products',GetProductsList.as_view()),
        path('all-categories',GetCategoryList.as_view()),
        path('category/<str:ctslug>',GetCategoryProducts.as_view()),
        path('product/<str:prslug>',GetProduct.as_view()),
        # path('get-images/<str:prslug>',GetProductImages.as_view()),
        # path('csrf',get_csrf),
        # path('login',loginView),
        # path('singup',singUpView),
        # path('logout',logout_view),
        # path('search-all',SearchResults.as_view()),
]
