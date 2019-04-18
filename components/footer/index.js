import React from 'react'
import './styles.css'

const styles = {
  position: 'absolute',
    bottom: '0',
    right: '25px',
    fontSize: '30px',
    color: '#f0f'
}

const Footer = () => (
  <div>
    <p style={styles}>@iamtylerwclark</p>
  </div>
)

export default Footer
