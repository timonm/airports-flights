import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
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
                title="Activities"
                description="TODO: Description" // TODO
            />
            <Layout home column>
                <Main>
                    <Fade top duration={1000} delay={300}>
                        {isReady && <MapWithNoSSR {...props} />}
                    </Fade>
                </Main>
                <Wrapper name="activities"></Wrapper>
            </Layout>
        </>
    );
}

Index.getInitialProps = async ({ req }) => {
    const radius = 500;
    const lat = '39.470242';
    const lng = '-0.376800';
    const url = `https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-radius?radius=${radius}&lng=${lng}&lat=${lat}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            // 'x-rapidapi-host': process.env.AIRPORTS_KEY,
            // 'x-rapidapi-key': process.env.AIRPORTS_SECRET,
            'x-rapidapi-host': 'cometari-airportsfinder-v1.p.rapidapi.com',
            'x-rapidapi-key': 'a094aac6e2msh9bd187ec1c61e94p1a5fcfjsnfa3703e7f3e3',
        },
    })
        .then(response => response)
        .catch(err => {
            console.log(err);
        });
    const data = await res.json();
    console.log(data);
    return {
        data,
        lat,
        lng,
    };
};

export default Index;

const Main = styled.section`
    ${props => props.theme.wrapperPaddingSide};
    background: #fff;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: calc(100vh - 80px);
    margin: auto;
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
