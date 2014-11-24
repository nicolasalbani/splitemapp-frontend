from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse

def home_page(request):
    t = get_template('home.html')
    html = t.render(Context())
    return HttpResponse(html)