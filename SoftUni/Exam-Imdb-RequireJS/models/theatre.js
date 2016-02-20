define(['movie', 'extensions'], function(movie){
   return (function() {
        var count = 0;
        var theatre = movie.extends({
            init: function Theatre(title, length, rating, country, isPuppet) {
                this._parent.init.call(this, title, length, rating, country);
                this._id = ++count;
                this.isPuppet = isPuppet;
                return this;
            }
        });

        return theatre;
    })();
});

