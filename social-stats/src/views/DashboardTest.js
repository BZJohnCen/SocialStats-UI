import React, { Component } from 'react';
import GraphCard from '../components/GraphCard';
import WeeklyCard from '../components/WeeklyCard';
import StatsCard from '../components/StatsCard';
import { Container, Row, Col } from 'reactstrap';
import SnapshotHelper from '../helpers/snapshot_helper'
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DashboardTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      default: true,
      graphCardData: null,
      statsCardData: [
        {
            stat: 68,
            title: '# favs'
        },
        {
            stat: 32,
            title: '# retweets'
        },
        {
            stat: 34,
            title: '# replies'
        },
        {
            stat: 5,
            title: 'new posts'
        },
        {
            stat: 32,
            title: '# mentions'
        },
        {
            stat: 300,
            title: 'total followers'
        },
      ]
    }
  }

  componentDidMount() {
    const uid = localStorage.getItem("userId")
    if (uid){
      SnapshotHelper.getWeeklySnapshots(uid)
        .then(res =>{
          console.log(res, 'this is res')
          this.setState({ weeklySnapData: res.weeklySnaps})
        })
      SnapshotHelper.getDailySnapshots(uid)
        .then(res => {
            this.setState({ graphCardData: res.response })
        })
    }
  }

  render() {
    return (
      <div className='dash-container'>
        <Container>
          <Row className='mb-3'>
            {this.state.statsCardData.map((s, i) =>
              <Col md={2} xs={12}>
                <StatsCard props={s} />
              </Col>
            )}
          </Row>
          <Row className='mb-3'>
            <Col md={12} xs={12}>
              <GraphCard props={{ chartData: this.state.graphCardData }}></GraphCard>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <WeeklyCard props={{weeklyData: this.state.weeklySnapData}}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default DashboardTest;
