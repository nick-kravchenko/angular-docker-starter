# 1. Grab the latest node image
FROM node:alpine
# 2. Set the working directory inside the container to /app
WORKDIR /app
# 3. Add the .env to the directory (We need those variables)
ADD .env /app
# 4. Expose port defined in .env file
EXPOSE ${PORT}
# 5. Copy necessary to the directory
ADD . /app
# 6. Install dependencies
RUN npm set progress=false && npm i && npm install -g @angular/cli
# 7. Build browser and server applications
RUN npm run build:client-and-server-bundles
# 8. Build server module
RUN npm run webpack:server
# 9. Start the app inside the container
CMD ["/bin/sh", "start.sh"]
