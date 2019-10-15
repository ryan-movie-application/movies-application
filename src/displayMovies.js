"use strict";


/**
 * displayMovies() : function fetches all movies in database, loops through them and stores them in a variable which is then inserted into the #container div in index.html.
 * **/
import {editMovieClickEvent, closeModalClickEvent} from './editMovie';

export const displayMovies = () => {
    return fetch('/api/movies')
        .then(response => response.json())
        .then((response) => {
            let dynamicHTML = "";
            response.forEach(({title, rating, id}) => {
                dynamicHTML += createMovieCard(title, rating, id);
            });

            document.getElementById("container").innerHTML = dynamicHTML;

            editMovieClickEvent();
            closeModalClickEvent();
        })
}; //displayMovies()


/**
 * renderMovies() : function returns a bootstrap card to displayMovies(). Card contains a dynamic movie title, movie rating and database id that is attached to the edit button.
 * **/

 export const createMovieCard = (title,rating, id) => {
    return `
    <div class="card" style="width: 18rem">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted" id="card-movie-rating">${rating}</h6>
      <button id=${id} class="open-modal-btn" type="button" class="btn btn-secondary">Edit</button>
      <button class="delete-movie-btn" type="button" class="btn btn-secondary">Delete</button>
      </div>
    </div>
  `;
    //Bootstrap card
}; //renderMovies()



