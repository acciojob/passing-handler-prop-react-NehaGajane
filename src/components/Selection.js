import React, {useState} from 'react';

const Selection = ({applyColor}) => {
    const [bgColor, setbgColor] = useState("");

    const changeColor = () => {
        applyColor((background) => {
            setbgColor(background);
        });
    }

    return (
        <div style={{backgroundColor: bgColor.background, width: 200, height: 200, border: "1px solid gray"}} onClick={changeColor}>
            <p>Selection</p>
        </div>
    )
}