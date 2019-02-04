const Validator = require('validator');
const isEmpty = require('../validation/isEmpty');

module.exports = validatePostInput = data => {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }

  if (!Validator.isLength(data.text, { min: 3, max: 30 })) {
    errors.text = 'Text must be between 3 to 30 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
