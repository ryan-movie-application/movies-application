"use strict";

/**
 * Import CREATEMOVIECARD() to use in ADDMOVIE()
 * **/
import {createMovieCard} from './displayMovies';

export const addMovieClickEvent = () => {
        document.getElementById("add-movie-btn").addEventListener("click", function(e) {
            e.preventDefault();
            addMovie();
        });
}; //addMovieClickEvent();

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
        })



}; //addMovie()