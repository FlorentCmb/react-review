import React from 'react'
import News from '../components/News'
import Describe from '../components/Describe'

const HomePage = () => {
    return (
        <div className="HomePage">
            {/*Main page*/}

            {/*news*/}
            <News />

            {/*Description*/}
            <Describe />
        </div>
    )
}

export default HomePage
