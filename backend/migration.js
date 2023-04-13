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
        pool.query('DROP TABLE IF EXISTS review; DROP TABLE IF EXISTS shoes ', (err) =>{
            if (err){
                console.log(err);
            }

            pool.query(`CREATE TABLE IF NOT EXISTS shoes (
                id SERIAL PRIMARY KEY,
                name VARCHAR (255) NOT NULL,
                price VARCHAR (26) NOT NULL,
                gender VARCHAR (75),
                image VARCHAR (500) NOT NULL,
                image_array TEXT[],
                description VARCHAR (500),
                color_description VARCHAR (255),
                style VARCHAR (150),
                size_array TEXT[])`, (err, data) => {
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



