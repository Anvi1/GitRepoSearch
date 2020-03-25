import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.handleSearchTextInputChange = this.handleSearchTextInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(event.target.value);
  }

  handleSearchTextInputChange(event) {
    this.props.onSearchTextInput(event.target.value);
  }

  onEnterPress = (event) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      this.props.onSubmit(event.target.value);
    }
  }

  render() {
    return (
      
        <Container>
          <Row>
            <Col sm={9} md={10} lg={9} xl={8}>
              <Form className = 'searchBar'>
                <Form.Group controlId="formRepoSearch">
                  <Form.Label>Search</Form.Label>
                  <Form.Control type="text" placeholder="Enter repo name" value={this.props.searchText} onChange={this.handleSearchTextInputChange} onBlur={this.handleSubmit} onKeyDown={this.onEnterPress}/>
                </Form.Group>
              </Form>
            </Col>
            </Row>
            <Row>
            <Col sm={9} md={10} lg={9} xl={8}>
              <label className = 'resultLabel'>Results</label>
            </Col>
            </Row>
        </Container>
    );
  }
}

export default SearchBar;
