import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Container, Row, Col, CardBody, Card, FormGroup, Input, Label, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import { FlexibleWidthXYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import GraphHelper from '../helpers/graph_helper'

class GraphCard extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            default: true,
            collection: []
        }
    }

    changeVisibleGraphs = (value, index) => {
        const prevCollection = this.state.collection;
        prevCollection[index].visible = value
        this.setState({
            collection: prevCollection
        })
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps)
        const chartData = GraphHelper.convertObjArrToDataset(nextProps.props.chartData, 'date');
        this.setState({
            collection: nextProps.props.chartData ? chartData : []
        })
    }


    render() {

        const collection = this.state.collection;
        console.log('collection', collection)
        return (
            <Card className='p-2'>
                <CardBody>
                    <Row>
                        <Col>
                            <h3>Your Snapshots</h3>
                        </Col>
                        <Col md={6} >
                            <Button color='primary' className='mr-1' size='small' id='optionsPop'>Options</Button>
                            <Button color='secondary' size='small'>Download .CSV</Button>
                        </Col>
                    </Row>

                    <UncontrolledPopover trigger="legacy" placement="bottom" target="optionsPop">
                        <PopoverHeader>Which graphs to show</PopoverHeader>
                        <PopoverBody>
                            {
                                collection.map((d, i) =>
                                    <FormGroup check>
                                        <Label check>
                                            <Input defaultChecked={d.visible} onClick={e => this.changeVisibleGraphs(e.target.checked, i)} type="checkbox" />{' ' + d.yTitle}
                                        </Label>
                                    </FormGroup>
                                )
                            }
                        </PopoverBody>
                    </UncontrolledPopover>

                    <FlexibleWidthXYPlot xType='time' height={300}>
                        <XAxis />
                        {
                            collection.map((d, i) => {
                                return d.visible && <LineSeries key={i} animation data={d.data} />
                            })
                        }
                    </FlexibleWidthXYPlot>

                </CardBody>
            </Card>
        )
    }

}

export default GraphCard;