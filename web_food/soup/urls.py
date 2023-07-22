# from django.urls import path # импортирвание функции path позваляет фармировать маршруты
#
# from .views import *   #. views  точка  типа из этой паки (текущий пакет)тоесть приложения передвет все views
#
# urlpatterns = [  #  urlpatterns  стиандартное название и пописыаем вске маршруты в этом списке
#     path('', index_registration), #http://127.0.0.1:8000/soup
#     path('pot/', pot_and_tab, name="pot"),  # http://127.0.0.1:8000/pot
#     # path('tab/<slug:pageid>/', tab),  # http://127.0.0.1:8000/pot
#     path('history/', history),  # http://127.0.0.1:8000/history
# ]
#
#
from django.urls import path # импортирвание функции path позваляет фармировать маршруты
from django.contrib.auth.views import LogoutView

from .views import *   #. views  точка  типа из этой паки (текущий пакет)тоесть приложения передвет все views

urlpatterns = [  #  urlpatterns  стиандартное название и пописыаем вске маршруты в этом списке
    path('', index_registration ,name = "regist"), #http://127.0.0.1:8000/soup
    path('pot/', pot_and_tab, name="pot"),  # http://127.0.0.1:8000/pot
    # path('tab/<slug:pageid>/', tab),  # http://127.0.0.1:8000/pot
    path('history/', history, name="history"),  # http://127.0.0.1:8000/history
    path(
      'logout/',
      LogoutView.as_view(template_name='logged_out.html'),
      name='logout'
    ),
    path('send-email/',send_email, name="send email") ,
]