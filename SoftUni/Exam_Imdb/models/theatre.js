var imdb = imdb || {};

(function(scope) {
    var count = 0;
    function Theatre(title, length, rating, country, isPuppet) {
        imdb.Movie.call(this, title, length, rating, country);
        this.id = ++count;
        this.isPuppet = isPuppet;
    }
    Theatre.prototype = Object.create(imdb.Movie.prototype);
    Theatre.prototype.constructor = Theatre;

    scope.getTheatre = function(title, length, rating, country, isPuppet) {
        return new Theatre(title, length, rating, country, isPuppet);
    }

})(imdb);