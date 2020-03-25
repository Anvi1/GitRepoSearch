import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoCommitsRow from './RepoCommitsRow';

//This Component is a child Component of RepoDetails Component

class RepoCommitList extends Component {

  render() {
    if(!this.props.props.repoCommitsData || this.props.props.repoCommitsData.length === 0){
      return null;
    }
    
    var rows = [];
    this.props.props.repoCommitsData.forEach(function(repo) { 
      rows.push(<RepoCommitsRow repo={repo} key={repo.index} props={this.props}/>);
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

export default RepoCommitList;
