import React, { Component } from 'react';
import SearchBar from './SearchBar';
import RepoList from './RepoList';
import axios from 'axios';

class UserRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      repos: []

    };

    this.handleSearchTextInput = this.handleSearchTextInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  getRepos(username){
     return axios.get('https://api.github.com/search/repositories?q={'+ username + '}', {
        params: {
          sort: 'pushed',
          direction: this.state.sortDirection
        }
      });
  }

  updateRepos(response) {
    this.setState({
      repos: response.data.items
    })
  }

  handleSearchTextInput(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleSubmit() {
    this.getRepos(this.state.searchText).then(this.updateRepos.bind(this));
  }


  render() {
    return (
      <div>
              <SearchBar 
                searchText={this.state.searchText}
                onSearchTextInput={this.handleSearchTextInput}
                onSubmit={this.handleSubmit}
              />
              <hr className = 'resultHr'/>
            
              <RepoList 
                repos={this.state.repos}
                top={this.props.top}
                props={this.props}
              />
              <hr className = 'resultHr'/>
      </div>
    );
  }
}

export default UserRepos;