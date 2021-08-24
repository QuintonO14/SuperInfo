import { useEffect, useState } from 'react';
import heroes from '../../api/api';
import Biography from './HeroFeats/Biography';
import Connections from './HeroFeats/Connections';
import Appearance from './HeroFeats/Appearance';
import Image from './HeroFeats/Image';
import Stats from './HeroFeats/Stats';
import { Link } from 'react-router-dom';

const Hero = (props) => {
    const [hero, setSupe] = useState({});
    useEffect((id) => {
       id = props.match.params.id;
       heroes.get(`/id/${id}.json`).then((response) => {
           setSupe(response.data);
       }).catch((err) => {
            if(err.response.status === 404) {
               props.history.push('/');
            }
       })
    }, [props.match.params.id, props.history])

    return (
        <div className="h-full">
              {Object.keys(hero).length > 0 ?  (
              <div className="flex flex-col divide-y divide-black bg-gray-300 h-full">
                 <Link 
                 className="w-full"
                 style={hero.biography.alignment === 'good' ? {color: "blue"} : {color:"red"}} to="/">
                     <button className="w-full xl:w-1/4 p-2 text-center bg-white active:bg-gray-100 hover:bg-gray-100 xl:absolute xl:border border-black
                 xl:m-8 xl:p-4 xl:rounded-md">Return to Search</button>
                 </Link>
                <Image 
                hero={hero} 
                url={hero.images.md}
                occupation={hero.work.occupation}
                base={hero.work.base}
                alliance={hero.biography.alignment}
                 />
                <Biography
                    alias={hero.biography.aliases}
                    alliance={hero.biography.alignment}
                    alter={hero.biography.alterEgos}
                    appearance={hero.biography.firstAppearance}
                    name={hero.biography.fullName}
                    pob={hero.biography.placeOfBirth}
                    publisher={hero.biography.publisher}
                />
                <Appearance
                    alliance={hero.biography.alignment}
                    gender={hero.appearance.gender}
                    race={hero.appearance.race}
                    height={hero.appearance.height}
                    weight={hero.appearance.weight}
                    eyecolor={hero.appearance["eye-color"]}
                    haircolor={hero.appearance["hair-color"]}
                 />
                <Connections
                    group={hero.connections.groupAffiliation}
                    relatives={hero.connections.relatives}
                    name={hero.name}
                    alliance={hero.biography.alignment}
                />
                 <Stats
                    name={hero.name}
                    align={hero.biography.alignment}
                    combat={hero.powerstats.combat}
                    strength={hero.powerstats.strength}
                    speed={hero.powerstats.speed}
                    power={hero.powerstats.power}
                    intelligence={hero.powerstats.intelligence}
                    durability={hero.powerstats.durability}
                />
                 </div>
              ) : null }
            </div>
        )
}

export default Hero;