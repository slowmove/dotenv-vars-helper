const envHelper = {

  isSet: (key) => {
    if (process.env[key] === true || process.env[key] === "true") {
      return true;
    }
    return false;
  },

  enabled: (key) => {
    if (process.env[key] &&
      process.env[key] !== false &&
      process.env[key] !== "false") {
      return true;
    }
    return false;
  },

  correctedType: (key) => {
    const stringVal = process.env[key];
    if (stringVal === "true" || stringVal === "false") {
      return envHelper.isSet(key);
    } else if (Number(stringVal)) {
      return Number(stringVal);
    }
    return stringVal;
  },

};
module.exports = envHelper;
