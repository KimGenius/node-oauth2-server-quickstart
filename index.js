const db = require('then-redis').createClient()
// db.get('tokens').then(function(hash) {
//   console.log(hash)
// })
// db.hset('tokens', 'id1', 'foobar').then(status => {
//   console.log('status : ', status)
// })

const OAuth2Server = require('oauth2-server');
const Request = OAuth2Server.Request;
const Response = OAuth2Server.Response;
const oauth = new OAuth2Server({
  model: require('./model')
});
let request = new Request({
  method: 'GET',
  query: {},
  headers: {Authorization: 'Bearer foobar'}
});
let response = new Response({
  headers: {}
});

oauth.authenticate(request, response)
  .then((token) => {
    console.log('success : ', token)
  })
  .catch((err) => {
    console.log(err.message)
  })