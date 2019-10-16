import {editMovie} from "./editMovie";
import {addMovie} from "./addMovie";
import {deleteMovie} from "./deleteMovie";

//Continually reassigned to current movie being edited

let currentMovieId;

/**
 * eventListeners() : function calls all event listeners defined in clickEvents.js
 * **/
export function eventListeners() {
    editMovieClickEvent();
    saveChangesClickEvent();
    closeModalClickEvent();
    deleteMovieClickEvent();
} //eventListeners()


/**
 * editMovieClickEvent : function adds an event listener to all edit buttons being displayed which when clicked will open the edit movie modal
 * **/
const editMovieClickEvent = () => {

    //returns an HTML collection of all edit-buttons on page
    let editButtons = document.getElementsByClassName("open-modal-btn");

    //loops through html collection stored in editButtons var and adds an open modal event listener.
    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", function() {

            document.getElementById('edit-movie-modal').style.display = "block";

            currentMovieId = editButtons[i].id;

            return currentMovieId;
        }); // event listener
    } //for
}; //editMovieClickEvent()


/** saveChangesClickEvent : function that adds an event listener to the modal's save changes button.
 * Which clicked, it will call the editMovie() function. Which will send the edited movies information back to the json database **/
const saveChangesClickEvent = () => {
    document.getElementById('save-changes').addEventListener("click", function(e) {
        e.preventDefault();
        editMovie(currentMovieId);
        document.getElementById('edit-movie-modal').style.display = "none";
    })
};

/** closeModalClickEvent : function that adds an event listener to the modal's close button. Which will close the modal and allow the user to continue using the application**/
const closeModalClickEvent = () => {
    document.getElementById('close-movie-modal').addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById('edit-movie-modal').style.display = "none";
    }) //event listener
};


/**
 * deleteMovieClickEvent() : function adds click event to the delete movie button, which calls the deleteMovie() function that will delete a movie from the json database.
 * **/
const deleteMovieClickEvent = () => {
    //returns an HTML collection of all delete-buttons on page
    let deleteButtons = document.getElementsByClassName('delete-movie-btn');

    //loops through html collection stored in deleteButtons var and adds an event listener that will call the deleteMovie() function
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {

            let deleteMovieId = deleteButtons[i].id;

            deleteMovie(deleteMovieId);

        }); // event listener
    } //for
}; //deleteMovieClickEvent()


/**
 * addMovieClickEvent() : function adds click event to the add movie button, which calls the addMovie() function that will add a movie to the json database.
 * **/
export const addMovieClickEvent = () => {
    document.getElementById("add-movie-btn").addEventListener("click", function(e) {
        e.preventDefault();
        addMovie();
    }); //event listener
}; //addMovieClickEvent();
