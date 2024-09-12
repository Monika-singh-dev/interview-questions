// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
// import UserDisplay from "./components/UserDisplay";
// import ThemeDisplay from "./components/ThemeDisplay";
// import ThemeProvider from "./components/ThemeProvider";
// import ThemeToggle from "./components/ThemeToggle";

// import FormValidation from "./components/FormValidation";
// import Todo from "./components/Todo";
// import Navigation from "./components/Navigation";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {/* <Todo />  */}question no 1{/* <FormValidation />  */}question no 2
      question no 3 start
      {/* <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter> */}{" "}
      question no 3 end question no 5 start
      {/* <ThemeProvider>
        <div className="App">
          <div className="App">
            <ThemeToggle />
            <ThemeDisplay />
          </div>
        </div>
      </ThemeProvider> */}{" "}
      q.no 5 end q.no 4 start
      <h1>Firebase Authentication App</h1>
      {/* <LoginForm /> */}
      <RegisterForm />
      {/* <UserDisplay /> */}
    </div>
  );
}

export default App;
