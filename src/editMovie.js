"use strict";

export const editMovie = () => {
    let editedMovieTitle = document.getElementById('edit-movie-title').value;
    let editedMovieRating = document.getElementById('edit-movie-rating').value;


    const editedMovie = {
        title: editedMovieTitle,
        rating: editedMovieRating,
        id: movieId
    };

    const url = `/api/movies/${movieId}`;
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

}; //editMovie()