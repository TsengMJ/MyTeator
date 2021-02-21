# MyTeator

# Database tables
### Create Tables

Teacher table:
```
CREATE TABLE teacher (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone1 VARCHAR(20),
    phone2 VARCHAR(20),
    address VARCHAR(256),
    email1  VARCHAR(255),
    email2  VARCHAR(255),
    introduction VARCHAR(1024),
    signup_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    domain VARCHAR(2048),
    isvalid BOOLEAN DEFAULT 0,
    PRIMARY KEY(id)
);
```

License table:
```
CREATE TABLE license (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(1024),
    fk_teacher_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id)
);
```

Language table:
```
CREATE TABLE language (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(1024),
    listening VARCHAR(16),
    speaking VARCHAR(16),
    reading VARCHAR(16),
    writing VARCHAR(16),
    fk_teacher_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id)
);
```

Education table:
```
CREATE TABLE education (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(1024),
    admission_date DATETIME,
    graduate_date DATETIME,
    fk_teacher_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id)
);
```

Portfolio table:
```
CREATE TABLE portfolio (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(1024),
    file LONGBLOB,
    fk_teacher_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id)
);
```

Experience table:
```
CREATE TABLE experience (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    company VARCHAR(255) NOT NULL,
    job_title VARCHAR(128),
    employment_date DATETIME,	
    resignation_date DATETIME,	
    description VARCHAR(1024),
    fk_teacher_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id)
);
```

Student table:
```
CREATE TABLE student (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone1 VARCHAR(20),
    phone2 VARCHAR(20),
    address VARCHAR(256),
    email1  VARCHAR(255),
    email2  VARCHAR(255),
    signup_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);
```

Article table:
```
CREATE TABLE article (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    content MEDIUMTEXT,
    fk_teacher_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id)
);
```

Case table:
```
CREATE TABLE case_info (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(1024),
    fk_teacher_id int UNSIGNED,
    fk_student_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id),
    FOREIGN KEY(fk_student_id) REFERENCES student(id)
);
```

Purchase Record table:
```
CREATE TABLE purchase_recors (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(255),
    description VARCHAR(1024),
    price FLOAT,
	purchase_date DATETIME,
    fk_teacher_id int UNSIGNED,
    fk_student_id int UNSIGNED,
    PRIMARY KEY(id),
    FOREIGN KEY(fk_teacher_id) REFERENCES teacher(id),
    FOREIGN KEY(fk_student_id) REFERENCES student(id)
);
```

Product table:
```
CREATE TABLE product (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    type VARCHAR(255),
    description VARCHAR(1024),
    price FLOAT,
    inventory INT, 
    PRIMARY KEY(id)
);
```


Generate testing data:
```
// Teacher's data
INSERT INTO teacher (first_name, last_name, phone1, address, email1, introduction, domain)
VALUES ("Lee", "Leo", 0912345678, "Taipei, Taiwan", "email@gmail.com", "Intro", "Front-end, Back-end");

// License's data
INSERT INTO license (type, description, fk_teacher_id)
VALUES ("CV", "This is a license", 1);

INSERT INTO license (type, description, fk_teacher_id)
VALUES ("ACV", "This is ACV license", 1);

// Language's data
INSERT INTO language (type, description, listening, speaking, reading, writing, fk_teacher_id)
VALUES ("English", "I love eng", "g", "g", "w", "p", 1);

INSERT INTO language (type, description, listening, speaking, reading, writing, fk_teacher_id)
VALUES ("中文", "好的", "行", "不", "行", "阿", 1);

// Education' data
INSERT INTO education (type, description, admission_date, graduate_date, fk_teacher_id)
VALUES ("大學", "資訊工程", "2014-12-01 00:00:00", "2021-09-09", 1);

// Portfolio's data
INSERT INTO portfolio (type, description, file, fk_teacher_id)
VALUES ("PDF", "My works", "no file", 1);

// Experience's data
INSERT INTO experience (company, job_title, employment_date, resignation_date, description, fk_teacher_id)
VALUES ("NTU", "Student", "2019.9.1", "2021/6/30", "Nice", 1);

// 1 to many select
SELECT teacher.first_name, teacher.last_name, license.description, language.type 
FROM teacher 
INNER JOIN license
INNER JOIN language;
INNER JOIN education;
INNER JOIN 

```
