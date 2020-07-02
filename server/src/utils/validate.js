exports.validateFields = (data) => {
  const keys = Object.keys(data);
  let valid = true;

  keys.forEach((key) => {
    const field = data[key];

    if (Array.isArray(data[key])) {
      field.forEach((value) => {
        if (value === "") valid = false;
      });
    } else {
      if (data[key] === "") valid = false;
    }
  });

  return valid;
};
