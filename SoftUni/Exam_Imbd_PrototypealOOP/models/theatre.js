var imdb = imdb || {};

(function(scope) {
    var count = 0;
    var theatre = scope._movie.extends({
        init: function Theatre(title, length, rating, country, isPuppet) {
               this._parent.init.call(this, title, length, rating, country);
                this._id = ++count;
                this.isPuppet = isPuppet;
                return this;
        }
    });

    //without extends method
    //var theatre = Object.create(scope._movie);
    //theatre.init = function Theatre(title, length, rating, country, isPuppet) {
    //    scope._movie.init.call(this, title, length, rating, country);
    //    this._id = ++count;
    //    this.isPuppet = isPuppet;
    //    return this;
    //};


    scope.getTheatre = function(title, length, rating, country, isPuppet) {
        return Object.create(theatre).init(title, length, rating, country, isPuppet);
    }

})(imdb);