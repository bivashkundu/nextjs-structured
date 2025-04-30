import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v15-pagesRouter';
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';

interface MyDocumentProps extends DocumentProps, DocumentHeadTagsProps {}

export default function MyDocument(props: MyDocumentProps) {
  return (
    <Html lang='en'>
      <Head>
        <DocumentHeadTags {...props} />
        {/* PWA primary color */}
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
