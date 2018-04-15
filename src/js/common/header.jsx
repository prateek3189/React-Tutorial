import React from "react";
import PropTypes from "prop-types";


class Header extends React.Component {
    render() {
        return <header>
                    <h1>Hello {this.props.name} </h1>
                </header>;
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired
}

module.exports = Header;
