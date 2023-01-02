const temperature = {
  celsius: {
    farenheit(value) {
      return value * 1.8 + 32;
    },

    kelvin(value) {
      return value + 273.15;
    },
  },

  farenheit: {
    celsius(value) {
      return (value - 32) / 1.8;
    },

    kelvin(value) {
      return ((value + 459.67) * 5) / 9;
    },
  },

  kelvin: {
    celsius(value) {
      return value - 273.15;
    },

    farenheit(value) {
      return (value * 9) / 5 - 459.67;
    },
  },
};

const currencies = {
  euro: {
    dollar(value) {
      return value * 1.1;
    },
  },

  dollar: {
    euro(value) {
      return value * 0.9;
    },
  },
};

module.exports = {
  temperature,
  currencies,
};
