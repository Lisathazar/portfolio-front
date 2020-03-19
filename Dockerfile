FROM node:12.11.1 as build
WORKDIR /app
RUN npm install
RUN npm install -g @angular/cli@8.3.22
# add app
COPY . /app

# start app
RUN npm run build


############
### prod ###
############

# nginx base image
FROM nginx:1.16.0-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/client /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
