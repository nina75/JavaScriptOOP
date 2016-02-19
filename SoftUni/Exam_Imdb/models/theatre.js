var imdb = imdb || {};

(function(scope) {
    var count = 0;
    function Theatre(title, length, rating, country, isPuppet) {
        imdb.Movie.call(this, title, length, rating, country);
        this.id = ++count;
        this.isPuppet = isPuppet;
    }
    Theatre.extends(imdb.Movie);
    scope.getTheatre = function(title, length, rating, country, isPuppet) {
        return new Theatre(title, length, rating, country, isPuppet);
    }

})(imdb);