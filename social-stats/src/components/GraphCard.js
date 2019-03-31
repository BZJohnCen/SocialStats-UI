import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Card } from 'reactstrap';
import { XYPlot, LineSeries } from 'react-vis';
import GraphHelper from '../helpers/graph_helper'

class GraphCard extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            default: true,
        }
    }

    render() {

        console.log('props', this.props.props)
        const collection = this.props.props.chartData ? GraphHelper.convertObjArrToDataset(this.props.props.chartData, 'date') : [];
        return (
            <div>
                <Container>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <h1>test</h1>
                        {
                            collection.map((d, i) => <XYPlot key={i} height={300} width={300}>
                                <LineSeries data={d} />
                            </XYPlot>)
                        }
                    </Card>
                </Container>
            </div>
        )
    }

}

export default GraphCard;