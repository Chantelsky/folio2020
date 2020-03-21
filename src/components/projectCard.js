import React, { useState } from "react"
import Img from "gatsby-image"


const ProjectCard = ({path, title}) => {
    const [isShown, setIsShown] = useState(false);

    return(
        <div className="card">
            <div 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}>
                    {isShown && (
                        <div>
                            <p>{title}</p>
                        </div>
                    )}
                    <Img fixed={path} />
            </div>
        </div>
    )
}

export default ProjectCard