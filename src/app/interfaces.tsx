export interface IArticle {
    full_desc?: string;
    summary?: string;
    changed: string;
    created: string;
    slug?: string;
    title: string;
    author: string;
    tags: Array<string>;
    image?: {
        alt: string | "";
        url: string | "";
    };
}

interface CommonProps {
    articles?: Array<IArticle>
}

export interface CardListProps extends CommonProps {
}

export interface HomeProps extends CommonProps {
}

export interface HighlightedProps extends CommonProps {
}