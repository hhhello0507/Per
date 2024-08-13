import S from './HomePage.style';
import C from '../../component/Title.style';
import SearchIcon from "../../designsystem/foundation/icons/Search";

export default function HomePage() {
    return (
        <S.Container>
            <C.Title>Per</C.Title>
            <S.InputContainer>
                <SearchIcon width={24} height={24} fill={'#A4A4B0'}/>
                <S.Input/>
            </S.InputContainer>
        </S.Container>
    );
};