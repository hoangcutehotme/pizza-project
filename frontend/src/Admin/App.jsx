import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestView from './page/text';
import AdminHomePage from './page/AdminHomePage';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../Admin/service/authContext';

const App = () => {

    return (
        <AuthProvider>
            <div className="app">
                <main className="master-wrapper-page html-account-page">
                    <Routes>
                        <Route path='/' element={<AdminHomePage />} />
                        <Route path='/product' element={<AdminHomePage />} />
                        {/* <Route path='/' element={<TestView />} /> */}
                    </Routes>
                </main>
                <ToastContainer />
                {/* {isLoading && (<LoadingModel />)} */}
            </div>
        </AuthProvider>

    )
}

export default App

