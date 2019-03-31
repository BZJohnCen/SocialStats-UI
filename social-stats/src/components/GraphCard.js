import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Card } from 'reactstrap';
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
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
        console.log('collection', collection)
        return (
            <div className='outer-div'>
                <Container>
                    <Card className='p-2'>
                        <h1>test</h1>
                        {
                            collection.map((d, i) => <XYPlot xType='time' key={i} height={300} width={600}>
                                <VerticalGridLines />
                                <HorizontalGridLines />
                                <XAxis title={d.xTitle} />
                                <YAxis title={d.yTitle} />
                                <LineSeries animation data={d.data} />
                            </XYPlot>)
                        }
                    </Card>
                </Container>
            </div>
        )
    }

}

export default GraphCard;