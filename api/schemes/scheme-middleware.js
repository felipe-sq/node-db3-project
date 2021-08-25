const Scheme = require('./scheme-model.js');
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = async (req, res, next) => {
  try {
    const scheme = await Scheme.findById(req.params.scheme_id);
    if (scheme) {
      req.scheme = scheme;
      next();
    } else {
    return res.status(404).json({
      message: `scheme with scheme_id ${req.params.scheme_id} not found`});
    }
  } catch (err) {
    next(err);
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  try {
    if (!req.body.scheme_name || typeof req.body.scheme_name !== 'string' || req.body.scheme_name.trim() === '') {
      return res.status(400).json({
        message: "invalid scheme_name"
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  try {
    if (!req.body.instructions || typeof req.body.instructions !== 'string' || req.body.instructions.trim() === '') {
      return res.status(400).json({
        message: "invalid step"
      });
    }
    if (!req.body.step_number || typeof req.body.step_number !== 'number' || req.body.step_number < 1) {
      return res.status(400).json({
        message: "invalid step"
      });
    }
    next();
  } catch (err) {
    next(err);
  }

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
