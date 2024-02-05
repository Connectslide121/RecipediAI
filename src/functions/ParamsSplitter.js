export function ParamsSplitter(params) {
  if (params.query !== undefined) {
    const paramsArray = params.query.replace(/^&/, "").split("&");
    const healthIndex = paramsArray.findIndex((param) =>
      param.startsWith("health=")
    );
    const healthParams =
      healthIndex !== -1 ? paramsArray.slice(0, healthIndex + 1) : paramsArray;

    const otherParams =
      healthIndex !== -1
        ? paramsArray.slice(healthIndex + 1).map((param) => param.split("&"))
        : [];

    const otherParamsString = otherParams.reduce((acc, param, index) => {
      if (index > 0) {
        acc += ", ";
      }
      acc += param.join(", ");
      return acc;
    }, "");

    const lastElement = healthParams[healthParams.length - 1];
    let updatedLastElement = `${lastElement}`;
    if (otherParamsString !== "") {
      updatedLastElement = `${lastElement}, ${otherParamsString}`;
    }
    healthParams[healthParams.length - 1] = updatedLastElement;

    // console.log("params splitted:", healthParams);
    return healthParams;
  } else {
    // console.log("params NOT splitted:", params);
    return params;
  }
}
