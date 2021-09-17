const { SET_STEP, INCREMENT } = require("./constants")

exports.increment = function increment(payload) {
  return {
    type: INCREMENT,
    payload,
  }
}

exports.setStep = function setStep(payload) {
  return {
    type: SET_STEP,
    payload,
  }
}