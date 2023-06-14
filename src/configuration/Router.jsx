import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Features from '../Pages/Features'

const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<LandingPage/>}></Route>
                <Route path="/features" element={<Features/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;