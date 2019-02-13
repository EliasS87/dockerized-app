docker stop $(docker ps -aq)
docker-compose down
docker container prune -f
docker network prune -f
docker volume prune -f