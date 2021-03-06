var imdb = imdb || {};

(function() {
    function loadHtml(selector, data) {
        var container = document.querySelector(selector),
            moviesContainer = document.getElementById('movies'),
            detailsContainer = document.getElementById('details'),
            genresUl = loadGenres(data);

        container.appendChild(genresUl);

        genresUl.addEventListener('click', function(ev) {
            while(detailsContainer.firstElementChild) {
                detailsContainer.removeChild(detailsContainer.firstElementChild);
            }
            if(ev.target.tagName === 'LI') {
                var genreId = parseInt(ev.target.getAttribute('data-id'));
                var genre = data.filter(function(genre) {
                    return genre._id == genreId;
                })[0];
                var moviesHtml = loadMovies(genre.getMovies());
                moviesContainer.innerHTML = moviesHtml.outerHTML;
                moviesContainer.setAttribute('data-genre-id', genre._id);

                var movieNodes = Array.prototype.slice.call(moviesContainer.firstElementChild.childNodes);
                //var movieNodes = Array.prototype.slice.call(moviesHtml.childNodes);//��� �� �����, ��� ����???

                movieNodes.forEach(function(node) {

                    node.addEventListener('click', function(ev) {
                        while(detailsContainer.firstElementChild) {
                            detailsContainer.removeChild(detailsContainer.firstElementChild);
                        }
                        //detailsContainer.innerHTML = ''; - ���� � ��-����� �� �������, ������ �� ������ ���� �����

                        var id = this.getAttribute('data-id'),
                            movie = genre.getMovies().filter(function(movie){
                            return movie._id == id;
                        })[0],
                            actors = movie.getActors(),
                            reviews = movie.getReviews();


                        var actorsFragment = document.createDocumentFragment();
                        var actorsH3 = document.createElement('h3');
                        actorsH3.innerHTML = 'Actors';
                        var actorsUl = document.createElement('ul');
                        actors.forEach(function(actor) {
                           var li = document.createElement('li'),
                               h4 = document.createElement('h4');
                            h4.innerHTML = actor.name;
                            var p = document.createElement('p');
                            p.innerHTML = '<strong>Bio: </strong>' + actor.bio + '<br/>' + '<strong>Born: ' + '</strong>' + actor.born;
                            li.appendChild(h4);
                            li.appendChild(p);
                            actorsUl.appendChild(li);
                        });

                        actorsFragment.appendChild(actorsH3);
                        actorsFragment.appendChild(actorsUl);
                        detailsContainer.appendChild(actorsFragment);

                        var reviewsFragment = document.createDocumentFragment();
                        var reviewsH3 = document.createElement('h3');
                        reviewsH3.innerHTML = 'Reviews';
                        var reviewsUl = document.createElement('ul');
                        reviews.forEach(function(review) {
                            var li = document.createElement('li'),
                                h4 = document.createElement('h4'),
                                deleteButton = document.createElement('button');
                            deleteButton.innerHTML = 'Delete Review';
                            h4.innerHTML = review.author;
                            var p = document.createElement('p');
                            p.innerHTML = '<strong>Content: </strong>' + review.content + '<br/>' + '<strong>Date: ' + '</strong>' + review.date;
                            
                            deleteButton.addEventListener('click', function(ev) {
                                var li = ev.target.parentNode,
                                    ul = li.parentNode;
                                ul.removeChild(li);
                                movie.deleteReview(review);
                            });
                            
                            li.appendChild(h4);
                            li.appendChild(p);
                            li.appendChild(deleteButton);
                            reviewsUl.appendChild(li);
                        });

                        reviewsFragment.appendChild(reviewsH3);
                        reviewsFragment.appendChild(reviewsUl);
                        detailsContainer.appendChild(reviewsFragment);

                    });
                });
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
            var liMovie = document.createElement('li');
            liMovie.setAttribute('data-id', movie._id);

            liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
            liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
            liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
            liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
            liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
            liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
            moviesUl.appendChild(liMovie);
        });

        return moviesUl;
    }

    imdb.loadHtml = loadHtml;
})();