# 1. Grab the latest node image
FROM node:26.12.1-alpine3.24
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
RUN npm run build
# 8. Start the app inside the container
CMD ["/bin/sh", "start.sh"]
