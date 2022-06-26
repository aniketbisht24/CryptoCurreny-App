import image from "../../Image/2.jpg"
import './SinglePost.css'

export const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={image} alt="singlePost" className="singlePostImage" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEditAndDelete">
                        <i class="singlePostIcon fa-solid fa-pen-to-square"></i>   
                        <i class="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor"> Author: <b> Aniket </b> </span>
                    <span className="singlePostDate"> 1 hour ago </span>
                </div>
                <p className="singlePostDescription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo accusamus sit sed veritatis, consequuntur fuga at dolor impedit asperiores recusandae delectus magni, quibusdam numquam dicta repudiandae magnam! Suscipit accusantium fugit, officia deserunt ipsam officiis obcaecati quo praesentium minima. Possimus nulla tempora sequi ad? Hic illo doloribus quisquam fugiat magni dolore consequatur illum et praesentium distinctio tenetur modi tempore, quis quo eaque quae architecto nisi fugit ipsam voluptatibus unde, maiores velit! Fugit illum recusandae omnis odio repudiandae incidunt quis culpa, facilis officiis illo natus animi, repellat nisi laborum itaque. Repudiandae eveniet laboriosam odit nisi delectus vitae ab numquam blanditiis aperiam officia tempora modi at pariatur nostrum a quaerat maiores consequatur hic quo saepe ad eaque distinctio, dolore esse? Aperiam ex repudiandae provident illo, accusantium corrupti! Fugit cum illum architecto maiores quo, odit numquam perferendis tempore ex voluptatem ipsam deserunt officiis excepturi sit eveniet iure earum ratione corrupti inventore labore suscipit totam? Debitis quas quidem sequi, iusto amet voluptatibus. Maiores doloremque, ad maxime quisquam nesciunt sunt deserunt asperiores tenetur temporibus, est ipsam sint soluta officiis ducimus? Sit cumque nesciunt harum veniam officiis expedita dolor, sint aliquam quam deserunt suscipit culpa, recusandae reprehenderit assumenda laborum quidem consectetur quis provident necessitatibus unde, labore voluptates?
                </p>
            </div>
        </div>
    );
}
 