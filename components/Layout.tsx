import Navbar from "./Navbar"
import React from 'react'
type Props={
  children:React.ReactNode
}

const Layout : React.FC<Props>=({children}) => {
  return (
    <div>
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  );
};

export default Layout;