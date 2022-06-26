import headerImage from '../../Image/mainblog.jpg';
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
                <img src={headerImage} alt="header" className="headerImage" />
        </div>
    );
}
 