import * as dataModule from "./data.js"
import * as uiModule from "./UI.js";

export const initHomepage = () => {
    dataModule.fetchShows()
        .then((shows) => {
            uiModule.displayShows(shows)
        })
}

export const initSingleShow = () => {
    dataModule.fetchSingleShow()
    .then((show) => {
        uiModule.displaySingleShow(show)
    }
    )
}

export const initSearchShows = () => {
    dataModule.searchShowByName()
    .then((show) => {
        uiModule.searchShows(show)
    })
}