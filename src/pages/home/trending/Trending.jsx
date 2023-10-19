import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carosuel from '../../../components/carousel/Carosuel';
import useFetch from '../../../Hooks/UseFetch';


const Trending = () => {

    const [endpoint , setEndpoint] = useState('day');

    const {data , loading} = useFetch(`/trending/movie/${endpoint}`)

    console.log(data)
    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
        <Carosuel data = {data?.results} loading = {loading} />
        </div>
    )
    
}

export default Trending