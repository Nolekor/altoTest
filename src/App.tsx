import "./App.scss";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import TodoTable from "./Components/TodoTable/TodoTable";
import TodoContextProvider from "./contextProvider/TodoContextProvider";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <TodoContextProvider>
          <TodoTable />
        </TodoContextProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
