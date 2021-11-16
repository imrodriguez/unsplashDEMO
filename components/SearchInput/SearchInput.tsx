import { SyntheticEvent } from 'react';
import { Search } from './styles';
import Icon from './Icon';
import { useRouter } from 'next/router'

const SearchInput = () => {
    const router = useRouter();

    const search = (event: { target: HTMLInputElement }) => {
        if (!event.target?.value) {
            router.push('/');
        } else {
            router.push(`/search?search=${event.target.value}`);
        }
    };

    return (
        <Search>
            <Icon/>
            <input onChange={search} type="text" placeholder="Search"/>
        </Search>
    );
};

export { SearchInput };