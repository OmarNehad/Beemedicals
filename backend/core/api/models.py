from django.db import models
from django.template.defaultfilters import slugify
#from django.contrib.auth.models import User

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100,unique=True,blank=False)
    description = models.TextField()
    short_description = models.TextField()
    image = models.ImageField(upload_to='images/categories',blank=True)
    slug = models.SlugField(null=True,blank=True)

    def __str__(self):
        return self.name

    def save(self,*args,**kwargs):
        self.slug = slugify(self.name)
        super().save(*args,**kwargs)


class Product(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='products')
    name = models.CharField(max_length=100,unique=True,blank=False)
    description = models.TextField()
    short_description = models.TextField()
    stock = models.PositiveIntegerField()
    slug = models.SlugField(null=True,blank=True)
    price = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
    def __str__(self):
        return self.name

    def save(self,*args,**kwargs):
        self.slug = slugify(self.name)
        super().save(*args,**kwargs)
        
class ProductImage(models.Model):
    product = models.ForeignKey(Product,related_name="images",on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/products',blank=False)

# class Cart(models.Model):
#     customer = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
#     total = models.DecimalField(default=0.00, max_digits=10, decimal_places=2)
# #    updated = models.DateTimeField(auto_now=True)
# #    created = models.DateTimeField(auto_now_add=True)

# class CartItem(models.Model):
#     cart =  models.ForeignKey(Cart,on_delete=models.CASCADE)
#     product = models.ForeignKey(Product,on_delete=models.CASCADE,null=True)
#     count = models.PositiveSmallIntegerField()



# class Order(models.Model):
#     id = models.AutoField(primary_key=True,unique=True,blank=False)
#     cart = models.ForeignKey(Cart,on_delete=models.CASCADE,null=False)
    

