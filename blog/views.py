from django.shortcuts import render
from django.http import HttpResponse
import feedparser
from blog.models import User
from django.http import JsonResponse
import json

# Create your views here.
def index(request):
    return render(request, 'blog/index.html')

def signup(request):
    return render(request, 'blog/signup.html')

def blog_view(reqeust):
    return render(reqeust, 'blog/blog_view.html')

def submit_registration(request):
    if request.method == 'POST':
        user_name = request.POST.get('user_name')
        user_pw = request.POST.get('user_pw')
        email = request.POST.get('email')

        user = User(user_name=user_name, user_pw=user_pw, email=email)
        user.save()

        return render(request, 'blog/index.html')
    return render(request, 'blog/index.html')

def submit_signin(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))

            username = data.get('user_name')
            password = data.get('user_pw')

            user = User.objects.filter(user_name=username, user_pw=password).first()

            if user is not None:
                response_data = {'message': 'Login Successful !', 'user_name': username}
                return JsonResponse(response_data)
            else:
                response_data = {'message': 'Login Failed !'}
                return JsonResponse(response_data, status=401)
        except json.JSONDecodeError:
                response_data = {'message': 'Invalid JSON format'}
                return JsonResponse(response_data, status=400)
    return JsonResponse({'message': 'Invalid request method'}, status=405)