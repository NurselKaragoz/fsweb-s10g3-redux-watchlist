export const SONRAKI_FILM = "Sıradaki geç";
export const ONCEKI_FILM = "Sıradaki geç";
export const ADD_FAV = "Favoriye ekle";
export const DELETE_FAV = "Favoriden çıkar";

export const deleteFav = (id) => {
  console.log("message delete", id);
  return { type: DELETE_FAV, payload: id };
};
