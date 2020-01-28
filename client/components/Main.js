import React from 'react';
import { Link } from 'react-router';

const Main = props => {
  return(
    <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
          {props.children}
        </h1>
      </div>
  )
}



export default Main;
