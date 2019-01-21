import React from 'react'



class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ''}

  };

  handleOnChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render () {

    return (
      <form>
        <input placeholder="Busca entre los usuarios" onChange={this.handleOnChange} />
      </form>
    );

  };

}

export default Header;
