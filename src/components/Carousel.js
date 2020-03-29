import React from "react";
import { CarouselIndicators } from "reactstrap";
import Card from './Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import weather from '../assets/images/weather.png';
import calendar from '../assets/images/calendar.png';
import burger from '../assets/images/burger.png';
import weights from '../assets/images/weights.jpg';
import food from '../assets/images/food.png';
import budget from '../assets/images/budget.png';


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Weather',
                    subTitle: 'Check the Weather',
                    imgSrc: weather,
                    link: 'https://philipipara.github.io/Weather/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Pre-Game',
                    subTitle: 'Restaurant and Event Locator',
                    imgSrc: food,
                    link: 'https://shwangbo80.github.io/group_project_1/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Daily Calendar',
                    subTitle: 'Track Daily Events',
                    imgSrc: calendar,
                    link: 'https://github.com/philipipara/DailyPlanner',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Workout App',
                    subTitle: 'Track Daily Workouts',
                    imgSrc: weights,
                    link: 'https://github.com/philipipara/TrackingFitness',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Budget Tracker',
                    subTitle: 'Track Montly Budget',
                    imgSrc: budget,
                    link: 'https://github.com/philipipara/Budget-Project',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Eat-Da-Burger',
                    subTitle: 'HandleBar App',
                    imgSrc: burger,
                    link: 'https://github.com/philipipara/Burger',
                    selected: false
                },
            ]


        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render () {
        return(
            <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
        );
    }





}




export default Carousel;