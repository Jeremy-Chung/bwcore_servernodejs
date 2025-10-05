// Refers to: http://expressjs.com/en/4x/api.html#express.router
module.exports = [
    {
        path: "/",
        method: "get",
        middleware: (req, res, next) => {
            next();
        },
        action: (req, res) => {
            res.redirect(301, "/readme.md");
        },
    },
    {
        path: "/hello",
        method: "get",
        validation: {
            // Using: (bw-prop-type)[http://bb.allstar-interactive.com:7990/projects/BG/repos/bwcore_proptype/browse]
            // e.g.
            //
            // id: PropTypes.Number
        },
        middleware: (req, res, next) => {
            next();
        },
        action: (req, res) => {
            res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Hello World</title>
                </head>
                <body>
                    <h1>Welcome to Minions World!</h1>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/sFukyIIM1XI"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media" allowfullscreen>
                    </iframe>
                </body>
                </html>`);
        },
    },
];
