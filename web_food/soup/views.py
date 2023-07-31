from django.http import HttpResponse, HttpResponseNotFound
from django.shortcuts import render, redirect
from .forms import CreationForm
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import AuthenticationForm
from django.core.mail import send_mail as send_emailpost

def index_registration(request):
    if request.user.is_authenticated:
        return redirect('pot')
    if request.method == 'POST':
        form1 = AuthenticationForm(request, data=request.POST)
        form2 = CreationForm(request.POST)
        if form1.is_valid():
            user = form1.get_user()
            login(request, user)
            return redirect('pot')
        if form2.is_valid():
            form2.save()
            return redirect('regist')
    else:
        form1 = AuthenticationForm()
        form2 = CreationForm()

    return render(request, 'index_registration.html', {'form1': form1, 'form2': form2})
def pot_and_tab(request):
    return render(request, 'pot_and_tab.html')

def history(request):
    return render(request, 'history')

def pageNotFound(request, exception ):
    return HttpResponseNotFound("Тут никто ничего не собирается мыть !   ЭТО  НЕ нашаА кУХнЯ")


def send_email(request):
    ingredients = request.GET.get('ingredients').split()
    ingredients = "\n".join(f"{number} {ingredient}" for number, ingredient in enumerate(ingredients, 1))
    send_emailpost(
        'theme',
        ingredients,
        'stalker400@mail.ru',
        [
            'stalker400@mail.ru','dmitry.khomanko@yandex.ru',
        ]

    )
    return redirect('pot')

# def send_email(request):
#     ingredients = request.GET.getlist('ingredients')
#     ingredients = "\n".join(f"{number} {ingredient}" for number, ingredient in enumerate(ingredients, 1))
#     send_emailpost(
#         'theme',
#         ingredients,
#         'stalker400@mail.ru',
#         [
#             'stalker400@mail.ru','dmitry.khomanko@yandex.ru',
#         ]
#
#     )
#     return redirect('pot')
#






# def tab(request, pageid):
#     return HttpResponse(f"<h1>Таблица</h1><p>{pageid}</p>")