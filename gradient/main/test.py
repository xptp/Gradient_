import os
import zipfile

from actors.models import Actor
from django.test import TestCase
from django.conf import settings


class TestDownload(TestCase):
    def setUp(self):
        self.actor = Actor(name='fff', last_name='fddf', age='33',
                           town='sdfdfs', height='3433',
                           body='dfsfdf', hair_col='sdffds',
                           eyes_col='fsdfdsfsdf',
                           person='sdfsdfsdf', education='sdfsdf',
                           language='sdfdsfdsf', roles='dsfdsf',
                           roles_teatre='dsfdsfsdf', skills='sdsdfdfssdf',
                           main_image='media/main_photo/3_x4VFEeP.jpg',
                           video='https://www.youtube.com/watch?v=n6EDbtbq82M',
                           hair_long='fddsfsdfsd',
                           shoe='2',
                           dress='2',
                           enable='True')
        self.actor.save()
        test1 = self.actor.images.create(last_name='test1',
                                         images='photos/3.jpg')
        test1.save()
        test2 = self.actor.images.create(last_name='test2',
                                         images='photos/31021.jpg')
        test2.save()
        self.actor.save()

    def test_download(self):
        with zipfile.ZipFile(f'{self.actor.last_name}.zip', 'w') as zf:
            for image in self.actor.images.all():
                x = str(image.images).replace('/', os.sep)
                with open(f'{settings.BASE_DIR}\media\{x}', 'rb') as image_file:
                    f = image_file.read()
                    zf.writestr(f'{image.last_name}.png', f)
        response = self.client.get(f'/api/actors/{self.actor.id}/download')
        path = (f'{settings.BASE_DIR}{os.sep}{self.actor.last_name}.zip')
        print(response.content)
        with open(path, 'rb') as zf:
            zipFile = zf.read()
            self.assertEqual(response.content, zipFile)
