define([], function() {
    return (function() {
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

        return review;
    })();
});

