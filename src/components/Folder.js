import React, { useState } from "react";

const Folder = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const direction = isOpen ? 'down' : "right";

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return <div style={{ padding: "8px" }}>
        <span onClick={handleClick}>
            <i className="grey folder icon"></i>
            <i className={`caret ${direction} icon`}></i>
            {props.name}
        </span>
        <div style={{ marginLeft: "21px" }}>
            {isOpen ? props.children : null}
        </div>
    </div >;
};

export default Folder;