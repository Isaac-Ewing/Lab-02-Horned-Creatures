import React from "react";
import ImageItem from "./ImageItem.js";

export default class ImageList extends React.Component {
    render() {
        return (
            <>
                {this.props.images.map(data => <ImageItem url={data.url} key={data.description}/>)}
            </>
        );
    }
}