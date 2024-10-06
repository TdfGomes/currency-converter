import { Global, css } from "@emotion/react";
import { whiteSmoke } from "ui/colors";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: proxima-nova;
          src:
            url(https://use.typekit.net/af/2555e1/00000000000000007735e603/30/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n7&v=3)
              format("woff2"),
            url(https://use.typekit.net/af/2555e1/00000000000000007735e603/30/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n7&v=3)
              format("woff"),
            url(https://use.typekit.net/af/2555e1/00000000000000007735e603/30/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n7&v=3)
              format("opentype");
          font-weight: 700;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: proxima-nova;
          src:
            url(https://use.typekit.net/af/78aca8/00000000000000007735e60d/30/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n6&v=3)
              format("woff2"),
            url(https://use.typekit.net/af/78aca8/00000000000000007735e60d/30/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n6&v=3)
              format("woff"),
            url(https://use.typekit.net/af/78aca8/00000000000000007735e60d/30/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n6&v=3)
              format("opentype");
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: proxima-nova;
          src:
            url(https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n4&v=3)
              format("woff2"),
            url(https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n4&v=3)
              format("woff"),
            url(https://use.typekit.net/af/efe4a5/00000000000000007735e609/30/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n4&v=3)
              format("opentype");
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: proxima-nova;
          src:
            url(https://use.typekit.net/af/1be3c2/00000000000000007735e606/30/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n3&v=3)
              format("woff2"),
            url(https://use.typekit.net/af/1be3c2/00000000000000007735e606/30/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n3&v=3)
              format("woff"),
            url(https://use.typekit.net/af/1be3c2/00000000000000007735e606/30/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n3&v=3)
              format("opentype");
          font-weight: 300;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: proxima-nova;
          src:
            url(https://use.typekit.net/af/23e139/00000000000000007735e605/30/l?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n5&v=3)
              format("woff2"),
            url(https://use.typekit.net/af/23e139/00000000000000007735e605/30/d?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n5&v=3)
              format("woff"),
            url(https://use.typekit.net/af/23e139/00000000000000007735e605/30/a?primer=fff1a989570eb474b8c22c57cc7199e63bfc7e911b750165d0199218f0b7e7cc&fvd=n5&v=3)
              format("opentype");
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        @font-face {
          font-family: ocr-a-std;
          src:
            url(https://use.typekit.net/af/3315df/000000000000000000012e5c/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format("woff2"),
            url(https://use.typekit.net/af/3315df/000000000000000000012e5c/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format("woff"),
            url(https://use.typekit.net/af/3315df/000000000000000000012e5c/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3)
              format("opentype");
          font-weight: 400;
          font-style: normal;
          font-stretch: normal;
          font-display: auto;
        }
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        body,
        html {
          font-family: proxima-nova;
          background-color: ${whiteSmoke};
        }
      `}
    />
  );
}

export default GlobalStyles;
