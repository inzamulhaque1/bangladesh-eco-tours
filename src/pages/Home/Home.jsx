import React from 'react';
import Slider from './section/Slider';
import ExoticTravelSection from './section/ExoticTravelSection';
import CommunityEcotourism from './section/CommunityEcotourism';
import DiscoverSection from './section/DiscoverSection';

const Home = () => {
    return (
        <div className='font-roboto'>
            <Slider></Slider>
            <ExoticTravelSection></ExoticTravelSection>
            <CommunityEcotourism></CommunityEcotourism>
            <DiscoverSection></DiscoverSection>     
        </div>
    );
};

export default Home;