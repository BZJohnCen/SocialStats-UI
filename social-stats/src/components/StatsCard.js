import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class StatsCard extends Component {
  constructor(props) {
    super(props)
    this.state = { default: true }
  }

  render() {
    return (
      <Card className='pt-2' style={{ textAlign: 'center' }}>
        <CardBody>
          <h3>{this.props.props.stat}</h3>
          <p>{this.props.props.title}</p>
        </CardBody>
      </Card>
    )
  }
}

export default StatsCard
