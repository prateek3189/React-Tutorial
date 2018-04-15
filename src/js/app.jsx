import React from "react";
import ReactDOM from "react-dom";

// Common files
import Header from "./common/header.jsx";
import Footer from "./common/footer.jsx";

// Content file
import Content from "./content.jsx";

const details = {
    name: "John Mathew",
    age: 35,
    city: "Colarado"
}

// Component
class App extends React.Component {
    render() {
        return <div className="main">
            <Header name="john" />
            <Content userInfo={details}/>
            <Footer />
        </div>;
    }
}

// Rander it through react-dom
ReactDOM.render(
    <App />,
    document.getElementById('content')
);
