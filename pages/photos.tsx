import { useState } from 'react';
import { API } from '../lib/unsplash';
import { PhotosGrid } from '../components/PhotosGrid';
import { GetServerSideProps } from "next";
import { ErrorMessage } from '../components/ErrorMessage';
import { Title } from '../components/Title';

interface Props {
    photos?: Photo[];
    error?: boolean;
}

export default function Photos({ photos, error }: Props) {
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');

    if (error || !photos) {
        return (
            <ErrorMessage />
        );
    }

    return (
        <div>
            <Title text="My photos"/>
            <PhotosGrid layout={layout} photos={photos} />
        </div>
    )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const photos = await API.users.getPhotos({
            username: 'adam_29063',
            perPage: 25,
        });

        if (photos.type === 'error') {
            throw new Error;
        }

        return {
            props: { photos: photos.response?.results }
        }
    } catch (error) {
        return {
            props: { error: true }
        };
    }
};