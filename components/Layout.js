import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import colors from '../css/colors';

export default function Layout(props) {
    const { children } = props;
    return (
        <div>
            {/* <Header /> */}
            <Container>{children}</Container>
            <Footer />
        </div>
    );
}
const Container = styled.div`
    display: flex;
    flex-direction: ${props => (props.column ? 'column' : 'row')};
    background: ${props => (props.home ? '#fff' : colors.bgGray)};
    min-height: calc(100vh - 80px);
    margin: auto;
`;
