var imdb = imdb || {};

(function(scope) {
    var count = 0;
    var movie = {
        init: function (title, length, rating, country) {
            this._id = ++count;
            this.title = title;
            this.length = length;
            this.rating = rating;
            this.country = country;
            this._actors = [];
            this._reviews = [];
            return this;
        },
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
            this.deleteReviewById(review._id);
        },
        deleteReviewById: function(id){
            this._reviews = this._reviews.filter(function(review){
                return review._id !== id;
            });
        },
        getReviews: function() {
            return this._reviews.slice();
        }
    };

    scope._movie = movie;
    scope.getMovie = function(title, length, rating, country) {
        return Object.create(movie).init(title, length, rating, country);
    }
})(imdb);

