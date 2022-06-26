import testImage from '../../Image/2.jpg'
import './Sidebar.css';

export const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="sideBar">
                <div className="sideBarItem">
                    <span className="sideBarTitle">
                        About Me
                    </span>
                    <img className = "sideBarImage" src={testImage} alt= "sideBar"/>
                    <p className = "sideBarDesc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem quae doloremque explicabo dolores ex itaque ea quis necessitatibus earum eaque, voluptas assumenda nulla! Explicabo modi saepe amet, magnam tenetur voluptatem maiores dolores accusantium aliquam. Dolorem, placeat similique! Tempora nostrum quis earum asperiores eveniet, adipisci impedit vero maiores facilis repellat possimus libero placeat cupiditate quo nobis sunt magni consequuntur soluta? Asperiores fugit error et pariatur rerum esse eveniet, sunt officia eaque. Beatae facilis tenetur placeat hic soluta quisquam, cupiditate dolore, odio voluptatum nobis ex ipsum molestias aperiam voluptas explicabo ad iusto non! Quod, maxime. Magnam exercitationem aliquam nulla aut quasi?
                    </p>
                     
                </div>
                <div className="sideBarItem">
                    <span className="sideBarTitle">
                        Categories
                    </span>
                    <ul className="sidebarList">
                        <li className="sideBarListItem"> Cryptos </li>
                        <li className="sideBarListItem"> Block-Chain </li>
                        <li className="sideBarListItem"> Web3 </li>
                        <li className="sideBarListItem"> NFTs </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}