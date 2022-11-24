FROM debian:latest


RUN apt update
# RUN apt upgrade
RUN apt install curl gnupg2 gcc g++ make libssl-dev -y
RUN curl -sL https://deb.nodesource.com/setup_current.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt install nodejs -y
RUN npm install npm@latest -g
RUN npm -g install create-react-app
RUN apt install nginx python3-certbot-nginx -y
RUN mkdir /var/www/html/app

COPY . /var/www/html/app

# RUN chown -R www-data:www-data /var/www/html/app

RUN ls /var/www/html/app/public

WORKDIR /var/www/html/app

RUN npm install
RUN npm run build

RUN cp /var/www/html/app/nginx.conf /etc/nginx/conf.d/react.conf
RUN nginx -t
# RUN systemctl restart nginx

EXPOSE 8000

# CMD ["npm", "start"]