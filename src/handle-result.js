const handleResult = (error, summary) => {
  if (error) {
    process.send({error});
  } else {
    process.send({summary});
  }
};

module.exports.handleResult = handleResult;
