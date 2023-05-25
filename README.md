# gradient
actors agensy

для запуска:
* python -m venv venv
* source venv/scripts/activate
* cd gradient
* pip install -r requirements.txt
* python manage.py makemigrations
* python manage.py migrate
* python manage.py runserver

создание админа 
* python manage.py createsuperuser

* все актёры доступны по эндпоинту api/actors
* доступ к актёру по id api/actors/id
* админка admin/
* UPDATE:
* актёры(только мужчины) api/male доступ так же по id api/male/id
* актрисы api/female  api/female/id
