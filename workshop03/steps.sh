#!/bin/env bash

#create the namespace
echo "Creating network"
kubectl create ns ws3

echo "create ingress-controller"
#create ingress-controller
helm install ingress-controller ingress-nginx/ingress-nginx -n ws3

echo "create db"
#create db
kubectl apply -f workshop3db.yaml -n ws3

echo "create service"
#create service
kubectl apply -f bggns.yaml -n ws3

echo "create default service"
#create default service
kubectl apply -f fortune.yaml -n ws3

echo "default backend ingress"
#create default backend ingress
kubectl apply -f default-backend.yaml -n ws3

echo "create ingress"
#create ingress
kubectl apply -f ws3-ingress.yaml -n ws3


