#Imagen

FROM nginx.latest

COPY . /usr/share/nginx/html

# Exponer   

EXPOSE 80

