import React from "react";

function ImageMed(props) {
    const style = {
        width: "150px",
    };
    return <img style={style} src={props.url} alt={props.altText} />;
}

export default ImageMed;
