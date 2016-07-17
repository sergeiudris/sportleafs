const express = require('express');
const path = require('path');



var app = express()

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory works
// app.get('*', (req, res) => {
//   console.log(req.url);
//   console.log(req.query);
//   match({ routes, location: req.url }, (err, redirect, props) => {
//     if (err) {
//       res.status(500).send(err.message)
//     } else if (redirect) {
//       res.redirect(redirect.pathname + redirect.search)
//     } else if (props) {
//       // hey we made it!
//       console.log(props.routes);
//       const appHtml = renderToString(<RouterContext {...props}/>)
//       res.send(renderPage(appHtml))
//     } else {
//       res.status(404).send('Not Found')
//     }
//   })
// })

// function renderPage(appHtml) {
//   return `
//     <!doctype html public="storage">
//     <html>
//     <meta charset=utf-8/>
//     <title>My First React Router App</title>
//     <link rel=stylesheet href=/index.css>
//     <div id=app>${appHtml}</div>
//     <script src="/bundle.js"></script>
//    `
// }

var PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})
