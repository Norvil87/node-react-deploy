const saySomething = (req, res, next) => {
  res.status(200).json({
    body: "Hello from the server once again!",
  });
};

module.exports.saySomething = saySomething;
