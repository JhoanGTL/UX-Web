# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:latest

COPY . /usr/share/nginx/html

# Exponer   

EXPOSE 80

