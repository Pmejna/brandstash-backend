# Backend project: NestJs+MySql, encapsulated at the moment in the Docker container

## To run:
* clone repo
* create .env file with variables:
```
//key for your JWT encode secret 
SECRET_KEY="yourrandomkey",
// your localhost for frontend (coming soon)
FRONTEND_URL="http://localhost:4200"
```
* run:
```bash
npm install && docker compose up
```

>Keep in mind that this is not a production product yet,
>so all database setup don't use an ENV variables.
>This will change when project will go live.
