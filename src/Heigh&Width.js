import React,{useEffect, useState} from 'react';

function HeightWidth(){
    const [windowWidth,setWindowWidth] = useState(window.innerWidth)
    const [windowHeight,setWindowHeight] = useState(window.innerHeight)

    function handleResize(){
        setWindowHeight(window.innerHeight)
        setWindowWidth(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('rezize',handleResize)
    },[])

    return(   <div>
    <p>X:{windowWidth}</p>
    <br></br>
    <p>Y:{windowHeight} </p>
    </div>
    )
}

export default HeightWidth;