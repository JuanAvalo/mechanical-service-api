const errorHandler = (err, req, res, next) => {
  if(err.type === 'custom') res.status(err.code).json({ message: err.message });
  console.log(err)
  res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
