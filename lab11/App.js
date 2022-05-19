import Hierarchy from "./Hierarchy.js";

function App() {
  const hierarchy = [{
    id: 1,
    name: "folder1",
    icon: "/icons/folder.png",

    children: [{
      id: 2,
      name: "folder2",
      icon: "/icons/folder.png",
      onClick: function(id) {
        console.log(id);
      },

      children: [{
        id: 3,
        name: "image.png",
        icon: "/icons/image.png",
        onClick: function(id) {
          console.log(id);
        }
      }]
    }]
  }, {
    id: 4,
    name: "folder3",
    icon: "/icons/folder.png",

    children: [{
      id: 5,
      name: "folder4",
      icon: "/icons/folder.png",

      children: [{
        id: 6,
        name: "text.txt",
        icon: "/icons/doc.png",
        onClick: function(id) {
          console.log(id);
        }
      }]
    }]
  }];
  
  return (
    <div className="App">
      <Hierarchy tree={hierarchy}/>
    </div>
  );
}

export default App;
