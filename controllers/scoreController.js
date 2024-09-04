const catchAsynncErrors = require("../middleware/catchAsyncErrors.js");
const Score = require("../model/scoreModel.js");

exports.createScore = catchAsynncErrors(async (req, res, next) => {
  const {  score, time } = req.body;

  const user = await Score.create({
    userId:req.user.id,
    score,
    time,
   
  });
  res.status(200).json({
    success: true,
    message: `Data Created Successfully`,
  });
});

