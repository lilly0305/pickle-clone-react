import { Header } from "commons/header/Header";
import { Route, Routes } from "react-router-dom";
import { Main } from "./commons/main/Main";

import 'scss/master.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
