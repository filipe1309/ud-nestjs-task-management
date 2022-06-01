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

## CLASS-59

* Passwords will contain at least 1 upper case letter
* Passwords will contain at least 1 lower case letter
* Passwords will contain at least 1 number or special character
* There is **no** length validation (min, max) in this regex!

Regular expression for JavaScript:
```
/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
```

One minor recommendation is to use 
```
/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
```
https://regexper.com/#%2F%28%3F%3A%28%3F%3D.*%5Cd%29%7C%28%3F%3D.*%5CW%2B%29%29%28%3F!%5B.%5Cn%5D%29%28%3F%3D.*%5BA-Z%5D%29%28%3F%3D.*%5Ba-z%5D%29.*%24%2F

The ?: at the start of the first group tells the regexp engine not to capture the matches which will make it ever so slightly more performant.
## CLASS-60

## CLASS-61

- sha256  
- Risk: Rainbow table  
- Salt to avoid Rainbow table: salt_userpass

## CLASS-62

```
docker-compose run --rm nest_yarn yarn add bcrypt
docker-compose run --rm nest_yarn yarn add @types/bcrypt -D
```
## CLASS-63

## CLASS-64

## CLASS-65

```
docker-compose run --rm nest_yarn yarn add @nestjs/jwt @nestjs/passport passport passport-jwt
```
## CLASS-66

JWT = base64  
Signature = verify if the data is changed!
https://jwt.io/  
## CLASS-67

```
docker-compose run --rm nest_yarn yarn add @types/passport-jwt -D
```
## CLASS-68

## CLASS-69

## CLASS-70

## CLASS-70

## CLASS-72

## CLASS-73

## CLASS-74

## CLASS-75

## CLASS-76

## CLASS-77

## CLASS-78

## CLASS-79

## CLASS-83

Envs with windows:

```
yarn global add cross-env
```

## CLASS-87

```
docker-compose run --rm nest_yarn yarn add @nestjs/config
```

## CLASS-88

