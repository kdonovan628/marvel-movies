const state = {
  movieList: [
    {
      id: 1, 
      imageURL: `./images/iron-man.jpg`,
      name: `Iron Man`,
      phase: 'One',
      releaseDate: `May 2nd, 2008`,
      charactersFeatured: `Tony Stark/Iron Man`
    },
    {
      id: 2,
      imageURL: `./images/incredible-hulk.jpg`,
      name: `The Incredible Hulk`,
      phase: `One`,
      releaseDate: `June 13th, 2008`,
      charactersFeatured: `Bruce Banner/Hulk`
    },
    {
      id: 3,
      imageURL: `./images/iron-man-2.jpg`,
      name: `Iron Man 2`,
      phase: `One`,
      releaseDate: `May 7th, 2010`,
      charactersFeatured: `Tony Stark/Iron Man, Natasha Romanoff/Black Widow`
    },
    {
      id: 4,
      imageURL: `./images/thor.jpg`,
      name: `Thor`,
      phase: `One`,
      releaseDate: `May 6th, 2011`,
      charactersFeatured: `Thor`
    },
    {
      id: 5,
      imageURL: `./images/captain-america-first-avenger.png`,
      name: `Captain America: The First Avenger`,
      phase: `One`,
      releaseDate: `July 22nd, 2011`,
      charactersFeatured: `Steve Rodgers/Captain America`
    },
    {
      id: 6,
      imageURL: `./images/the-avengers.jpg`,
      name: `The Avengers`,
      phase: `One`,
      releaseDate: `May 4, 2012`,
      charactersFeatured: `Thor, Tony Stark/Iron Man, Bruce Banner/Hulk, Natasha Romanoff/Black Widow, Clint Barton/Hawkeye, Steve Rodgers/Captain America`
    },
    {
      id: 7, 
      imageURL: `./images/iron-man-3.jpg`,
      name: `Iron Man 3`,
      phase: `Two`,
      releaseDate: `May 3, 2013`,
      charactersFeatured: `Tony Stark/Iron Man`
    },

  ]
}

const main = document.querySelector(`main`)

const renderAllMovies = () => {
  const allMovies = state.movieList;
  const movieHTMLList = allMovies.map((movie) => {
    return `
    <section>
      <img src="${movie.imageURL}">
      <button id="${movie.id}">Details</button>
    </section>
    `;
  })

main.innerHTML = movieHTMLList.join(``);

const detailButtons = document.querySelectorAll(`button`);

detailButtons.forEach((detailButton) => {
  detailButton.addEventListener(`click`, (event) => {
    const movieIdToFind = event.target.id;

    const foundmovie = state.movieList.find((movie) => {
      return Number(movieIdToFind) === movie.id;
    });

    renderMovieDetails(foundmovie);
    })
  });
}

// show the movie details for the movie that was clicked
const renderMovieDetails = (movie) => {

  // change the innerHTML to show the details
  main.innerHTML = `
   <h2>Name: ${movie.name}</h2>
   <h2>Phase: ${movie.phase}</h2>
   <h2>Release Date: ${movie.releaseDate}</h2>
   <h2>Characters Featured: ${movie.charactersFeatured}</h2>

   <button>Back to All Movies</button>
   `;

   const button = document.querySelector(`button`);
   button.addEventListener(`click`, renderAllMovies);
}
renderAllMovies();

// {
//   id:
//   imageUrl:
//   name:
//   phase:
//   releaseDate:
//   charactersFeatured:
// }