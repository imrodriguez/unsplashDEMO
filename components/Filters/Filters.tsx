import { FiltersWrapper, FilterButton, LayoutButtons, FiltersLinks } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { config } from './config';
import { RiLayoutGridLine } from 'react-icons/ri';
import { VscListFlat } from 'react-icons/vsc';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    onChangeLayout: Dispatch<SetStateAction<"grid" | "list">>;
}

const Filters = ({ onChangeLayout }: Props) => {
    const router = useRouter();

    return (
        <FiltersWrapper>
            <FiltersLinks>
                {config.map((element, index) => {
                    const selected = router.query.filter ? router.query.filter === element.action : !!element.default;

                    return (<Link key={`filter-link-${index}`} href={`/?filter=${element.action}`}>
                        <FilterButton selected={selected}>{element.title}</FilterButton>
                    </Link>);
                })}
            </FiltersLinks>
            <LayoutButtons>
                <RiLayoutGridLine onClick={() => onChangeLayout('grid')} />
                <VscListFlat onClick={() => onChangeLayout('list')} />
            </LayoutButtons>
        </FiltersWrapper>
    );
};

export { Filters };