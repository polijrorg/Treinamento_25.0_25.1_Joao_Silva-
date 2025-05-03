import Sidebar from 'components/SideBar';
import CenterSection from 'components/CenterSection';
import { RightSection } from 'components/RightSection';
import * as S from './styles';

const HomePage = () => {
    return (
        <S.Container>
            <Sidebar />
            <CenterSection />
            <RightSection />
        </S.Container>
    );
};
export default HomePage;
