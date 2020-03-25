import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//This Component is a child Component of Repo Details Component
class RepoHeader extends Component {


  render() {
    if (!this.props || this.props.props.selectedRepo === '') {
      return null;
    }
    return (
        <Container className='repoDetContainer'>
          <Row>
            <Col xs={2} sm={4} md={3} lg={3} xl={2}>
            <img src={this.props.props.selectedRepo.owner.avatar_url} className="App-logo-details" alt="logo" />
            </Col>
            <Col xs={10} sm={8} md={9} lg={9} xl={10}>
            <label className='repoNameLbl'>{this.props.props.selectedRepo.name}</label><br />
            <label className='repoDescLbl'>{this.props.props.selectedRepo.description}</label>
            </Col>
          </Row>
          <Row>
            <Col sm={9} md={10} lg={9} xl={8}>
              <label className = 'resultLabel'>Latest Commits</label>
            </Col>
            </Row>
            <hr className = 'resultHr'/>
      </Container>
      
    );
    
  }
}

export default RepoHeader;