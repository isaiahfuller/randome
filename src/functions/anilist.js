const fetch = require("node-fetch");

export function getGenres(){
    genreQuery().then(data => {
        console.log(data.data.GenreCollection);
        return data.data.GenreCollection;
    })
}
export function genreQuery(){
    var query = `
    query {
        GenreCollection
    }`;
    var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    };
    return new Promise(function(resolve, reject){
        resolve(fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError));
    })
}
export function pageQuery(genres, tags, startYear, endYear, page){
    var date1, date2 = 0;
    let genreLine1 = "";
    let genreLine2 = "";
    if(genres.length < 10){
        genreLine1 = ", $genres: [String]"
        genreLine2 = ", genre_in:$genres"
    }
    if(startYear == null)
        date1 = 10000000;
    else
        date1 = startYear * 10000;
    
    if(endYear == null)
        date2 = 99990000;
    else
        date2 = endYear * 10000;
    
    var query = `
        query ($page: Int, $perPage: Int, $date1: FuzzyDateInt, $date2: FuzzyDateInt` + genreLine1 + `) {
            Page(page:$page, perPage:$perPage){
                pageInfo{
                    total
                    lastPage
                }
                media(type:ANIME, startDate_greater:$date1, startDate_lesser:$date2` + genreLine2 + `){
                id
                title {
                    romaji
                }
                type
                description
                season
                seasonYear
                episodes
                format
                isAdult
                coverImage{
                    medium
                }
                }
            }
        }`;
    
    var variables = {
        genres:genres, 
        tags:tags, 
        date1:date1, 
        date2:date2, 
        page:page, 
        perPage:6
    };
    var url = 'https://graphql.anilist.co',

    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };
    return new Promise(function(resolve, reject){
        resolve(fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError));
    })
}
function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    return data;
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}
