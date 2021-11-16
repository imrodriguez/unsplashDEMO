import { OrderBy } from "unsplash-js";

export const getMode = (query:string | undefined):OrderBy => {
    switch(query) {
        case 'latest':
            return OrderBy.LATEST;
        case 'oldest':
            return OrderBy.OLDEST;
        case 'popular':
            return OrderBy.POPULAR;
        case 'views':
            return OrderBy.VIEWS;
        default:
            return OrderBy.LATEST;
    }
};