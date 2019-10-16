import {editMovie} from "./editMovie";
import {addMovie} from "./addMovie";


/**
 * editMovieClickEvent : function adds an event listener to all edit buttons being displayed which when clicked will open the edit movie modal
 * **/
export const editMovieClickEvent = () => {

    //returns an HTML collection of all edit-buttons on page
    let editButtons = document.getElementsByClassName("open-modal-btn");

    //loops through html collection stored in editButtons var and adds an open modal event listener.
    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener("click", function() {

            document.getElementById('edit-movie-modal').style.display = "block";
            let movieId = editButtons[i].id;

            getMovieId()

        }); // event listener
    } //for
}; //editMovieClickEvent()

function getMovieId(movieId) {
    return movieId;
}

/** saveChangesClickEvent : function that adds an event listener to the modal's save changes button.
 * Which clicked, it will call the editMovie() function. Which will send the edited movies information back to the json database **/
export const saveChangesClickEvent = () => {
    document.getElementById('save-changes').addEventListener("click", function() {
        editMovie();
    })
};

/** closeModalClickEvent : function that adds an event listener to the modal's close button. Which will close the modal and allow the user to continue using the application**/
export const closeModalClickEvent = () => {
    document.getElementById('close-movie-modal').addEventListener("click", function() {
        document.getElementById('edit-movie-modal').style.display = "none";
    }) //event listener
};

/**
 * addMovieClickEvent() : function adds click event to the add movie button, which calls the addMovie() function that will add a movie to the json database.
 * **/
export const addMovieClickEvent = () => {
    document.getElementById("add-movie-btn").addEventListener("click", function(e) {
        e.preventDefault();
        addMovie();
    }); //event listener
}; //addMovieClickEvent();