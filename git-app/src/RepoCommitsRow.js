import React, {Component} from 'react';
import { ListGroupItem, Container, Row, Col } from 'react-bootstrap';

//This Component is a child Component of RepoCommitList Component
class RepoCommitsRow extends Component {


  render() {
    
    return (
      <ListGroupItem >
        <Container className='repoDetContainer'>
          <Row>
            <Col xs={4} sm={5} md={5} lg={5} xl={4}>
               <label className='repoCommitLbl'>{this.props.repo.commit.committer.name}</label><br />
               <label className='repoCommitLbl'>{this.props.repo.commit.committer.date}</label>
            </Col>
            <Col xs={8} sm={7} md={7} lg={7} xl={8}>
               <label className='repoCommitMsg'>{this.props.repo.commit.message}</label><br />
               <a href={this.props.repo.html_url}>open in github</a>
            </Col>
          </Row>
      </Container>
      </ListGroupItem>
      
    );
    
  }
}


export default RepoCommitsRow;