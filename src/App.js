import { Component } from "react";

import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";

import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            cats: [],
            searchField: "",
        };

        // this.handleChange = this.handleChange.bind(this);  don't need to use this if using arrow functions
    }

    componentDidMount() {
        // calls when app renders after a change, maybe?
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ cats: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
        console.log(this.state.searchField);
    };

    render() {
        const { cats, searchField } = this.state;
        const filteredCats = cats.filter((cat) =>
            cat.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <div className="App">
                <h1>Cats</h1>
                <SearchBox
                    placeHolder="search cats"
                    onSearchChange={this.onSearchChange}
                />
                <CardList cats={filteredCats} />
            </div>
        );
    }
}

export default App;
