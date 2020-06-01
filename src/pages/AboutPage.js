import React from 'react';

import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
              <p>
              
              When I have to describe myself the first thing that comes to mind is avid sports fan. Most of my time is dedicated to sports whether it is watching, playing, talking about it, reading, or playing sport video games.
               Other than that I have a passion for coding. One of my favorite parts of coding is to see how many ways the same function can be wrote.  I find coding very rewarding, especially when you struggle to implement some code and finally get it to work it's like a small celebration of scoring a goal.

              </p>

              <p></p>

              <p>You can check out my resume here <a class="resume" href= "https://philipipara.github.io/Updated-Resume/Assets/pdf.pdf" target="_blank"><i class="fas fa-file"></i></a></p>
            </Content>
        </div>
    );

}

export default AboutPage;