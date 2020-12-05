// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
};
