//RUN THE FOLLOWING COMMAND AT '#' IN DOCKER SHELL TO IMPORT 'migration.sql' and 'seed.sql' into DB:
//# psql -U postgres -d FEC -f migration.sql

const { Pool } = require('pg');
const dbConn = require('./dbConn');
const pool = dbConn.getPool();

function runMigrations(pool, callback){
    //Connect to DB:
    pool.connect((err, client, done) => {
        if (err){
            console.log("Failed to connect to the database");
            console.log(err);
            return done();
        }
        //RUN migration SQL:
        pool.query('DROP TABLE IF EXISTS reviews; DROP TABLE IF EXISTS shoes ', (err) =>{
            if (err){
                console.log(err);
            }

            pool.query(`CREATE TABLE IF NOT EXISTS shoes (
                id SERIAL PRIMARY KEY,
                name VARCHAR (255) NOT NULL,
                price VARCHAR (26) NOT NULL,
                image VARCHAR (500) NOT NULL,
                image_array TEXT[] NOT NULL,
                description VARCHAR (500) NOT NULL,
                color_description VARCHAR (255) NOT NULL,
                style VARCHAR (150) NOT NULL,
                size_array TEXT[] NOT NULL)`, (err, data) => {
                    if (err) {
                        console.log("CREATE TABLE shoes FAILED", err)
                    } else {
                        console.log("CREATE TABLE shoes SUCCESSFUL")

                        pool.query(`CREATE TABLE review (
                            id SERIAL PRIMARY KEY,
                            review_id INT NOT NULL,
                            title VARCHAR (255),
                            stars INT NOT NULL,
                            user_name VARCHAR (255) NOT NULL,
                            date_created VARCHAR (30) NOT NULL,
                            summary TEXT,
                            FOREIGN KEY (review_id) REFERENCES shoes(id) ON DELETE CASCADE)`, (err, data) => {
                                if (err) {
                                    console.log("CREATE TABLE review FAILED", err)
                                } else {
                                    console.log("CREATE TABLE review SUCCESSFUL")
                                }
                                done();
                                callback(); 
                            }
                        );                   
                    }
                }
            );
        });
    });

};

runMigrations(pool, () => {
    //migrations are complete, we can close the pool
    //close connection:
    pool.end();
})



