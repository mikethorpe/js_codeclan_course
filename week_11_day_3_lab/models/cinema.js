const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getAllTitles = function(){
  const titles = this.films.map((film)=> {
    return film.title;
  })
  return titles;
}

Cinema.prototype.getFilmByTitle = function(titleToMatch){
  const film = this.films.filter((film) => {
    return film.title === titleToMatch;
  })
  return film[0];
}

Cinema.prototype.getFilmsByGenre = function(genre){
  const results = this.filmsByProperty('genre', genre);
  return results;
}

Cinema.prototype.checkFilmsByYear = function(yearToMatch){
  const foundFilmInYear = this.films.some((film) => {
    return film.year === yearToMatch;
  })
  return foundFilmInYear;
}

Cinema.prototype.checkAllFilmsOverRuntime = function(runtimeToMatch){
  const foundFilmsOverRuntime = this.films.every((film) => {
    return film.length > runtimeToMatch;
  })
  return foundFilmsOverRuntime;
}

Cinema.prototype.getTotalRuntime = function(){
  const result = this.films.reduce((totalRuntime, film) => {
    return totalRuntime += film.length;
  }, 0)
  return result; 
}

Cinema.prototype.filmsByProperty = function(propertyName, propertyValue){
  const results = this.films.filter((film) => {
    return film[propertyName] === propertyValue;
  })
  return results;
}

Cinema.prototype.getFilmsByYear = function(year){
  const results = this.filmsByProperty('year', year);
  return results;
}

module.exports = Cinema;
