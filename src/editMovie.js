"use strict";

import {displayMovies} from "./displayMovies";

export const editMovie = (currentMovieId) => {
    let editedMovieTitle = document.getElementById('edit-movie-title').value;
    let editedMovieRating = document.getElementById('edit-movie-rating').value;


    const editedMovie = {
        title: editedMovieTitle,
        rating: editedMovieRating,
        id: currentMovieId
    };

    const url = `/api/movies/${currentMovieId}`;
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedMovie),
    };

    fetch(url, options)
        .catch(function() {
            console.log("Hey we couldn't edit that movie")
        });

    displayMovies();


}; //editMovie()