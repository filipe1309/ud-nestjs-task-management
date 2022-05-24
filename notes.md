# Notes

> notes taken during the course

https://github.com/arielweinberger/nestjs-course-task-management/tree/s1-task-management-app

## CLASS-7

```
yarn global add @nestjs/cli

nest -v

nest new .
```

## CLASS-8

```
yarn start:dev
```
## CLASS-9

```
nest g --help
nest g module tasks
```

## CLASS-11
## CLASS-12

```
nest g controller tasks --no-spec
```
## CLASS-14

```
nest g service tasks --no-spec
```
## CLASS-15

## CLASS-16

## CLASS-19

```
yarn add uuid
```
## CLASS-20

## CLASS-21

## CLASS-23

## CLASS-24

## CLASS-26

## CLASS-28

## CLASS-31

https://github.com/typestack/class-validator

```
yarn add class-validator class-transformer
```
## CLASS-32

## CLASS-33

## CLASS-34

## CLASS-35

https://github.com/arielweinberger/nestjs-course-task-management/tree/s2-validation-and-error-handling


## CLASS-39

```
docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

docker container start postgres-nest
docker container stop postgres-nest

docker container rm postgres-nest
```

PGAdmin
Server > Create

General
Name: NestJS Course

Connection
Host name/address: postgres
Username: postgres
Password: postgres
Save password
## CLASS-39

PGAdmin > Server > NestJS Course > Databases > Create
Database: task-management

## CLASS-43

```
yarn add typeorm @nestjs/typeorm pg
```
## CLASS-44

## CLASS-45

```
yarn remove uuid
```
## CLASS-48

## CLASS-49

## CLASS-50

## CLASS-52

## CLASS-53

## CLASS-57

```
docker-compose run --rm nest_yarn nest g module auth
docker-compose run --rm nest_yarn nest g service auth --no-spec
docker-compose run --rm nest_yarn nest g controller auth --no-spec
```
## CLASS-58

