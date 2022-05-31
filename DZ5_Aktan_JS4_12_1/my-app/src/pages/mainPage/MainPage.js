import React,{useState} from "react";
import classes from "./mainPage.module.css";
import News from "../../components/news/News";

function MainPage () {
    const [news,newsState] = useState("");

    function openNews (e) {
        e.preventDefault();
        newsState(News)
    }
    return(
        <div>
            {news}
            <div className={classes.countWrapper}>
                <button onClick={openNews}>getNews</button>
            </div>
        </div>
    )
}

export default MainPage;