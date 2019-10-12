const {getMovies} = require('./api.js');




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
                console.log(document.getElementsByClassName("container").childNodes);
            });
    }
};

function renderMovies(title,rating, id) {
    //declare empty variable to hold HTML that is being dynamically created
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
}