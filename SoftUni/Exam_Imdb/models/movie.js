var imdb = imdb || {};

(function(scope) {
    var count = 0;
    function Movie(title, length, rating, country) {
        this._id = ++count;
        this.title = title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
    }

    Movie.prototype = {
        addActor: function(actor) {
            this._actors.push(actor);
        },
        getActors: function() {
            return this._actors.slice();
        },
        addReview: function(review) {
            this._reviews.push(review);
        },
        deleteReview: function(review) {
            this.deleteReviewById(review.id);
        },
        deleteReviewById: function(id){
            this._reviews = this._reviews.filter(function(r){
                return r.id !== id;
            });
        },
        getReviews: function() {
            return this._reviews.slice();
        }
    };

    scope.Movie = Movie;
    scope.getMovie = function(title, length, rating, country) {
        return new Movie(title, length, rating, country);
    }
})(imdb);

