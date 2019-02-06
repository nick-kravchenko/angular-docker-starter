# Angular Docker Starter

This kit includes:
- Docker, Docker Compose
- Angular Server Side Rendering (SSR)
- Lazy-loading modules
- SCSS
- Guards
- Services
- Interceptors
- Type definitions

## Development server
You need to crate `.env` file from `.env.example`
```
# cp .env.example .env
# ~/docker-compose up -d --build
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server
Update env variables:
```
DEVELOPMENT=false
HOST=0.0.0.0
```
Then run
```
docker-compose up -d --build
```
The app will start isomorphic angular server with serverside rendering.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
