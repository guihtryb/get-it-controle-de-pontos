const setDisplay = (showModal) => {
  if (showModal) {
    return {
      container: 'flex',
      box: 'block',
    };
  }
  return {
    container: 'none',
    box: 'none',
  };
};

export default setDisplay;
