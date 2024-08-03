// import React from 'react'
// import MessageContext from './context/MessageContext'
// import { useContext } from 'react';

// const App = () => {

//   const message = "Hello world";
//   return (
//     <div>

//       <MessageContext.Provider value={message}>
//              <ComponentA />
//       </MessageContext.Provider>
//       </div>
//   )
// }

// function ComponentA(){
//   return (
//      <ComponentB />
//   );
// }


// function ComponentB(){

//   const message = useContext(MessageContext)
//   return (
//      <div>
//       Message: {message}
//      </div>
//   );
// }

// export default App;

import React from 'react';
import UserInfoContext from './context/UserInfoContext';
import { BlogPage } from './components/BlogPage';

 const App = () => {

  const userInfo = {username: "Admin", isAdmin: true}
  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage />
    </UserInfoContext.Provider>
  );
}

export default App;