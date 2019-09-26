export const fetchShows = () => {
    return fetch('http://api.tvmaze.com/shows')
        .then((response) =>
            response.json()
        )
        .then((response) => {
            return response;
        });
}

export const fetchSingleShow = () => {
    return fetch('http://api.tvmaze.com/shows/' + localStorage.getItem('id') + "?embed[]=seasons&embed[]=cast")
        .then((response) =>
            response.json()
        )
        .then((response) => {
            return response;
        });
}

export const searchShowByName = () => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${localStorage.getItem('value')}`)
    .then((response) => 
    response.json()
    )
    .then((response) =>{
        return response;
    } );
}

