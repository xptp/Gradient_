# Generated by Django 3.2.18 on 2023-05-25 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ActorImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(upload_to='photos', verbose_name='Фото')),
                ('last_name', models.CharField(max_length=40, verbose_name='Фамилия')),
            ],
            options={
                'verbose_name': 'Фото актёров',
                'verbose_name_plural': 'Фото актёров',
            },
        ),
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, verbose_name='Имя')),
                ('last_name', models.CharField(max_length=40, verbose_name='Фамилия')),
                ('male', models.TextField(choices=[('M', 'Мужчина'), ('W', 'Женщина')], max_length=1, verbose_name='Пол')),
                ('age', models.IntegerField(verbose_name='Возраст')),
                ('town', models.CharField(max_length=30, verbose_name='Город')),
                ('height', models.IntegerField(verbose_name='Рост')),
                ('body', models.CharField(max_length=30, verbose_name='Телосложение')),
                ('hair_col', models.CharField(max_length=30, verbose_name='Цвет волос')),
                ('eyes_col', models.CharField(max_length=30, verbose_name='Цвет глаз')),
                ('person', models.CharField(max_length=30, verbose_name='Внешность')),
                ('education', models.CharField(max_length=30, verbose_name='Образование')),
                ('language', models.CharField(max_length=30, verbose_name='Языки')),
                ('roles', models.TextField(verbose_name='Роли в кино')),
                ('skills', models.TextField(verbose_name='Навыки')),
                ('main_image', models.ImageField(upload_to='', verbose_name='Главное фото')),
                ('enable', models.BooleanField(verbose_name='Активен?')),
                ('images', models.ManyToManyField(related_name='Фото', to='actors.ActorImage', verbose_name='Фото')),
            ],
            options={
                'verbose_name': 'Актёр',
                'verbose_name_plural': 'Актёры',
            },
        ),
    ]
