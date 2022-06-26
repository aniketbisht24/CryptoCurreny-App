import {Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import { Home } from './components/Blog/home/Home';
import { Register } from './components/Register/Register';
import { Write } from './components/Blog/write/Write';
import { Single } from './components/Blog/single/Single';
import Settings from './components/Settings/Settings';


const Router = () => {
    const user = false;

    return (
        <Routes>
            <Route exact path="/" element = {<Home />} />
            <Route exact path = "/log-in" element = {user? <Home /> : <Login />} />
            <Route exact path = '/register' element = {user ? <Home /> : <Register />} />
            <Route exact path = '/write' element = {user ? <Write /> : <Login />} />
            <Route exact path = '/settings' element = {user ? <Settings /> : <Login />} />
            <Route exact path = '/post/:postId' element = {<Single />} />
        </Routes>
    );
}
 
export default Router;