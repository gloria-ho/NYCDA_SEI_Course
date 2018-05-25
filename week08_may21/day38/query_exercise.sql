create table students (
	id int PRIMARY KEY,
	first_name varchar(255),
	last_name varchar(255),
	gender varchar(255)                                                                                                                                                                                                                  
);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

create table todos (
	id int PRIMARY KEY,
	name varchar(255),
	description TEXT,
	priority varchar(255)
);

create table chores (
	id int PRIMARY KEY,
	name varchar(255),
	description TEXT,
	assignee varchar(255),
	due_date date,
	date_completed date
);

insert into students
	(id, first_name, last_name, gender)
values
	(1, 'George', 'Dagher', 'male'),
	(2, 'Harry', 'Smith', 'male'),
	(3, 'Gloria', 'Ho', 'female');
	
insert into students
	(id, first_name, last_name, gender)
values
	(4, 'Iryna', 'Manu', 'female'),
	(5, 'Erisay', 'Perez', 'male'),
	(6, 'Christian', 'Aracena', 'male'),
	(7, 'Alfonso', 'Arriola', 'male'),
	(8, 'Badraduja', 'Bhuiya', 'male'),
	(9, 'Goshgar', 'Huseynov', 'male'),
	(10, 'Alexander', 'Legaspi', 'male'),
	(11, 'Tim', 'McKiernan', 'male'),
	(12, 'Sharon', 'Moreno', 'female'),
	(13, 'Alyson', 'Swerdloff', 'female'),
	(14, 'Quaisha', 'Thornton', 'female'),
	(15, 'Jose', 'Zapata', 'male');
	
insert into todos
	(id, name, description, priority)
values
	(1, 'Study PostgreSQL', 'Look up and study syntax', 'Medium'),
	(2, 'Next Project', 'Look at next project, due date, etc', 'High'),
	(3, 'Final Project', 'Research passion project ideas', 'Low')
	
create table laptops (
	id int PRIMARY KEY,
	brand varchar(255),
	operating_system varchar(255),
	student_id int
);

insert into laptops
	(id, brand, operating_system, student_id)
values
	(1, 'Mac', 'Unix', 3),
	(2, 'Mac', 'Unix', 4),
	(3, 'Mac', 'Unix', 5)
	
create table submissions (
	id int PRIMARY KEY,
	assignment_name varchar(255),
	date_submitted date,
	student_id int,
	score int
);

insert into submissions
	(id, assignment_name, date_submitted, student_id, score)
values
	(1, 'Dunder Mifflin', '2018-04-19', 3, 10),
	(2, 'Personal Pokedex', '2018-05-03', 3, 10),
	(3, 'Friendly Bakery', '2018-05-22', 3, 10),
	(4, 'Dunder Mifflin', '2018-04-19', 4, 10),
	(5, 'Personal Pokedex', '2018-05-03', 4, 10),
	(6, 'Friendly Bakery', '2018-05-22', 4, 10);
	
create table classroom_seats (
	id int PRIMARY KEY,
	table_num int,
	seat_letter varchar(255)
);

insert into classroom_seats
	(id, table_num, seat_letter)
values
	(1, 3, 'A'),
	(2, 3, 'B'),
	(3, 3, 'C'),
	(4, 3, 'D');

create table student_classroom_seats (
	id int PRIMARY KEY,
	student_id int,
	classroom_seat_id int
);

insert into student_classroom_seats
	(id, student_id, classroom_seat_id)
values
	(1, 3, 3),
	(2, 4, 4),
	(3, 11, 3),
	(4, 12, 4);
	
select
	id as "ID", first_name as "First Name", last_name as "Last Name"
	from students                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
	where gender = 'female'

select 
	*
	from students
	where lower(first_name) LIKE '%g%'
	order by gender, first_name
	
select
	first_name, last_name
	from students

select
	first_name
	from students
	where gender = 'male'
	
select
	first_name
	from students
	where gender = 'female'
	order by first_name

select
	first_name, last_name
	from students
	where last_name like 'M%'
	
select
	brand, student_id
	from laptops
	where operating_system = 'Windows'
	
select
	brand, student_id
	from laptops
	where operating_system <> 'Windows'
	
select
	date_submitted, student_id
	from submissions
	where assignment_name = 'Personal Pokedex'                                                                                                     
	
select
	students.first_name, students.last_name, laptops.brand, laptops.operating_system
	from students
	join laptops on students.id = laptops.student_id
	where students.first_name = 'Gloria'

select
	students.first_name, students.last_name, laptops.brand, laptops.operating_system
	from students
	join laptops on students.id = laptops.student_id
	where lower(laptops.brand) = 'mac'
	
select
	submissions.assignment_name, submissions.score
	from submissions
	join students on submissions.student_id = students.id
	where lower(students.first_name) = 'gloria' and lower(students.last_name) = 'ho'

select
	students.first_name, students.last_name
	from students
	join student_classroom_seats on students.id = student_classroom_seats.student_id
	join classroom_seats on student_classroom_seats.classroom_seat_id = classroom_seats.id
	where classroom_seats.table_num = 3 and lower(classroom_seats.seat_letter) = 'c'
	