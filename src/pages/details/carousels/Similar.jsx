import React from "react";


import useFetch from "../../../Hooks/UseFetch";
import Carosuel from "../../../components/carousel/Carosuel";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carosuel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;
