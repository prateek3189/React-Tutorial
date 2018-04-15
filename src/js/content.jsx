import React from "react";

class Content extends React.Component {
    render() {
        const { userInfo } = this.props;
        return <section>
            <table border="1">
                <tr>
                    <td>Name</td><td>Age</td><td>City</td>
                </tr>
                <tr>
                    <td>{userInfo.name}</td>
                    <td>{userInfo.age}</td>
                    <td>{userInfo.city}</td>
                </tr>
            </table>
        </section>;
    }
}

module.exports = Content;
