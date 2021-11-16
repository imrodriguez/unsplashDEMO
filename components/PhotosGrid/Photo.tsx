import Image from 'next/image';
import { PhotoWrapper, UserInfo, UserImage, UserName } from './styles';

interface Props {
    url: string;
    alt: string;
    user: User;
}

const Photo = ({ url, alt, user }: Props) => {
    return (
        <PhotoWrapper>
            <Image
                src={url}
                alt={alt}
                layout="fill"
            />
            <UserInfo>
                <UserImage>
                    <Image
                    src={user.profile_image.small}
                    alt={user.name}
                    layout="fill"
                    />
                </UserImage>
                <UserName>{user.name}</UserName>
            </UserInfo>
        </PhotoWrapper>
    );
};

export { Photo };