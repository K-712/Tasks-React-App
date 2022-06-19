const getTest = async (req, res) => {
  res.status(200).json({
    message: "Test Successful"
  });
};

export default getTest;
