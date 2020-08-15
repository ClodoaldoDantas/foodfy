module.exports = (data) => {
  const keys = Object.keys(data);
  let valid = true;

  for (key of keys) {
    if (Array.isArray(data[key])) {
      const empty = data[key].some((item) => item === "");
      if (empty) valid = false;
    } else {
      if (data[key] === "") valid = false;
    }
  }

  return valid;
};
