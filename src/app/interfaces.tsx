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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CardListProps extends CommonProps {
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HomeProps extends CommonProps {
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HighlightedProps extends CommonProps {
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface SideBarProps extends CommonProps {
}
