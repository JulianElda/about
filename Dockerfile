FROM nginx
WORKDIR /opt/about

# remove default nginx stuff
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/*
COPY public /usr/share/nginx/html/about
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80