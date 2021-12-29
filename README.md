# project_template
A starting point for all my projects


In order to start new projects:
Decide on your database - options included within this repo are:
mongoDB
postgreSQL
mySQL

After deciding on your database management system update the database name in your choice

Decide on your server - options included within this repo are:
express
json

After deciding your server update the start script

for express:
"nodemon backend/server/express/server.js"

for json:
"json-server --watch backend/database/json/db.json --routes backend/server/json/routes.json"

Update the title in client/dist/index.html