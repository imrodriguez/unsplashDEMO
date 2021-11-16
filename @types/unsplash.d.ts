type Photo = {
    id: number;
    width: number;
    height: number;
    alt_description: string;
    urls: { large: string; regular: string; raw: string; small: string };
    color: string | null;
    user: User;
};

type User = {
    username: string;
    name: string;
    profile_image: {
        large: string; regular: string; raw: string; small: string
    }
    total_photos?: number;
    followers_count?: number;
    following_count?: number;
}