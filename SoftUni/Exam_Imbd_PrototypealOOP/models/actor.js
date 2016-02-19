var imdb = imdb || {};

(function(scope) {
    var count = 0;
    var actor = {
        init: function(name, bio, born) {
            this._id = ++count;
            this.name = name;
            this.bio = bio;
            this.born = born;
            return this;
        }
    };

    scope.getActor = function(name, bio, born) {
        return Object.create(actor).init(name, bio, born);
    }

})(imdb);