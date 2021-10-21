import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hey, my name is Thurston Cox. I'm a full stack developer familiar with Express, Node JS, MongoDB, React, JavaScript, SQL, BootStrap, and still eager to learn!</p>
                <p>In the past I been on the sales side of Software, in feilds like FinTech and Health Care. Now, I'm hoping to develope with a team that can help me develope (see what I did there). </p>
            </Content>
        </div>
    )
};



export default AboutPage;