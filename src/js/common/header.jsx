import React from "react";

class Header extends React.Component {
    render() {
        return <header>
                    <h1>Hello {this.props.name} </h1>
                </header>;
    }
}

module.exports = Header;
