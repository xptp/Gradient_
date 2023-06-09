from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def download_zip(request, pk):
    actor = Actor.objects.get(pk=pk)
    if actor:
        response = HttpResponse(content_type='application/zip')
        zf = zipfile.ZipFile(response, 'w')
        images = actor.images.all()
        for image in images:
            x = str(image.images).replace('/', os.sep)
            with open(f'{settings.BASE_DIR}\media\{x}', 'rb') as image_file:
                f = image_file.read()
                zf.writestr(f'{image.last_name}_{image.id}.png', f)

        response['Content-Disposition'] = f'attachment; filename={Actor.last_name}.zip'
        return response
