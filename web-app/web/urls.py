from django.conf import settings
from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from web.views import home_page

# admin
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    (r'^admin/', include(admin.site.urls)),
    url(r'^$', home_page),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)