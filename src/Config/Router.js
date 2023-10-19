import { Routes, Route, BrowserRouter } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import Registration from '../Pages/Registration'
import Profile from '../Pages/Profile'
import Package from '../Pages/Package'
import TermsAndCondition from '../Pages/TermsAndCondition';
import UploadPhotos from '../Pages/UploadPhotos'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage to='/' />}/>
                <Route path='/register' element={<Registration />} />
                <Route path='/profile' element={<Profile />}/>
                <Route path='/packages' element={<Package />}/>
                <Route path='/t&c' element={<TermsAndCondition />} />
                <Route path='/uploadPhotos' element={ <UploadPhotos /> } />
            </Routes>
        </BrowserRouter>        
    )
}

export default Router