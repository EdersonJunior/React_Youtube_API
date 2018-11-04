import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''}
    }

    render() {
        return (
            <div>
               <div className="input-group add-on">
                    <input onChange={ event => {this.search(event.target.value)} } className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text" />
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                    </div>
                </div>
            </div>
        );
    }

    search(term) {
        this.setState({term});
        this.props.searchTerm(term)
    }
}

export default SearchBar;