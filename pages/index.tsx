import { useState } from 'react';
import { API } from '../lib/unsplash';
import { getMode } from '../helpers/getMode';
import { Filters } from '../components/Filters';
import { PhotosGrid } from '../components/PhotosGrid';
import { GetServerSideProps } from "next";
import { ErrorMessage } from '../components/ErrorMessage';

interface Props {
  photos?: Photo[];
  error?: boolean;
}

export default function Home({ photos , error }: Props) {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  if (error || !photos) {
    return (
      <ErrorMessage/>
    );
  }

  return (
    <div>
      <Filters onChangeLayout={setLayout}/>
      <PhotosGrid layout={layout} photos={photos}/>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const mode = getMode(String(context.query.filter));

  try {
    const photos = await API.users.getPhotos({
      username: 'adam_29063',
      orderBy: mode
    });

    if (photos.type === 'error') {
      throw new Error;
    }

    return {
      props: { photos: photos.response?.results }
    }
  } catch(error) {
    return {
      props: { error: true }
    };
  }
};