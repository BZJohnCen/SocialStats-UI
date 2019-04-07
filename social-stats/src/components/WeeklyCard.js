import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Row, Col, CardBody, Spinner, Card, ListGroup, ListGroupItem, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import _ from 'lodash'
import moment from 'moment';
import TweetCard from 'react-tweet-embed';

const Tweet = styled.span`
  width: 33.5%;
  padding: 1em;
  transition: all .2s ease-in-out;

  :hover{
    transform: scale(1.1);
  }
`;

class WeeklyCard extends Component {
  constructor(props){
    super(props)

    this.state = {
        dropdownOpen: false,
        weeklyDates: null,
        weeklyData : new Map(),
        selected: null,
        retweetList: [],
        favoriteList: [],
        replyList: [],
        dropDownLabel: ''
    }
    this.toggle = this.toggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  toggle(){
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onSelect(date){
    var week = this.state.weeklyData.get(date)
    console.log({
      retweetList: week.topThreeRetweeted,
      favoriteList: week.topThreeFavorites,
      replyList: week.topThreeReplies
    })

    this.setState({
      dropDownLabel: moment(week.date).format('MM/DD/YYYY'),
      retweetList: week.topThreeRetweeted || [],
      favoriteList: week.topThreeFavorites || [],
      replyList: week.topThreeReplies || []
    })
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps, 'HERE')
    // console.log('nextProps', nextProps.props.weeklyData)
    if(nextProps.props.weeklyData ){
      var incomingWeeklyData = nextProps.props.weeklyData;
      incomingWeeklyData.sort((a,b) => {
        return moment(b.date).unix() - moment(a.date).unix()
      })
      var week = incomingWeeklyData[0]
      this.setState({
        weeklyDates: incomingWeeklyData.map(week => week.date),
        weeklyData: new Map(incomingWeeklyData.map(week => [week.date, week])),
        retweetList: week.topThreeRetweeted,
        favoriteList: week.topThreeFavorites,
        replyList: week.topThreeReplies,
        dropDownLabel: moment(week.date).format('MM/DD/YYYY')
      })
    }
  }

  render() {

    return this.state.weeklyDates ?
      (<Card style={{ height: 'calc(100% - 2em)' }}>
        <CardBody style={{ height: 'inherit' }}>
          <div>
            <div style={{ fontWeight: '200', paddingBottom: '0.3em' }}>Week of:</div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ padding: '0 0 0.5em 0'}}>
              <DropdownToggle caret>
                  {this.state.dropDownLabel}
              </DropdownToggle>
              <DropdownMenu style={{maxHeight: '250px', overflowY: 'scroll'}}>
                  {this.state.weeklyDates.map(date =>
                      <DropdownItem onClick={() => this.onSelect(date)}>{moment(date).format('MM/DD/YYYY')}</DropdownItem>
                  )}
              </DropdownMenu>
            </Dropdown>
            <hr/>
            <div>
              <div style={{ paddingBottom: '1em' }}>
                <h3 style={{ fontWeight: '200' }}>Top 3 Favorited Tweets</h3>
                <div style={{ display: 'flex' }}>
                  {this.state.favoriteList.map(fav =>
                    <Tweet><TweetCard id={fav.tweetId} /></Tweet>
                  )}
                </div>
              </div>
              <hr/>
              <div style={{ paddingBottom: '1em' }}>
                <h3 style={{ fontWeight: '200' }}>Top 3 Retweeted Tweets</h3>
                <div style={{ display: 'flex' }}>
                  {this.state.retweetList.map(rt =>
                    <Tweet><TweetCard id={rt.tweetId} /></Tweet>
                  )}
                </div>
              </div>
              <hr/>
              <div style={{ paddingBottom: '1em' }}>
                <h3 style={{ fontWeight: '200' }}>Top 3 Replied Tweets</h3>
                <div style={{ display: 'flex' }}>
                  {this.state.replyList.map(reply =>
                    <Tweet><TweetCard id={reply.tweetId} /></Tweet>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>)
      : <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" />
  }
}

export default WeeklyCard;
