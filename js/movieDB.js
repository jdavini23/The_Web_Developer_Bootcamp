var movies = [{
    title: "Coach Carter",
    hasWatched: true,
    rating: 5
}, {
    title: "Home Alone",
    hasWatched: true,
    rating: 5
}, {
    title: "Deadpool",
    hasWatched: false,
    rating: 4.5
}]

movies.forEach(function(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});
