import React from 'react';
import {Helmet} from "react-helmet-async";
import {Constants} from "./Constants";

const SEO = ({title}) => {
    return (
        <Helmet prioritizeSeoTags>
            <title>{title !== "" ? `${title} :: ` : ""}{Constants.COMPANY.NAME}</title>
        </Helmet>
    );
};

SEO.defaultProps = {
    title: ""
}

export default SEO;
