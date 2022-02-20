FROM steebchen/nginx-spa:stable

COPY dist/lab1ayd2 /app

EXPOSE 80

CMD ["nginx"]
