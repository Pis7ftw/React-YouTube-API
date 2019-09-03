import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    // Prevent form from submitting if 'enter' is pressed
    event.preventDefault();

    // Calling the APP callback and passing the term.
    this.props.onFormSubmit(this.state.term);
  };

  // ref={input => input && input.focus()} will refocus
  // to the input after render.
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              autoFocus
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
