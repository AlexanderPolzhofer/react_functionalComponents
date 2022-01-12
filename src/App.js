import Folder from "./components/Folder";
import File from "./components/File";
import 'semantic-ui-css/semantic.min.css';

function App() {
  //nesting elements: Folder has two children (images, music) and the children got children (files)

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
          <File key="5" name="david guetta-memories.mp4" />
          <File key="6" name="avicii - fade into darkness.mp4" />
          <File key="7" name="journey - don't stop believing.mp4" />
        </Folder>
      </Folder>
    </div>
  )
}
export default App;
