export const SecurityTags = () => (
  <>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta
      httpEquiv="Content-Security-Policy"
      content={`
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'unsafe-eval';
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: https:;
        font-src 'self' https://fonts.gstatic.com;
        connect-src 'self' https:;
        frame-src 'self';
        base-uri 'self';
        form-action 'self';
      `.replace(/\s+/g, ' ').trim()}
    />
  </>
); 