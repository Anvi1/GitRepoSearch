import React, { Component } from 'react';
import { ListGroupItem, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
//import TimeAgo from 'react-timeago';

class RepoRow extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      repoData: [],
      commitData:[]
    };

  }

  getRepoCommitDetails(selectedData) {
    var val = selectedData.full_name;
    var id = selectedData.id;
    axios.get('https://api.github.com/repos/' + val + '/commits').then(response => {
      this.setState({repoData: response.data});
      var data = [];
      var count = 0;
      //data.id= id;
      this.state.repoData.slice(0, 5).forEach(function(repo) {
        repo.id=id;
        count = count + 1;
        repo.index=count;
        data.push(repo);
      });
      this.setState({commitData: data});
      this.props.props.props.repoCommitsData(this.state.commitData);
      this.props.props.props.selectedRepo(selectedData);
    })
  };

  handleRepoClick (selectedData) {
    this.getRepoCommitDetails(selectedData);
 }
  
  render() {
    return (
      <ListGroupItem header={this.props.repo.name} onClick={(selectedData) => this.handleRepoClick(this.props.repo)}>
        <Container>
          <Row className='repoRow'>
            <Col xs={2} sm={4} md={5} lg={4} xl={4}>
            <img src={this.props.repo.owner.avatar_url} className="App-logo" alt="logo" />
            </Col>
            <Col xs={10} sm={8} md={7} lg={8} xl={8}>
            <label className='repoRowLbl'>{this.props.repo.full_name}</label><br />
            <label className='repoRowDescLbl'>{this.props.repo.description}</label>
            </Col>
          </Row>
      </Container>
        
        
        
        {/* <span className="small">Updated <TimeAgo date={this.props.repo.pushed_at} /></span> */}
      </ListGroupItem>
    );
  }
}

export default RepoRow;
