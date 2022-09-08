FROM docker.io/library/nginx:1.23.1-alpine@sha256:082f8c10bd47b6acc8ef15ae61ae45dd8fde0e9f389a8b5cb23c37408642bf5d
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./src/index.js /usr/share/nginx/html/index.js
COPY ./src/index.html /usr/share/nginx/html/index.html
