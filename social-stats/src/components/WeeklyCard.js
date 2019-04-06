import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Row, Col, CardBody, Spinner, Card, ListGroup, ListGroupItem, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import _ from 'lodash'
import moment from 'moment';

const Link = styled.a`
  :link{
    text-decoration: none;
    color: inherit;
  }
  color: inherit;
  
`;


class WeeklyCard extends Component {
    constructor(props) {
        
        super(props)
        this.toggle = this.toggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
        
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
    }

    
    toggle() {
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
        
        return this.state.weeklyDates ?(

            <Card>
            <CardBody>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{padding: '0 0 15px 0'}}>
                    <DropdownToggle caret>
                        {this.state.dropDownLabel}
                </DropdownToggle>
                    <DropdownMenu style={{maxHeight: '250px', overflowY: 'scroll'}}>
                        {this.state.weeklyDates.map(date => 
                            <DropdownItem onClick={() => this.onSelect(date)}>{moment(date).format('MM/DD/YYYY')}</DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
                <h3>Top Three Favorites</h3>
                <ol>
                    {this.state.favoriteList.map(fav => <li> <Link target="_blank" href={`https://twitter.com/${fav.name}/status/${fav.tweetId}`}>{fav.text}</Link></li>)}
                </ol>

                <h3>Top Three Retweets</h3>
                <ol>
                    {this.state.retweetList.map(retweet => <li> <Link target="_blank" href={`https://twitter.com/${retweet.name}/status/${retweet.tweetId}`}>{retweet.text}</Link></li>)}
                </ol>

                <h3>Top Three Replies</h3>
                <ol>
                    {this.state.replyList.map(reply => <li> <Link target="_blank" href={`https://twitter.com/${reply.name}/status/${reply.tweetId}`}>{reply.text}</Link></li>)}
                </ol>

            </CardBody>
        </Card>
        ) : <Spinner style={{ width: '5rem', height: '5rem' }} type="grow" />
    }
}

export default WeeklyCard