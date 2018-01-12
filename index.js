const express = require('express')
const app = express()
const OAuth2Server = require('oauth2-server')
app.get('/', function (req, res) {
  const oauth = new OAuth2Server({ model: { generateAccessToken: function() {} } })
  const Request = OAuth2Server.Request;
  const Response = OAuth2Server.Response;

  let request = new Request({
    body: {},
    headers: { 'Authorization': 'Bearer 2101749124594a59cf981e2a60990636960bb7c2' },
    method: {},
    query: {}
  });
  let response = new Response(res);

  oauth.authenticate(request, response)
  .then((token) => {
    console.log(token)
  })
  .catch((err) => {
    console.error(err.message)
  });
  // const AccessDeniedError = require('oauth2-server/lib/errors/access-denied-error');

  // oauth.authorize(request, response)
  //   .then((code) => {
  //   // The resource owner granted the access request.
  // })
  // .catch((err) => {
  //   if (err instanceof AccessDeniedError) {
  //   // The resource owner denied the access request.
  //   } else {
  //     // Access was not granted due to some other error condition.
  //   }
  // });
})

app.listen(3030, function() {
  console.log('Go')
})
