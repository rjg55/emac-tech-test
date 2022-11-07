exports.errorHandling = (err, req, res, next) => {
  if (err.message === "Not a valid cardID") {
    res.status(400).send({ status: 400, msg: err.message });
  }
};
