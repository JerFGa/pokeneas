function renderPokenea(pokenea, containerId) {
  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pokenea</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background-color: #121212;
            color: #e0e0e0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
          }
          .container {
            max-width: 600px;
            width: 100%;
            text-align: center;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
            color: #bb86fc;
            text-transform: uppercase;
            letter-spacing: 4px;
          }
          img {
            max-width: 100%;
            width: 900px;
            height: auto;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(187, 134, 252, 0.3);
            margin-bottom: 1.5rem;
          }
          .phrase {
            font-size: 1.3rem;
            font-style: italic;
            color: #03dac6;
            margin-bottom: 2rem;
            line-height: 1.6;
          }
          .container-id {
            color: #cf6679;
            font-size: 0.9rem;
            padding: 1rem;
            border-top: 1px solid #333;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${pokenea.getName()}</h1>
          <img src="${pokenea.getImage()}" alt="${pokenea.getName()}" />
          <p class="phrase">"${pokenea.getPhrase()}"</p>
          <div class="container-id">
            Contenedor ID: <strong>${containerId}</strong>
          </div>
        </div>
      </body>
    </html>
  `;
};

module.exports = { renderPokenea };
