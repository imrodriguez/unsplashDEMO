import { UserInfoWrapper, Avatar, Name, UserName, Statistics } from './styles';
import Image from 'next/image';

interface Props {
    user: User;
}

const UserInfo = ({ user }:Props) => {
    return (
        <UserInfoWrapper>
            <Avatar>
                    <Image
                        src={user.profile_image.small}
                        alt={user.name}
                        layout="fill"
                        />
            </Avatar>
            <Name>{user.name}</Name>
            <UserName>@{user.username}</UserName>

            <Statistics>
                <div>
                    <p>{user.total_photos}</p>
                    <p>Photos</p>
                </div>
                <div>
                    <p>{user.followers_count}</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p>{user.following_count}</p>
                    <p>Following</p>
                </div>
            </Statistics>
        </UserInfoWrapper>
    );
};

export { UserInfo };