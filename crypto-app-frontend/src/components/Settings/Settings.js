import image from '../Image/2.jpg'
import {Sidebar} from '../Blog/sidebar/Sidebar';
import './Settings.css';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">
                        Update Your Account
                    </span>
                    <span className="settingsDeleteTitle">
                        Delete Your Account
                    </span>
                </div>
                <form className="settingsForm">
                    <label> Profile Picture </label>
                    <div className="settingsProfilePicture">
                        <img src={image} className="settingsPicture" alt="profile" />
                        <label htmlFor="fileInput">
                            <i className="profileIcon fa-solid fa-user"></i> Click to Change
                        </label>
                        <input type="file" id="fileInput" className='fileInput'/>
                    </div>
                    
                    <label> Username </label>
                    <input type="text" placeholder="Aniket" />
                    
                    <label> Email </label>
                    <input type="email" placeholder="Aniket@gmail.com" />
                    
                    <label> Password </label>
                    <input type="password" />
                    
                    <button className="settingsSubmit"> Update </button>
                    
                </form>
            </div>
            
            <Sidebar />
        </div>  
    );
}
 

export default Settings;