import logo from "./logo.svg";
import ListContainerContent from "./components/ListContainerContent/ListContainerContent";
function App() {
  return (
    <div className="App">
      <div className="flex bg-gray-200 w-full min-h-full">
        <ListContainerContent title={"To Do"}></ListContainerContent>
      </div>
    </div>
  );
}

export default App;
