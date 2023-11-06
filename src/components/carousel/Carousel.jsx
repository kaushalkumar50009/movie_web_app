import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";

const Carousel = ({ data, loading }) => {
    const navigate = useNavigate();
    const carouselContainer = useRef(null);
    const { url } = useSelector((state) => state.home)

    const navigation = (dir) => {

    }

    return (

        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill className="carouselLeftNav arrow" onClick={() => navigate("left")} />

                <BsFillArrowRightCircleFill className="carouselRighttNav arrow" onClick={() => navigate("right")} />

                {
                    !loading ? (
                        <div className="carouselItems">
                            {
                                data?.map((item) => {
                                    const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback
                                    return (
                                        <div className="carouselItem" key={item.id} >
                                            <div className="posterBlock">
                                                <Img src={posterUrl} />
                                            </div>
                                            <div className="textBlock">
                                                <span className="title">
                                                    {item.title || item.name}
                                                </span>
                                                <span className="date">
                                                    {dayjs(item.release_date).format("MMM D, YYYY")}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (
                        <span> loading..... </span>
                    )
                }
            </ContentWrapper>
        </div>
    )
}

export default Carousel