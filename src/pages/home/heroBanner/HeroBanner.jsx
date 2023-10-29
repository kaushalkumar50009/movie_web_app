import React, { useState } from 'react'
import "./style.scss"
import { useNavigate } from "react-router-dom"

const HeroBanner = () => {

    const [background, setBackground] = useState("")
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const searchQueryHandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`)
        }
    }

    return (
        <div className='heroBanner'>
            <div className="wrapper">
                <div className="heroBannerContent">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Discover movies</span>
                    <div className="searchInput">
                        <input onChange={(e) => { setQuery(e.target.value) }} onKeyUp={searchQueryHandler} type="text" name="" id="" placeholder='Search for movie show...' />

                        <button>Search</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroBanner