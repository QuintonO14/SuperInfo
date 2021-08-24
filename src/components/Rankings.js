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
        <div className="flex h-screen justify-center items-center">
            <Carousel 
            autoPlay
            autoFocus
            showIndicators={false} 
            thumbWidth={90}
            useKeyboardArrows={true}
            showArrows={false}
            showStatus={false}
            className="w-full h-full flex flex-col justify-center xl:w-1/2 mx-auto border border-black rounded-md bg-gray-500">
                {data.sort((a,b) => [b.powerstats.combat + b.powerstats.strength + b.powerstats.power + 
                b.powerstats.durability + b.powerstats.intelligence + b.powerstats.speed] - [a.powerstats.combat
                + a.powerstats.strength + a.powerstats.power + a.powerstats.durability + a.powerstats.intelligence +
                a.powerstats.speed]).map((hero) => {
                      const total = hero.powerstats.combat + hero.powerstats.strength
                      + hero.powerstats.speed + hero.powerstats.power 
                      + hero.powerstats.intelligence + hero.powerstats.durability;
                    return (
                    
                         <div key={hero.id} className="w-1/2 mx-auto pt-8">
                            <img className="rounded-md h-40" src={hero.images.lg} alt="hero" />
                            <Link to={`/${hero.id}`}><p className="underline hover:text-white active:text-white">{hero.name}</p></Link>
                            <p>Total Level:{total}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}


export default Rankings;