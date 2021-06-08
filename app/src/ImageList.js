import React from "react";

export default class ImageList extends React.Component {
    render() {
        return (
            <>
                {this.props.data.map(data => <img src={data.url} alt=""></img>)}
            </>
        );
    }
}