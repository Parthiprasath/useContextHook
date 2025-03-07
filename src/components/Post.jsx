import React from 'react';
import { Comment } from './Comment';
import { useContext } from 'react';
import UserInfoContext from '../context/UserInfoContext';


export const Post = ({username, isAdmin}) => {
 
  //const {username, isAdmin} = useContext(UserInfoContext)
   
  return (
    <div>

        {isAdmin && <button>Delete</button>}
        <h2>Example Post Title</h2>
        <p>This is an example post content.</p>
        <Comment username={username} isAdmin={isAdmin}/>
    </div>
  )
}
