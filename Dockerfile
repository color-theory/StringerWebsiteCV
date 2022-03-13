FROM nginx
COPY dist /usr/share/nginx/html

RUN cat /etc/nginx/conf.d/default.conf
#COPY ./nginx.conf /etc/nginx/nginx.conf