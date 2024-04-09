# FROM bretfisher/jekyll as builder

# WORKDIR /app

# COPY /tagsdev/* /app

# ARG JEKYLL_ENV=production

# RUN JEKYLL_ENV=production jekyll build


FROM nginx:alpine

WORKDIR /app

# COPY --from=builder /app/_site/* .

COPY ./tagsdev/_site/ .

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

