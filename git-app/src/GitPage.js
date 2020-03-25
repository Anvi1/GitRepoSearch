import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RepoDetails from './RepoDetails';
import UserRepos from './UserRepos';

class GitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRepoVal:'',
      selectedRepoCommitVal:''
    };

    this.selectedRepoData = this.selectedRepoData.bind(this);
    this.selectedRepoCommitData = this.selectedRepoCommitData.bind(this);
  }

  selectedRepoData(idVal){
    this.setState({
      selectedRepoVal: idVal
    })
}

selectedRepoCommitData(commitVal){
  this.setState({
    selectedRepoCommitVal: commitVal
  })
}
  
  render() {
    return (
      <div className="App">
        <Container>
            <Row>
              <Col sm={5} md={4} lg={4} xl={4}>
                <UserRepos top={5} selectedRepo={this.selectedRepoData} repoCommitsData={this.selectedRepoCommitData}/>
              </Col>
              <Col sm={{span:6, offset: 1 }} md={{ span: 7, offset: 1 }} lg={{ span: 7, offset: 1 }} xl={{ span: 7, offset: 1 }}>
                <RepoDetails selectedRepo={this.state.selectedRepoVal} repoCommitsData={this.state.selectedRepoCommitVal}/>
              </Col>
            </Row>
        </Container>
        
        
      </div>
    );
  }
}

export default GitPage;