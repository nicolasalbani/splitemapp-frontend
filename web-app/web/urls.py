from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from web.views import home_page

urlpatterns = patterns('',
    url(r'^$', home_page),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)