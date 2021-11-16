import { Grid } from "./styles";
import { Photo } from './Photo';

interface Props {
    layout: 'grid' | 'list';
    photos: Photo[];
}

const PhotosGrid = ({ layout, photos }:Props) => {
    return (<Grid layout={layout}>
        {photos.map((photo, index) => (
            <Photo key={`photo-${index}`} url={photo.urls.small} alt={photo.alt_description || `Image by ${photo.user.name}`} user={photo.user}/>
        ))}
    </Grid>);
};

export { PhotosGrid };