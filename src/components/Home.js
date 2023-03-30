// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to our App</h1>
//       <p>This is the home page.</p>
//     </div>
//   );
// };

// export default Home;
import React from 'react';

const Home = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

  const styles = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '500vh'

  };

  return (
    <div style={styles}>
      <h1>Welcome to our App</h1>
      <p>This is the home page.</p>
    </div>
  );
};

export default Home;
