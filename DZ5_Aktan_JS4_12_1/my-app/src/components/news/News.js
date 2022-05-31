import React from "react";
import classes from "../news/news.module.css";

function News () {
    return (
        <div className={classes.news}>
            <h2 className={classes.h2}>React</h2>
            <p>React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций. React может использоваться для разработки одностраничных и мобильных приложений.</p>
        </div>
    )
}

export default News;