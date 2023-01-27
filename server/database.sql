CREATE DATABASE weather_app;

CREATE TABLE weather(
    weather_id SERIAL PRIMARY KEY NOT NULL AUTO_INCREMENT,
    temperature_current smallint,
    temperature_high smallint,
    temperature_low smallint,
    precipitation_chance varchar(255),
    precipitation_amount tinyint,
    humidity varchar(255),
    wind_speed smallint,
    visibility varchar(255),
    sun_rise datetime,
    sun_set datetime,
);

CREATE TABLE locations(  
    city_id SERIAL PRIMARY KEY NOT NULL AUTO_INCREMENT,    
    city VARCHAR(120),  
    city_ascii VARCHAR(120),  
    city_alt VARCHAR(1000),  
    lat FLOAT,  
    lng FLOAT,  
    country VARCHAR(120), 
    iso2 VARCHAR(2),  
    iso3 VARCHAR(3),  
    admin_name VARCHAR(120), 
    admin_name_ascii VARCHAR(120),  
    admin_code VARCHAR(6),  
    admin_type VARCHAR(27),  
    capital VARCHAR(7),  
    density FLOAT,  
    population FLOAT,  
    population_proper FLOAT,  
    ranking INT,  
    timezone VARCHAR(120), 
    same_name VARCHAR(5), 
);

LOAD DATA INFILE 'D:/MilestoneProjects/Project2/weather-app/server/data/worldcities.csv'
INTO TABLE table_name
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;