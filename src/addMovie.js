"use strict";


// Import createMovieCard() to use in addMovie() .then fetch request


import {createMovieCard} from './displayMovies';

/**
 * addMovieClickEvent() : function adds click event to the add movie button.
 * **/

export const addMovieClickEvent = () => {
        document.getElementById("add-movie-btn").addEventListener("click", function(e) {
            e.preventDefault();
            addMovie();
        }); //event listener
}; //addMovieClickEvent();

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
    fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((response) => {

            let newMovieHTML = createMovieCard(response.title, response.title, response.id);

            document.getElementById("container").insertAdjacentHTML('afterend', newMovieHTML);
        }) //last .then



}; //addMovie()