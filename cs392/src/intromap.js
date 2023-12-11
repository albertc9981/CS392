import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import  "./intromap.css"

function IntroMap(){

    return (
        <div>
            <Helmet>
                <title>Famous Tourist Attractions in the United States</title>
                <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />

            </Helmet>
            <div class="container">
                <h1>Tourist Spots in the United States</h1>

                <div class="attraction">
                    <h2>New York</h2>
                    <p>New York, constituent state of the United States of America, one of the 13 original colonies and states. New York is bounded to the west and north by Lake Erie, the Canadian province of Ontario, Lake Ontario, and the Canadian province of Quebec; to the east by the New England states of Vermont, Massachusetts, and Connecticut; to the southeast by the Atlantic Ocean and New Jersey; and to the south by Pennsylvania. The capital is Albany.

                        Until the 1960s New York was the country’s leading state in nearly all population, cultural, and economic indexes. Its displacement by California beginning in the middle of that decade was caused by the enormous growth rate that has persisted on the West Coast rather than by a large decline in New York itself. Texas overtook New York as the second most populous state in 2000. Still, New York remains one of the most populous states in the country, and its gross economic product exceeds those of all but a handful of countries throughout the world...</p>
                </div>

                <div class="attraction">
                    <h2>Los Angeles</h2>
                    <p>Los Angeles , city, seat of Los Angeles county, southern California, U.S. It is the second most populous city and metropolitan area (after New York City) in the United States. The city sprawls across a broad coastal plain situated between mountains and the Pacific Ocean; the much larger Los Angeles county, which encompasses the city, contains some 90 other incorporated cities, including Beverly Hills, Pasadena, and Long Beach. The county also encompasses two of the Channel Islands, Santa Catalina and San Clemente; Mount San Antonio, familiarly known as Mount Baldy or Old Baldy...</p>
                </div>

                <div class="attraction">
                    <h2>San Francisco</h2>
                    <p>San Francisco, city and port, coextensive with San Francisco county, northern California, U.S., located on a peninsula between the Pacific Ocean and San Francisco Bay. It is a cultural and financial centre of the western United States and one of the country’s most cosmopolitan cities. Area 46 square miles (120 square km). Pop. (2010) 805,235; San Francisco–San Mateo–Redwood City Metro Division, 1,776,095; San Francisco–Oakland–Fremont Metro Area, 4,335,391; (2020) 873,965; San Francisco–San Mateo–Redwood City Metro Division, 1,638,407; San Francisco–Oakland–Berkeley Metro Area, 4,749,008. San Francisco holds a secure place in the United States’ romantic dream of itself—a cool, elegant, handsome...</p>
                </div>

                <div class="attraction">
                    <h2>Chichago</h2>
                    <p>Chicago, city, seat of Cook county, northeastern Illinois, U.S. With a population hovering near three million, Chicago is the state’s largest and the country’s third most populous city. In addition, the greater Chicagoland area—which encompasses northeastern Illinois and extends into southeastern Wisconsin and northwestern Indiana—is the country’s third largest metropolitan area and the dominant metropolis of the Midwest...</p>
                </div>

                <div class="attraction">
                    <h2>Boston</h2>
                    <p>The area, the people, and the institutions within its political boundaries can only begin to define the essence of Boston. Its nickname “Beantown” has its origin in colonial times, when Boston, as a stop on a major trade route with the West Indies, had a steady supply of molasses from the Caribbean, thus leading to the creation of a popular dish that became known as Boston baked beans (beans baked in molasses). As a city and as a name, Boston is a symbol of much that has gone into the development of the American consciousness, and its presence reaches far beyond its immediate environs. As the spiritual capital of the New England states, as the progenitor of the American Revolution and the nation, and as the earliest centre of American culture, Boston has influenced the country for some three centuries. Though Boston, like New England in general, has played a lessening role in national life since the early 20th century, it has remained the focal point of what may be the most diversified and dynamic combination of educational, cultural, medical, and scientific activities in the United States...</p>
                </div>
                <div id="map"></div>
            </div>

            <Link to="/index">
                <div id="homeIcon" >🏠
                </div>
            </Link>


        </div>
    );
}


export default IntroMap;
