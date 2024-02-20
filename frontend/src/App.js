import './App.css';
import Header from './component/Header/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from './page/UserInfo';

function App() {
  return (
    <div class="master-wrapper-page html-account-page" id="master-wrapper-custom-id" style={{marginTop: '168px'}}>
      <Router>
        <Header />
        <Routes>
          <Route path="/userInfo" element={<UserInfo />} />

        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
