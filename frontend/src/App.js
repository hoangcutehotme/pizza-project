import './App.css';
import Header from './component/Header/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from './page/UserInfo';
import Pizza from './page/Pizza';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div class="master-wrapper-page html-account-page" id="master-wrapper-custom-id" style={{ marginTop: '168px' }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/userInfo" element={<UserInfo />} />
          <Route path="/pizza" element={<Pizza />} />
        </Routes>
          <Footer />
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
