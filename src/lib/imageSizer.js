export const imageSizer = () => {
  if (window.innerWidth <= 300) {
    return {
      width: "15em",
      height: "7.5em"
    };
  }

  if (window.innerWidth <= 600) {
    return {
      width: "20em",
      height: "10em"
    };
  }

  if (window.innerWidth <= 900) {
    return {
      width: "25em",
      height: "12.5em"
    };
  }

  if (window.innerWidth <= 1200) {
    return {
      width: "30em",
      height: "15em"
    };
  }

  if (window.innerWidth <= 1500) {
    return {
      width: "35em",
      height: "17.5em"
    };
  }

  if (window.innerWidth <= 1800) {
    return {
      width: "40em",
      height: "20em"
    };
  }

  if (window.innerWidth <= 2100) {
    return {
      width: "45em",
      height: "22.5em"
    };
  }

  if (window.innerWidth <= 2400) {
    return {
      width: "50em",
      height: "25em"
    };
  }

  if (window.innerWidth <= 2700) {
    return {
      width: "55em",
      height: "27.5em"
    };
  }

  if (window.innerWidth <= 3000) {
    return {
      width: "60em",
      height: "30em"
    };
  }

  return {
    width: "50vw",
    height: "50vh"
  };
};
