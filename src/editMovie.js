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