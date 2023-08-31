import { movies } from "../movies";
import { ONCEKI_FILM, SONRAKI_FILM } from "./actions";
const initalState = {
  movies: movies,
  sira: 0,
  favoriFilmler: [
    {
      id: 116,
      title: "Interstellar",
      year: "2014",
      runtime: "169",
      genres: ["Adventure", "Drama", "Sci-Fi"],
      director: "Christopher Nolan",
      actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterUrl:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    },
  ],
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SONRAKI_FILM:
      if (state.sira < state.movies.length - 1) {
        return { ...state, sira: state.sira + 1 };
      } else {
        return { ...state, sira: initalState.sira };
      }
    case ONCEKI_FILM:
      if (state.sira > 0) {
        return { ...state, sira: state.sira - 1 };
      } else {
        return { ...state, sira: state.movies.length - 1 };
      }

    default:
      return state;
  }
};
export default reducer;
