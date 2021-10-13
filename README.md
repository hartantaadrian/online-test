# online-test
This repo is used for online test

## Installation:
Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install express
```

Create a new database  on mysql

Run sql script below:
```bash
CREATE TABLE IF NOT EXISTS `request_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `request_date` datetime DEFAULT NULL,
  `request_path` varchar(255) DEFAULT NULL,
  `request_param` varchar(255) DEFAULT NULL,
  `request_header` varchar(255) DEFAULT NULL,
  `request_body` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;


CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `username`, `parent`) VALUES
	(1, 'Ali', 2),
	(2, 'Budi', 0),
	(3, 'Cecep', 1);
```
## Number 1
For Number 1 test answer it can be see on no1.sql file.
It can be run by copy the script to mysql editor

## Number 2
Make sure you are already do the installation step.

To start the server:

```bash
$ npm start
```
the server will be start on port 1202, 
the port can be configure on server.json file

To start the unit test:

```bash
$ npm test
```

the api available with paths below:
  -http://localhost:1202/movies/search
  -http://localhost:1202/movies/detail/:movieid

the api require headers below:
  -appkey : d964b97b

## Deployed apps
The deployed app can be access with base path https://movieomdb.herokuapp.com/.


## Number 3
For Number 3 test answer it can be see on no3.js file.


## Number 4
For Number 4 test answer it can be see on no4.js file.

To run the apps :
```bash
$ node no4.js
```