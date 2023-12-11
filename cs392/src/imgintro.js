import React, { useEffect } from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import "./imgintro.css"


function ImgIntro(){
    useEffect(() => {

    }, []); // empty array as dependency, only do once

    return (
        <div>
            <Helmet>
                <title>My Tourist Attractions</title>
                <script src="showimages.js" type="text/javascript"></script>
            </Helmet>
            <div class="container-fluid">
                <div class="row">
                    <div id="attractionList" class="col-md-4">
                    </div>
                    <div id="attractionDetails" class="col-md-8">
                   </div>
                </div>
            </div>
            <script src="/showimages.js"></script>
            <Link to="/index">
                <div id="homeIcon" >🏠
                </div>
            </Link>
        </div>
    );
}
export default ImgIntro;
