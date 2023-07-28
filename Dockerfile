FROM nginx:alpine

WORKDIR /app

COPY ./tagsdev/_site/ .

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80