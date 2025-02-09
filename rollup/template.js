// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ files }) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="assets/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="assets/logo192.png" />
      <link rel="manifest" href="assets/manifest.json" />
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href=${files.css[0].fileName} />
      <title>REACT COOL PORTAL</title>
      <meta property="og:title" content="REACT COOL PORTAL" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://react-cool-portal.netlify.app/assets/og_image.png" />
      <meta property="og:description" content="React hook for Portals, which renders modals, dropdowns, tooltips etc. to <body> or else." />
      <meta property="og:url" content="https://react-cool-portal.netlify.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@react-cool-portal" />
      <meta name="twitter:creator" content="@wellyshen" />
    </head>
    <body>
      <div id="app"></div>
      <script type="text/javascript" src=${files.js[0].fileName}></script>
    </body>
  </html>
`;
