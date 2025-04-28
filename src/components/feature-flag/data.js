const demoApiResponse = {
  LightDarkMode: true,
  TicTacToe: true,
  RandomColor: true,
  Accordion: false,
  TreeView: true,
};

const featureFlagsDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (demoApiResponse) setTimeout(resolve(demoApiResponse), 1000);
    else reject("Failed to fetch feature flags data");
  });
};

export default featureFlagsDataServiceCall;
