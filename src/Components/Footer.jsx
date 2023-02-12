import React from 'react'
import PropTypes from 'prop-types';

const Footer = ({msg,children}) => {
    // console.log(props)
  return (
    <div>
        <h1>{msg}</h1>
        <h2>{children}</h2>
    </div>
  )
}
Footer.defaultProps={
    msg:"hello from default props"
}
Footer.propTypes = {
    children: PropTypes.string
  };
export default Footer