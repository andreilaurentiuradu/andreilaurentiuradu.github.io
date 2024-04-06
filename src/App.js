import React, { useRef } from "react";
import ReactDOM from "react-dom";
import CameraApp from "./CameraApp";

const App = () => {
  const rearCamera = useRef(null);

  return (
    <div>
      <CameraApp rearCamera={rearCamera} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;