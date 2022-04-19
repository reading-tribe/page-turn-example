import "./PageFlip.css";
import HTMLFlipBook from 'react-pageflip';

const page = (url) => {
    return (
        <div className="demoPage">
            <img width={600} height={800} src={url}/>
        </div>
    )
}

const urls = [
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_05.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_06.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_07.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_08.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_09.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_10.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_11.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_12.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_13.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_14.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_15.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_16.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_17.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_18.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_19.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_20.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_21.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_22.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_23.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_24.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_25.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_26.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_27.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_28.jpg",
    "https://d29v32klp19rv5.cloudfront.net/a-beautiful-day_french_interior_20200602_Seite_29.jpg",
]

const PageFlip = () => {
    return (
        <div className="demo-container">
            <HTMLFlipBook width={600} height={800}>
                <div></div>
                {
                    urls.map(url => page(url))
                }
            </HTMLFlipBook>
        </div>
    )
}

export default PageFlip