// Set event listener to wait for the start

const testData = [{
        name: "AKIRA",
        image: "https://imdb-api.com/images/original/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_Ratio0.7273_AL_.jpg"
    },
    {
        name: "The Suicide Squad",
        image: "https://imdb-api.com/images/original/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_Ratio0.7273_AL_.jpg"
    },
    {
        name: "Snake Eyes",
        image: "https://imdb-api.com/images/original/MV5BNGJmMWUwMDgtYjEyNS00YmZhLTk3ZGEtZDliZDBhMDJkMGUyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7727_AL_.jpg"
    },
    {
        name: "AKIRA",
        image: "https://imdb-api.com/images/original/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_Ratio0.7273_AL_.jpg"
    },
    {
        name: "The Suicide Squad",
        image: "https://imdb-api.com/images/original/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_Ratio0.7273_AL_.jpg"
    },
    {
        name: "Snake Eyes",
        image: "https://imdb-api.com/images/original/MV5BNGJmMWUwMDgtYjEyNS00YmZhLTk3ZGEtZDliZDBhMDJkMGUyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7727_AL_.jpg"
    },
    {
        name: "AKIRA",
        image: "https://imdb-api.com/images/original/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_Ratio0.7273_AL_.jpg"
    },
    {
        name: "The Suicide Squad",
        image: "https://imdb-api.com/images/original/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_Ratio0.7273_AL_.jpg"
    },
    {
        name: "Snake Eyes",
        image: "https://imdb-api.com/images/original/MV5BNGJmMWUwMDgtYjEyNS00YmZhLTk3ZGEtZDliZDBhMDJkMGUyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_Ratio0.7727_AL_.jpg"
    },
]

async function initMoobi() {
    console.log("Started!")

    // Get our torrent data

    // Make elements
    const container = document.getElementById("container")

    // Fetch the HTML of the top 100 page
    let response = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_rqsio1p2", {
        method: "GET"
    });

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let imdbTop = await response.json();

        // TODO: Check the status 
        console.log(imdbTop)

        for (const movie of imdbTop.items) {
            console.log("movie", movie)

            const movieParent = createElement("div", {
                class: "movieParent"
            })

            const movieImage = createElement("img", {
                class: "movieImage",
                attributes: {
                    src: movie.image
                }

            })
            movieParent.append(movieImage)

            container.append(movieParent)
        }

    } else {
        alert("HTTP-Error: " + response.status);
    }

}


function createElement(type, config) {

    const element = document.createElement(type)

    for (const key in config) {
        if (key == "class") {
            element.className = config[key]
        } else if (key in element.style) {
            element.style[key] = config[key]
        } else if (key == 'attributes') {
            for (const attr in config.attributes) {
                element.setAttribute(attr, config.attributes[attr])
            }
        } else {
            element[key] = config[key]
        }
    }

    return element
}