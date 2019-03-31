import React, { Component } from 'react';
import GraphCard from '../components/GraphCard';
import { Container, Row, Col } from 'reactstrap';

class DashboardTest extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            default: true,
            fetchRes: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/test/snapshots', {
            method: 'GET',
            'Content-Type': 'application/json'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({ fetchRes: res.response })
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={6} xs={12}>
                            <GraphCard props={{ chartData: this.state.fetchRes }}></GraphCard>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DashboardTest;