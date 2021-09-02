import { useEffect, useState } from 'react';
import hero from '../api/api';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Rankings = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])  
    
    const getData = async () => {
      await hero.get('/all.json').then((response) => {
        setData(response.data);
        });
    }

    return (
        <div className="flex h-screen bg-gray-500">
            <Carousel 
            autoFocus
            showIndicators={false} 
            thumbWidth={90}
            useKeyboardArrows={true}
            showArrows={false}
            showStatus={false}
            className="w-full md:w-3/4 h-auto flex flex-col justify-evenly mx-auto mt-2 bg-gray-500">
                {data.sort((a,b) => [b.powerstats.combat + b.powerstats.strength + b.powerstats.power + 
                b.powerstats.durability + b.powerstats.intelligence + b.powerstats.speed] - [a.powerstats.combat
                + a.powerstats.strength + a.powerstats.power + a.powerstats.durability + a.powerstats.intelligence +
                a.powerstats.speed]).map((hero) => {
                      const total = hero.powerstats.combat + hero.powerstats.strength
                      + hero.powerstats.speed + hero.powerstats.power 
                      + hero.powerstats.intelligence + hero.powerstats.durability;
                    return (
                    
                         <div key={hero.id} className="w-2/3 sm:w-1/3 mx-auto">
                            <img className="rounded-md h-full" src={hero.images.lg} alt="hero" />
                            <Link to={`/${hero.id}`}><h1 className="text-xl font-bold underline hover:text-white active:text-white">{hero.name}</h1></Link>
                            <p>Total Level:{total}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}


export default Rankings;