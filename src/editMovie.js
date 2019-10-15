"use strict";



export const editMovieClickEvent = () => {
    let editButtons = document.getElementsByClassName("open-modal-btn");

    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", function() {
            document.getElementById('edit-movie-modal').style.display = "block";
        }); //
    } //for
};

export const closeModalClickEvent = () => {
    document.getElementById('close-movie-modal').addEventListener("click", function() {
        document.getElementById('edit-movie-modal').style.display = "none";
    }) //event listener
};

export const saveChanges = () => {
    document.getElementById('save-changes').addEventListener("click", function() {
        editMovie();
    })
}

export const editMovie = () => {
    let editedMovieTitle = document.getElementById('edit-movie-title').value;
    let editedMovieRating = document.getElementById('edit-movie-rating').value;
    let editedMovieId = this.id;
    console.log(editedMovieId);
    const editedMovie = {
        title: editedMovieTitle,
        rating: editedMovieRating,
        id: editedMovieId
    };
    const url = `/api/movies/${modalMovieId}`;
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
}