# Используем минимальный nginx-образ
FROM nginx:alpine

# Копируем статические файлы в директорию nginx
COPY . /usr/share/nginx/html

# Порт, на котором работает nginx
EXPOSE 80