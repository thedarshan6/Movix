import React from 'react'
import "./style.scss"
import Cast from "../details/cast/Cast"
import DetailsBanner from './detailBanner/DetailsBanner'
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import VideosSection from './videosSection/VideosSections';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';


function Details() {

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data : credits, loading : creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  // console.log(mediaType);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details