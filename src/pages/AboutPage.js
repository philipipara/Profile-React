import React from 'react';

import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
              <p>
              
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod, velit sed volutpat dapibus, turpis nisl facilisis lectus, ac aliquet ipsum est sit amet ipsum. Quisque suscipit quam ac arcu auctor, rutrum scelerisque leo egestas. Nulla vel est quis nisi laoreet feugiat. Sed vitae auctor ex. Fusce id interdum neque, pulvinar cursus magna. Suspendisse congue tortor a turpis laoreet, et lacinia arcu lacinia. In hac habitasse platea dictumst. Nam sed ligula sit amet turpis congue malesuada. Nulla facilisi. Aenean lacus ante, ullamcorper eu lacinia et, pharetra vitae turpis. Maecenas at eleifend erat. Nam nec ultricies dui. Morbi posuere mattis varius. In ac purus sem. Praesent venenatis tortor vel congue tempus.

              </p>

              <p></p>

              <p>You can check out my resume here <a class="resume" href= "https://philipipara.github.io/Updated-Resume/Assets/pdf.pdf" target="_blank"><i class="fas fa-file"></i></a></p>
            </Content>
        </div>
    );

}

export default AboutPage;