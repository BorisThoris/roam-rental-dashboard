export interface Image {
    id: number;
    url: string;
}

export interface Rental {
    id: number;
    name: string;
    description: string;
    images: Image[];
    // Search matches on categories where a listing carries them; the mock data
    // always does, a fetched listing may not.
    categories?: string[];
}
