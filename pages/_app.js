import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { GlobalStyle, StyledComponentsTheme } from '../css/global';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <GlobalStyle />
                <DefaultSeo
                    title="Language on course"
                    description="Language on course is amazing language learning directory"
                    // openGraph={{
                    //     type: 'website',
                    //     locale: 'en_IE',
                    //     url: 'https://www.url.ie/',
                    //     site_name: 'SiteName'
                    // }}
                    // twitter={{
                    //     handle: '@handle',
                    //     site: '@site',
                    //     cardType: 'summary_large_image'
                    // }}
                />
                <ThemeProvider theme={StyledComponentsTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </>
        );
    }
}
