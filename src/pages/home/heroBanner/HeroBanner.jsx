import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate } from "react-router-dom"
import useFetch from '../../../hooks/usefetch'
import { useSelector } from "react-redux"
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


const HeroBanner = () => {

    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const { url } = useSelector((state) => state.home)
    const { data, loading } = useFetch("/movie/upcoming")

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    }, [data])

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>
            {
                !loading && <div className="backdrop-img">
                    <Img src={background} />
                </div>
            }

            <div className="opacity_layer"></div>

            <ContentWrapper>

                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Discover movies</span>
                    <div className="searchInput">
                        <input onChange={(e) => { setQuery(e.target.value) }} onKeyUp={searchQueryHandler} type="text" name="" id="" placeholder='Search for movie show...' />

                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>

        </div>
    )
}

export default HeroBanner