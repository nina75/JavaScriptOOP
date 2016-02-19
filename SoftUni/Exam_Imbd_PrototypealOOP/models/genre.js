var imdb = imdb || {};

(function(scope) {
    var count = 0;
    var genre = {
        init:  function(name){
            this.name = name;
            this._id = ++count;
            this._movies = [];

            return this;
        },
        addMovie: function(movie) {
            this._movies.push(movie);
        },
        deleteMovie: function(movie) {
            this.deleteMovieById(movie.id);
        },
        deleteMovieById: function (id) {
            this._movies = this._movies.filter(function(m){
                return m._id !== id;
            });
        },
        getMovies: function() {
            return this._movies.slice();
        }
    };

    scope.getGenre = function(name){
        return Object.create(genre).init(name);
    }

})(imdb);



