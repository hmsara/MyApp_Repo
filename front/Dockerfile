# Étape 1 : Build de l'application Angular
FROM node:14 
RUN mkdir -p /app

WORKDIR /app
RUN ls -al
COPY  ["front/package.json", "front/package-lock.json", "./"]
RUN npm install --legacy-peer-deps
RUN npm audit fix

COPY . /app
ARG configuration=production
RUN npm run ng build -- --output-path=dist  --verbose

#final stage 
FROM  nginx:latest
COPY --from=0 /app/dist/ /usr/share/nginx/html

# Expose port 80
# EXPOSE 4300
# CMD nginx -g "daemon off;"
