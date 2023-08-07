import React from "react"

function Links(prop){
    return(
        <div>
            <h3>Links</h3>
            <a href={prop.github}>{prop.github}</a>
            <a href={prop.linkedin}>{prop.linkedin}</a>
        </div>
    )
}

export default Links