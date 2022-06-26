import image from '../../Image/2.jpg';
import './Write.css';

export const Write = () => {
    return (
        <div className="write">
            <img src={image} alt="write" className="writeImage" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>                    
                    </label>
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder='Enter Title Here ...' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Write your content here ...' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit"> Publish </button>
            </form>
        </div>
    );
}