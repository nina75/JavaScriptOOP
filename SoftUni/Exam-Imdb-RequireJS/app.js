(function() {
    require.config({
        paths: {
            'generator': 'helpers/generator',
            'extensions': 'helpers/extensions',
            'html-loader': 'html-loader',
            'actor': 'models/actor',
            'genre': 'models/genre',
            'movie': 'models/movie',
            'review': 'models/review',
            'theatre': 'models/theatre'
        }
    });

})();

require(['generator', 'html-loader'], function(imdb, loadHtml) {
    var genres;

    imdb.generateData();
    genres = imdb.getGenres();

    loadHtml('#genres', genres);
});