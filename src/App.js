import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div style={{ fontSize: "X-Large" }}>
      <div style={{ textAlign: "center", border: "2px solid", padding: "5px", margin: "5px", backgroundColor: "lightgray" }}>
        <h1 >APP</h1>
      </div>

      <Folder name="Desktop" system="windows" user="alex"  >
        <Folder name="Images">
          <File key="1" name="eagle.jpg" />
          <File key="2" name="dog.jpg" />
          <File key="3" name="cat.jpg" />
          <File key="4" name="shark.jpg" />
        </Folder>
        <Folder name="Music" >
          <File key="5" name="david guetta-memories" />
          <File key="6" name="avicii - fade into darkness" />
          <File key="7" name="journey - don't stop believing" />
        </Folder>
      </Folder>
    </div>
  )
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const direction = isOpen ? 'down' : "right";

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div style={{ padding: "8px" }}>
    <span onClick={handleClick}>
      <i className="grey folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      {props.name}
    </span>
    <div style={{ marginLeft: "21px" }}>
      {isOpen ? props.children : null}
    </div>
  </div >;
};

const File = (props) => {
  return <div style={{ padding: "8px" }}>
    <i className="file image icon"></i>
    {props.name}
  </div>
};

export default App;
