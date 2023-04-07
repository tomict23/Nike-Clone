'use strict';

const dotenv = require('dotenv');
dotenv.config();
console.log(process.env);

//SETUP DEPENDECIES:
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());
const { listenerCount } = require('stream');

const dbConn = require('./dbConn');
const pool = dbConn.getPool();

app.get('/api/shoes', (req, res) => {
    pool.query('SELECT * FROM shoes', (err, result) => {
        if (err){
            res.status(404).send(err)
        } else {
            const shoes = result.rows;
            response.status(200).send(shoes);
        }
    })
})

app.get('/api/shoes/:id', (req, res) =>{
    const id = Number.parseInt(req.params.id);

    pool.query('SELECT * FROM shoes WHERE id=$1', [id], (err, result) => {
        if (err){
            res.status(404).send(err);
        } else {
            const shoe = result.rows;
            res.status(200).send(shoe);
        }
    })
})

app.get('/api/review', (req, res) => {
    pool.query('SELECT review.*, shoe.name AS shoe_name FROM review INNER JOIN shoes ON review.shoes_id = shoes.id;', (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else {
            const reviews = result.rows;
            res.status(200).send(reviews); 
        }
    })
})

app.get('/api/review/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);

    pool.query('SELECT * FROM review WHERE id=$1', [id], (err, result) => {
        if (err){
            res.status(404).send(err)
        } else {
            const review = result.rows;
            res.status(200).send(review);
        }
    })
})

app.get('/api/:word', (req, res) => {
    const word = req.params.word;
    res.status(405).send(`NOT FOUND!! - 405 ERROR - /api/${word}/ DOES NOT EXIST`)
})

app.post('/api/shoes/', (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;
    const image_array = req.body.image_array;
    const description = req.body.description;
    const color_description = req.body.color_description;
    const size_array = req.body.size_array;

    if (!name || !price || !image || !image_array || !description || !color_description || !size_array){
        return res.status(407).send("Error in post data or insufficient data provided for post route shoes")
    }

    pool.query('INSERT INTO shoes (name, price, image, image_array, description, color_description, size_array) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING*;', [name, price, image, image_array, description, color_description, size_array], (err, result) => {
        if (err) {
            res.status(409).send(err);
        } else {
            const shoeInfo = result.rows[0];
            res.status(202).send(shoeInfo)
        }
    })
})

app.post('/api/review/', (req, res) => {
    const review_id = req.body.review_id;
    const stars = req.body.stars;
    const user_name = req.body.user_name;
    const date_created = req.body.date_created;
    const summary = req.body.summary;

    if (!review_id || !stars || !user_name || !date_created || !summary){
        return res.status(408).send("Error in post data or insufficient data provided for post route review")
    }

    pool.query('INSERT INTO review (review_id, stars, user_name, date_created, summary) VALUES ($1, $2, $3, $4, $5) RETURNING*;', [review_id, stars, user_name, date_created, summary], (err, result) => {
        if (err) {
            res.status(410).send(err);
        } else {
            const reviewInfo = result.rows[0];
            res.status(203).send(reviewInfo);
        }
    })
})


//DELETE ROUTES (x2) - NOT NECESSARY
//PATCH ROUTES (x2) - NOT NECESSARY

app.use(function(err, req, res, next){
    res.status(404).send("ERROR 404 ('MIDDLEWARE') - THERE WAS A PROBLEM", err);
});


app.listen(port, function(){
    console.log(`Service is running, listening on ${port}`);
});