import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div>

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

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <span onClick={handleClick}><h2 style={{ margin: "13px" }}> {props.name}</h2></span>
    <div style={{ marginLeft: "21px" }}>
      {isOpen ? props.children : null}
    </div>
  </div>;
};

const File = (props) => {
  return <h5>{props.name}</h5>
};

export default App;
