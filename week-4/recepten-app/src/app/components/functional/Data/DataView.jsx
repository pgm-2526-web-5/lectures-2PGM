import isVoid from "@core/utils/isVoid";
import LoadingIndicator from "@design/Loading/LoadingIndicator";

const DataView = ({ error, data, onRender }) => {
  const isLoading = !error && !data;

  if (isLoading) {
    return <LoadingIndicator />;
  } else if (!isVoid(error)) {
    /* make component! */
    return <p>{error}</p>;
  } else if (Array.isArray(data) && data !== null && data.length === 0) {
    /* todo: component */
    return <p>Deze lijst is leeg</p>;
  }

  return onRender(data);
};

export default DataView;
