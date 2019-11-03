import Link from 'next/link';
import styled from 'styled-components';
import colors from '../css/colors';

export default function Header(props) {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Column>fee</Column>
                </Row>
                <BottomPanel>
                    <Links>
                        <Link href="/">Home</Link>
                    </Links>
                </BottomPanel>
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    background: ${colors.violetDark};
    padding: 5rem 0rem;
`;
const Container = styled.div`
    padding: 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1440px;
    margin: auto;
`;
const Links = styled.div`
    a {
        font-size: 1.3rem;
        margin-left: 3rem;
        color: ${colors.whiteLight};
        &:hover {
            color: #fff;
        }
    }
`;
const Row = styled.div`
    width: 100%;
    flex-wrap: wrap;
    padding: 0 3rem;
    ${props => props.theme.flexRow};
    h4 {
        font-size: 2rem;
        color: ${colors.main};
    }
    p {
        font-size: 1.4rem;
        line-height: 2.3rem;
        margin-top: 1rem;
        color: ${colors.whiteLight};
    }
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;
const BottomPanel = styled.div`
    ${props => props.theme.flexRow};
    margin-top: 8rem;
    width: 100%;
    svg {
        margin-right: auto;
    }
`;
const Column = styled.div`
    padding: 2rem;
    flex: 1;
    ${props => props.theme.flexColumn};
    @media (max-width: 800px) {
        padding: 2rem 0;
    }
`;
