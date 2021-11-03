import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Test from "./Component/Test";
import { LOGIN } from "./redux/constaints/constaints";
import Routes from "./routing/routing";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("App.js UseEffect called");
    dispatch({
      type: LOGIN,
      payload: {
        role: localStorage.getItem("user"),
        token: localStorage.getItem("jwt"),
      },
    });
  }, []);
  return (
    <div className="App">
      <Routes />
      {/* <Test /> */}
    </div>
  );
}

export default App;
