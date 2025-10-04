import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const MainLayout = () => {
    return (
        <div>
            <ScrollToTop />
            <Navbar></Navbar>
            <div className='mt-10 md:mt-0 font-ubuntu'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;