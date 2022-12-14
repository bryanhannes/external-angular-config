# External config in Angular

This repo is used in <<insert blog post here>> to show how you can externalise your Angular configuration.

#

## Building the Docker image

```CLI
docker build -t external-config-angular .
```

## Running the Docker image

TIP: Change the path according to your local file structure

```CLI
docker run  -p 8080:8080 -v /Users/bryan/demos/external-config/config:/usr/share/nginx/html/assets/config external-config-angular
```
