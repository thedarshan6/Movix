import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carosuel from '../../../components/carousel/Carosuel';
import useFetch from '../../../Hooks/useFetch';


const Popular = () => {

    const [endpoint , setEndpoint] = useState('movie');

    const {data , loading} = useFetch(`/${endpoint}/popular`)


    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">What's Popular</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
        <Carosuel data = {data?.results} loading = {loading} endpoint={endpoint}/>
        </div>
    )
}

export default Popular