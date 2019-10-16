"use strict";

import {displayMovies} from "./displayMovies";

export const deleteMovie = (deleteMovieId) => {
    console.log(deleteMovieId);
    const url = `/api/movies/${deleteMovieId}`;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(url, options)
                .catch(/* handle errors */);

        displayMovies();


}; //deleteMovie()