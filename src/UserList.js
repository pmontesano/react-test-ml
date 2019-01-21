import React from 'react';
import UserCard from './UserCard';

class UserList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {searchTerm: ''}

  }

  handleOnChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    return (
        <div>
          {this.props.users && this.props.users
            .filter(user =>
              user.name
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase())
            )
            .map(user => <UserCard key={user.id} {...user} /> )}
        </div>
      );
    }
}



export default UserList;
