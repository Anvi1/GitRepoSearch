import React, {Component} from 'react';
import RepoHeader from './RepoHeader';
import RepoCommitList from './RepoCommitList';


//This Component is a child Component of GitPage Component
class RepoDetails extends Component {

  render() {
    
    return(
      <div>
        <RepoHeader props={this.props}/>


        <RepoCommitList props={this.props}/>
      </div>
    );
    
    
    
  }
}

export default RepoDetails;