import React from "react";
import {languages} from "../apis"

class SearchBar extends React.Component {
    state = { term: '', lang: [] };

    componentDidMount = async () => {
      const lang = await languages();
      this.setState({lang})
    }

    onInputChange= (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);        
    };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit= {this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <select onChange = {this.props.handleSelect}>
              {this.state.lang.map(l => {
                if(l.code === 'en') {
                  return <option key={l.code} value={l.code} selected>{l.name}</option>
                } else {
                  return <option key={l.code} value={l.code}>{l.name}</option>
                }
              })}
            </select>
            <input 
            type="text" 
            value = {this.state.term}
            onChange= {this.onInputChange}
             />
          </div>
        </form>
      </div>
    ); 
  }
}

export default SearchBar;
