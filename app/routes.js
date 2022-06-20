module.exports = function(app){

  app.all('/ping', function(req, res) {
    res.send({ message: 'pong' });
  });

};
