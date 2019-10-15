"use strict";

/**
 * DISPLAYMOVIES() : function fetches all movies in database, loops through them and stores them in a variable which is then inserted into the #container div in index.html.
 * **/

module.exports = {
    displayMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json())
            .then((response) => {
                let dynamicHTML = "";
                response.forEach(({title, rating, id}) => {
                    dynamicHTML += renderMovies(title, rating, id);
                });

                console.log("I ran");
                document.getElementById("container").innerHTML = dynamicHTML;


            }); //last .then
    } //displayMovies()
}; //module.exports displayMovies()

/** RENDERMOVIES() : function returns a bootstrap card to DISPLAYMOVIES(). Card contains a dynamic movie title, movie rating and database id that is attached to the edit button. **/

function renderMovies(title,rating, id) {
    //Bootstrap card
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
} //renderMovies()