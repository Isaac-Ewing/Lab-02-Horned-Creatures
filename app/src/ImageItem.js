import React from "react";

export default class ImageItem extends React.Component {
    render() {
        return (
            <>
                <img src={this.props.url} alt="" width="200px" height="200px"></img>
            </>
        );
    }
}