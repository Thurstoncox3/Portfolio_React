import React from 'react';
import Card from '../components/Card';

import eom from '../images/eom.PNG';
import fitnesstracker from '../images/fitnesstracker.PNG';
import pokebattlesimulator from '../images/pokebattlesimulator.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title:'Essence of Music',
                    subTitle:'Music Application',
                    imgSrc: eom,
                    link: 'https://eom-10-4.herokuapp.com/login',
                    selected: false
                },
                {
                    id:1,
                    title:'Fitness Tracker',
                    subTitle: 'Track Your Progress',
                    imgSrc: fitnesstracker,
                    link: 'https://secret-lake-34794.herokuapp.com/',
                    selected: false
                },
                {
                    id:2,
                    title:'PokeBattle Simulator',
                    subTitle:'Creative Weather Application',
                    imgSrc: pokebattlesimulator,
                    link: 'https://lilyws.github.io/pokemon-battle/index.html',
                    selected: false
                },
            ]
        }
    }
};

handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = item[id].selected ? false : true;
    items.forEach(item => {
        if(item.id !==id){
            item.selected = false;
        }
    });
    this.setState({ items });
};

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
};

render (){
    return(
        <Container fluid={true}>
            <Row className='justify-content-around'>
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    )
};


export default Carousel;






