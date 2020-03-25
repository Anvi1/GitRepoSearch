import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoRow from './RepoRow';

class RepoList extends Component {
  

  render() {
    if (!this.props.repos || this.props.repos.length === 0) {
      return null;
    }
    var rows = [];
    this.props.repos.slice(0, this.props.top).forEach(function(repo) {
      
      rows.push(<RepoRow repo={repo} key={repo.name} props={this.props} />);
    },this);

    return (
      <div>
        <ListGroup className="repoList text-left" variant="flush">
          {rows}
        </ListGroup>
      </div>
    );
    
  }
}

export default RepoList;
