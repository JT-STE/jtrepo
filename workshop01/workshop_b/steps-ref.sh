#!/bin/env bash

#create the network
echo "Creating network"
docker network create mynet

#create the volume
echo "Creating nwdb-vol"
docker volume create nwdb-vol

#run the northwind-db container, mount volume to /var/lib/mysql
echo "Creating northwind-db"
docker run -d \
	--network mynet  \
	--volume=nwdb-vol:/var/lib/mysql \
	--name nwdb \
	stackupiss/northwind-db:v1

# pause to allow database to be ready
echo "pause to allow database to be ready" 
sleep 15

# run the northwind-app
echo "run the northwind-app"
docker run -d \
	-p 8080:3000 \
	--name nwapp \
	--network mynet \
	-e DB_HOST=nwdb \
	-e DB_USER=root \
	-e DB_PASSWORD=changeit \
	stackupiss/northwind-app:v1



