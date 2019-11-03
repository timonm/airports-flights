import Link from 'next/link';
import styled from 'styled-components';
import colors from '../css/colors';

export default function Header(props) {
    return (
        <Wrapper>
            <Container>
                <Link href="/">
                    <a className="logo">Logo</a>
                </Link>
                <div>
                    <Link href="/">Home</Link>
                </div>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    background: ${props => (props.home ? '#fff' : colors.bgGray)};
    padding: 0 20px;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    max-width: 1440px;
    margin: auto;
    .logo {
        outline: none;
    }
`;
const Links = styled.div`
    margin-left: auto;
    a {
        color: ${colors.dark};
        font-weight: 500;
        font-size: 1.4rem;
        margin-left: 30px;
        &:hover {
            color: ${colors.main};
        }
    }
`;
