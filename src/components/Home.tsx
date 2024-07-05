import React from 'react'
import Banner from './Banner'
import Details from './Details'
import ImageSec from './ImageSec'
import Benefits from './Benefits'
import ProcessTimeLine from './ProcessTimeLine'
import Faq from './Faq'
import BrowseSelection from './BrowseSelection'
import Blog from './Blog'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <div className="overflow-x-hidden">
                <Banner />
                <Details />
                <ImageSec />
                <Benefits />
                <ProcessTimeLine />
                <Faq />
                <BrowseSelection />
                <Blog />
                <Contact />
            </div>
        </div>
    )
}

export default Home