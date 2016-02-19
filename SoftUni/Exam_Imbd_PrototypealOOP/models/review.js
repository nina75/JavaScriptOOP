var imdb = imdb || {};

(function(scope) {
    var count = 0;
    var review = {
       init: function Review(author, content, date) {
           this._id = ++count;
           this.author = author;
           this.content = content;
           this.date = date;
           return this;
       }
    };

    scope.getReview = function(author, content, date) {
        return Object.create(review).init(author, content, date);
    }
})(imdb);