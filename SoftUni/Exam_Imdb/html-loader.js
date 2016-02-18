var imdb = imdb || {};

(function() {
    function loadHtml(selector, data) {
        var container = document.querySelector(selector),
            moviesContainer = document.getElementById('movies'),
            detailsContainer = document.getElementById('details'),
            genresUl = loadGenres(data);

        container.appendChild(genresUl);

        genresUl.addEventListener('click', function(ev) {
            if(ev.target.tagName === 'LI') {
                var genreId = parseInt(ev.target.getAttribute('data-id'));
                var genre = data.filter(function(genre) {
                    return genre._id == genreId;
                })[0];
                var moviesHtml = loadMovies(genre.getMovies());
                moviesContainer.innerHTML = moviesHtml.outerHTML;
                moviesContainer.setAttribute('data-genre-id', genre._id);
            }
        });
         moviesContainer.addEventListener('click', function(ev) {
             if(ev.target.tagName === 'LI' || ev.target.parentNode.tagName === 'LI') {
                 var genreId = parseInt(this.getAttribute('data-genre-id'));
                 var movieId = parseInt(ev.target.getAttribute('data-id') || ev.target.parentNode.getAttribute('data-id'));
                 var genre = data.filter(function(g) {
                     return g._id == genreId;
                 })[0];
                 var movie = genre.getMovies().filter(function(m) {
                     return m._id == movieId;
                 })[0];
                 if(ev.target.tagName === 'BUTTON') {
                     genre.deleteMovieById(movieId);
                     var movieContainerElement = ev.target.parentNode;
                     var genreContainerElement = movieContainerElement.parentNode;
                     genreContainerElement.removeChild(movieContainerElement);
                     detailsContainer.innerHTML = '';
                 } else {
                     var actorsHtml = loadActors(movie.getActors());
                     var reviewsHtml = loadReviews(movie.getReviews());
                     detailsContainer.innerHTML = actorsHtml.outerHTML;
                     detailsContainer.innerHTML += reviewsHtml.outerHTML;
                 }
             }
         });

    }

    function loadGenres(genres) {
        var genresUl = document.createElement('ul');
        genresUl.setAttribute('class', 'nav navbar-nav');
        genres.forEach(function(genre) {
            var liGenre = document.createElement('li');
            liGenre.innerHTML = genre.name;
            liGenre.setAttribute('data-id', genre._id);
            genresUl.appendChild(liGenre);
        });
        return genresUl;
    }

    function loadMovies(movies) {
        var moviesUl = document.createElement('ul');
        movies.forEach(function(movie){
            var liMovie = document.createElement('li'),
                deleteMovieButton = document.createElement('button');
            liMovie.setAttribute('data-id', movie._id);
            deleteMovieButton.innerHTML = 'Delete Movie';

            liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
            liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
            liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
            liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
            liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
            liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            liMovie.appendChild(deleteMovieButton);
            moviesUl.appendChild(liMovie);
        });

        return moviesUl;
    }

    function loadActors(actors) {
        var actorsUl = document.createElement('ul');
        actorsUl.innerHTML = '<h3>Actors</h3>';
        actors.forEach(function(actor) {
            var liActor = document.createElement('li');
            liActor.innerHTML = '<h4>' + actor.name + '</h4>';
            liActor.innerHTML += '<div>Bio: ' + actor.bio + '</div>';
            liActor.innerHTML += '<div>Born: ' + actor.born + '</div>';
            actorsUl.appendChild(liActor);
        });
        return actorsUl;
    }

    function loadReviews(reviews) {
        var reviewsUl = document.createElement('ul');
        reviewsUl.innerHTML = '<h3>Reviews</h3>';
        reviews.forEach(function(review) {
            var liReview = document.createElement('li');
            liReview.innerHTML = '<h4>' + review.author + '</h4>';
            liReview.innerHTML += '<div>Content: ' + review.content + '</div>';
            liReview.innerHTML += '<div>Date: ' + review.date + '</div>';
            reviewsUl.appendChild(liReview);
        });
        return reviewsUl;
    }

    imdb.loadHtml = loadHtml;
})();