import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/usefetch'
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {

    const [endpoint, setEndPoint] = useState("movie")
    const { data, loading } = useFetch(`/${endpoint}/popular`)
    // const { data, loading } = useFetch(`/trending/all/${endpoint}`)

    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv")
    }

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">
                    What's Popular
                </span>
                <SwitchTabs data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    )
}

export default Popular