import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Row, Col, CardBody, Card, FormGroup, Input, Label, Spinner, Button, UncontrolledPopover, PopoverBody } from 'reactstrap';
import { FlexibleWidthXYPlot, XAxis, Crosshair, LineMarkSeries } from 'react-vis';
import GraphHelper from '../helpers/graph_helper'

class GraphCard extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            default: true,
            collection: [],
            crosshairValues: [],
            loading: true
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
            collection: nextProps.props.chartData ? chartData : [],
            loading: false
        })
    }


    render() {

        const collection = this.state.collection;
        console.log('crosshair', this.state.crosshairValues)
        return (
            <Card className='p-2'>
                <CardBody>
                    <Row>
                        <Col>
                            <h3>Your Snapshots</h3>
                        </Col>
                        <Col md={6} >
                            <Button color='primary' className='mr-2' size='small' id='optionsPop'>Options</Button>
                            <Button color='secondary' size='small'>Download .CSV</Button>
                        </Col>
                    </Row>

                    <UncontrolledPopover trigger="legacy" placement="bottom" target="optionsPop">
                        <PopoverBody>
                            <h4>Which graphs to show</h4>
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

                    {
                        this.state.loading ?
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" />
                            </div> :
                            <FlexibleWidthXYPlot
                                xType='time'
                                onMouseLeave={() => this.setState({ crosshairValues: [] })}
                                height={300}>
                                <XAxis />
                                {
                                    collection.map((d, i) => {
                                        return d.visible &&
                                            <LineMarkSeries
                                                key={i}
                                                color={d.color}
                                                onNearestX={(v, { index }) => {
                                                    if (i === 0)
                                                        this.setState({ crosshairValues: collection.map(set => set.data[index]) })
                                                }}
                                                curve={'curveMonotoneX'} animation data={d.data} />
                                    })
                                }
                                <Crosshair values={this.state.crosshairValues} />
                            </FlexibleWidthXYPlot>
                    }
                </CardBody>
            </Card>
        )
    }

}

export default GraphCard;