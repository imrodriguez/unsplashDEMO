import { OrderBy } from "unsplash-js";

export const config = [
    {
        title: 'Latest',
        action: OrderBy.LATEST,
        default: true
    },
    {
        title: 'Oldest',
        action: OrderBy.OLDEST
    },
    {
        title: 'Popular',
        action: OrderBy.POPULAR
    },
    {
        title: 'More views',
        action: OrderBy.VIEWS
    },
    {
        title: 'More downloads',
        action: OrderBy.DOWNLOADS
    },
];