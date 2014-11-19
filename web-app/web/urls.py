from django.conf.urls import patterns, include, url
from web.views import hello, home_page, current_datetime, hours_ahead

urlpatterns = patterns('',
    url(r'^$', home_page),
    url(r'^hello/$', hello),
    url(r'^now/$', current_datetime),
    url(r'^now/plus/(\d{1,2})/$', hours_ahead),
)