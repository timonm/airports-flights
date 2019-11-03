import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    html, body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        height: 100%;
        width: 100%;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        font-size: 1.6rem;
        color: ${colors.gray};
    }
    h1, h2, h3, h4 {
        font-weight: 700;
        color: ${colors.black};
        margin: 0;
        padding: 0;
    }
    h1 {
        font-family: 'PT Serif', sans-serif;
        font-size: 6rem;
        @media (max-width: 600px) {
            font-size: 5rem;
        }
    }
    h2 {
        font-family: 'PT Serif', sans-serif;
        font-size: 4rem;
        @media (max-width: 600px) {
            font-size: 3.6rem;
        }
    }
    h3 {
        font-family: 'PT Serif', sans-serif;
        font-size: 1.8rem;
    }
    p {
        margin: 5px 0 0;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a {
        color: ${colors.black};
        text-decoration: none;
        &:visited, &:focus {
            ${'' /* color: inherit; */}
        }
    }
    .work-sans {
        font-family: 'Work Sans', sans-serif;
        font-weight: 700;
    }
    .pt-serif {
        font-family: 'PT Serif', sans-serif;
    }
    .text-center {
        text-align: center;
    }
    .main, .orange {
        color: ${colors.main};
    }
    input[type="text"], input[type="email"] {
        transition: border-color 300ms;
        box-sizing: border-box;
        background: #FFFFFF;
        padding: 1.4rem 1.5rem;
        border: 1px solid ${colors.borderGrayLight};
        border-radius: 22.5px;
        font-size: 14px;
        color: ${colors.black};
        outline: none;
        &::placeholder {
            color: ${colors.grayLight};
        }
        &:active, &:focus {
            border-color: ${colors.grayLight};
        }
    }
`;

export const StyledComponentsTheme = {
    wrapperPaddingSide: {
        padding: '0rem 3rem',
        '@media (max-width: 800px)': {
            padding: '0 2rem'
        }
    },
    wrapperPadding: {
        padding: '6rem 3rem',
        '@media (max-width: 800px)': {
            padding: '5rem 2rem'
        }
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    }
};
