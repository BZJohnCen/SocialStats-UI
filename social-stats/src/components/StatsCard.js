import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';

class StatsCard extends Component<props> {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Card style={{ textAlign: 'center' }}>
                <CardBody>
                    <h3>{this.props.props.stat}</h3>
                    <p>{this.props.props.title}</p>
                </CardBody>
            </Card>
        )
    }
}

export default StatsCard