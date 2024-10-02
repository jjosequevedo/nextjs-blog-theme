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

export interface HomeProps {
    articles?: Array<IArticle>
}

export interface HighlightedProps {
    articles?: Array<IArticle>;
}