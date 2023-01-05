export function generatePage(title) {
  return `
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                />
                <style>
                body {
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    background-image: radial-gradient(#C1C1C1 0%, transparent 20%), radial-gradient(#C1C1C1 0%, transparent 20%);
                    background-color: #FFFFFF;
                    background-position: 0 0, 10px 10px;
                    background-size: 10px 10px;
                    width: 100%;
                    height: 100%;
                    padding: 0px;
                    margin: 0px;
                }
                </style>
            </head>
            <body style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <img src="https://global.discourse-cdn.com/business7/uploads/layer0/original/1X/57f87f7918103d5ba76f0aacb2a88a2a47605a98.png" width="450" />
                <div style="max-width: 50vw; text-align: center;">
                    <h1 style="margin-top: 20px; font-weight: 600; font-size: 100px;">${title}</h1>
                </div>
            </body>
        </html>
    `
}
