"use strict";


// Import displayMovies() to use after movie is added to json database.

import {displayMovies} from './displayMovies';

/**
 * addMovie() : function sends values in add movie inputs to json.db and then returns the movie which is used to create new html for the added movie
 * **/
export const addMovie = () => {
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

    fetch(url, options);

    displayMovies();

}; //addMovie()