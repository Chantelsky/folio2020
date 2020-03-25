import React from "react"
import style from "./Landing.module.scss"

const Landing =() =>{
    return(
        <div className={style.landing}>
            <div className={style.about}>
                <h1>Chantel Laver</h1>
                <p>Frontend Web Developer & Designer</p>
            </div>
        </div>
    )
}

export default Landing