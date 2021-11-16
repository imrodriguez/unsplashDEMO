import { API } from '../lib/unsplash';
import { PhotosGrid } from '../components/PhotosGrid';
import { GetServerSideProps } from "next";

interface Props {
  photos: Photo[]
}

export default function Search({ photos }: Props) {
  return (
    <div>
      <PhotosGrid layout="grid" photos={photos}/>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const photos = await API.search.getPhotos({
      query: String(context.query.search)
    });

    return {
      props: { photos: photos.response?.results }
    }
  } catch(err) {
    return {
      props: { photos: undefined }
    };
  }
};