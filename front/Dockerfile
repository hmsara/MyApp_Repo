# Étape 1 : Build de l'application Angular
FROM node:14 
RUN mkdir -p /app

WORKDIR /app/front
COPY  ["front/package.json", "front/package-lock.json", "./"]
COPY front/angular.json ./

COPY /front /app/front
RUN echo $(pwd )
RUN echo $(ls )
COPY front/tsconfig.app.json /app/front/



RUN npm install --legacy-peer-deps
RUN npm audit fix
RUN npm install -g @angular/cli@12.0.1



ARG configuration=production
RUN npm run ng build -- --output-path=dist  --verbose

#final stage 
#FROM  nginx:latest
#COPY --from=0 /app/dist/ /usr/share/nginx/html

EXPOSE 80
EXPOSE 4300
# CMD nginx -g "daemon off;"
