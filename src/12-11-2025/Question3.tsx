import type React from "react";

function Question3(){
    const handleClick= ( event : React.MouseEvent<HTMLButtonElement>) => {
            alert("Clicked");
    }


return <button onClick={handleClick}>Clicked me</button>
}

export default Question3;