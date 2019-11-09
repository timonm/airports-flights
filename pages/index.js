import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { Fade } from 'react-reveal';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

// import dummy from '../utils/dummy.json'; // TO BE REMOVED
import colors from '../css/colors';

const MapWithNoSSR = dynamic(() => import('../components/Map'), {
    ssr: false,
});

function Index(props) {
    const [isReady, setHasRendered] = useState(false);
    useEffect(() => {
        setHasRendered(true);
    }, [isReady]);
    return (
        <>
            <NextSeo
                title="AF: Airports & Flights"
                description="Here you'll find all airports & flights"
            />
            <Layout home column>
                <Main>
                    <Fade duration={500}>{isReady && <MapWithNoSSR {...props} />}</Fade>
                </Main>
                <Wrapper name="activities"></Wrapper>
            </Layout>
        </>
    );
}

export default Index;

const Main = styled.section`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
        font-size: 6rem;
        font-weight: 700;
        @media (max-width: 600px) {
            font-size: 5rem;
        }
    }
`;
const Wrapper = styled.section`
    ${props => props.theme.flexColumn};
    background: ${colors.bgGray};
    width: 100%;
`;
