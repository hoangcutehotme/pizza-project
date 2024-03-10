import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TestView from './page/text';
const App = () => {

    return (
                <div className="app">
                    <main className="content">
                        <Routes>
                            <Route path='/' element={<TestView/>}/>
                        </Routes>
                    </main>
                </div>
    )
}

export default App

