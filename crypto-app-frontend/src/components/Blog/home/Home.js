import {Header} from '../header/Header';
import {Posts} from '../posts/Posts.js';
import {Sidebar} from '../sidebar/Sidebar.js';
import './Home.css';

export const Home = () => {
    return (
        <>
        <Header />
            <div className="blogHome">                
                <Posts />
                <Sidebar />
            </div>
        
        
        </>
    );
}
