var imdb = imdb || {};

(function(scope) {
    var count = 0;
    function Actor(name, bio, born) {
        this._id = ++count;
        this.name = name;
        this.bio = bio;
        this.born = born;
    }

    scope.getActor = function(name, bio, born) {
        return new Actor(name, bio, born);
    }

})(imdb);