import Document, { Head, Main, NextScript } from 'next/document';
import { Normalize } from 'styled-normalize';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    {this.props.styleTags}
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700|PT+Serif:400,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
                        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Normalize />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
