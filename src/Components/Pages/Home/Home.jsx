import React from 'react'
import { Banner } from '../../Layout/Banner/Banner'
import { Projects } from '../../Layout/Projects/Projects'
import './Home.css'

const Home = () => {
    return (
        <main>
            <Banner />
            <Projects />
        </main>
    )
}

export default Home