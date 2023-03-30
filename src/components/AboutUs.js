// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>My name is Bharti Zade.  completed my Bachelor of Engineering in 2022,
//       and I have knowledge of React, HTML, and CSS. 
//       I aspire to become a software developer.</p>
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>My name is Bharti Zade. <br/>I completed my Bachelor of Engineering in 2022,<br/>
      and I have knowledge of React, HTML, and CSS.<br/> 
      I aspire to become a software developer.</p>
      <div style={{display: "flex",justifyContent:'space-evenly' }}>
        <div style={{background: "blue", padding: "10px"}}>
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div style={{background: "blue", padding: "10px"}}>
          <h3>Hobbies</h3>
          <p>Playing cricket<br/>cooking<br/>reading<br/>listning songs</p>
        </div>
        <div style={{background: "blue", padding: "10px"}}>
          <h3>Learning</h3>
          <p>React is a popular open-source JavaScript library for building user interfaces or UI components.<br/> It was developed by Facebook and is now maintained by a community of developers.<br/> React is designed to be scalable and efficient, <br/>allowing developers to create complex and interactive UIs with ease.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
