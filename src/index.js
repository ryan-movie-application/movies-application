/**
 * es6 modules and imports
 */

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const {displayMovies} = require('./displayMovies.js');

// getMovies().then((movies) => {
//
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });

displayMovies();
