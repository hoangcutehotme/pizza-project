import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminHomePage from './page/AdminHomePage';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../Admin/service/authContext';
import Sidebar from './component/Sidebar/Sidebar';
import TableProduct from './page/Product/TableProduct';
import UserList from './page/ListUser/UserList';
import ListOrder from './page/ListOrder/ListOrder';

const App = () => {

    return (
        <AuthProvider>
            <Sidebar>
                <Routes>
                    <Route path='/' element={<TableProduct />} />
                    <Route path='/user' element={<UserList />} />
                    <Route path='/order' element={<ListOrder />} />
                </Routes>
            </Sidebar>


            <ToastContainer />
            {/* {isLoading && (<LoadingModel />)} */}

        </AuthProvider>

    )
}

export default App

