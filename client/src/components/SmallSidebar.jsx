import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { FaTimes } from 'react-icons/fa';
import Logo1 from './Logo1';
import links from '../utils/links'
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
    const {showSidebar, toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className={ showSidebar? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
            <button type='button' className="close-btn" onClick={toggleSidebar}>
                <FaTimes/>
            </button>
            <header>
                <Logo1/>
            </header>
            <NavLinks/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar
