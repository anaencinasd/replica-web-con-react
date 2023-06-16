import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import Features from '../Pages/Features'
import Description  from '../Pages/Description'
import Screens from '../Pages/Screens'

const RouterItem = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}></Route>
                <Route path="/description" element={<Description/>}></Route>
                <Route path="/features" element={<Features/>}></Route>
                <Route path="/screens" element={<Screens/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterItem;