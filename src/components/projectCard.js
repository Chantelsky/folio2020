import React, { useState } from "react"
import Img from "gatsby-image"


const ProjectCard = ({path, title}) => {
    const [isShown, setIsShown] = useState(false);

    return(
        <div className="card">
            <div 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={()=> setIsShown(false)}>
                    <Img fixed={path} />
                    {isShown && (
                        <div>
                            {title}
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ProjectCard