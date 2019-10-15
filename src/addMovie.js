"use strict";

const {renderMovies} = require('./addMovie.js');

module.exports = {
    addMovieClickEvent : () => {
        document.getElementById("add-movie-btn").addEventListener("click", function(e) {
            e.preventDefault();
            addMovie();
        });

} //addMovieClickEvent();
}; // module.exports addMovieClickEvent()

function addMovie() {
    let addMovieTitle = document.getElementById("add-movie-title").value;
    let addMovieRating = document.getElementById("add-movie-rating").value;
    let newMovie = {
        title: addMovieTitle,
        rating: addMovieRating,
    };
    const url = '/api/movies';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
    };
    fetch(url, options)
        .then((response) => {
            console.log(response);
            renderMovies(response.title, response.rating, response.id);
        })
        .catch(function() {
            console.log("Hey we couldn't add a movie or update the movies.")
        });
} //addMovie()