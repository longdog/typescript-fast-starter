import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [txt, setTxt] = React.useState("");
  React.useEffect(() => {
    const controller = new AbortController();
    fetch("/api/ping", {
      signal: controller.signal,
    })
      .then((resp) => resp.json())
      .then((data) => setTxt(data.pong));
    return () => controller.abort();
  }, []);
  return <div>{txt}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
