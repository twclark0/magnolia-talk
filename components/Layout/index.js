import React from 'react'

import Footer from '../footer'

const Layout = ({ children, ...props }) => (
  <div>
    {children}
    <Footer />
  </div>
)

export default Layout
