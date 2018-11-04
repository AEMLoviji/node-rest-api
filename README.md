# node-rest-api
REST API with Node.js, Express and PostgreSQL

In this simple project, you’ll learn how to create RESTful API in a Node.js running on Express server.
This API uses PostgreSQL database to store and retreive data.

You will need to install below modules using ```npm i express pg```
 - [Express](https://expressjs.com/) for the server 
 - [pg](https://node-postgres.com/) to be able to connect to PostgreSQL server
 
 You can run below script from you PostgreSQL tool for managing DataBase, to create DB table which is used in API
 ```
CREATE TABLE public.companies
(
    "ID" integer NOT NULL DEFAULT nextval('"users_ID_seq"'::regclass),
    name character varying(30) COLLATE pg_catalog."default",
    email character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY ("ID")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.companies
    OWNER to postgres;
```
