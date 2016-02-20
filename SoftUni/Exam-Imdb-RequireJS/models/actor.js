define([], function() {
   return (function() {
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

        return actor;
    })();
});


