import { useEffect, useState } from 'react';
import hero from '../api/api';
import { Table , Row, Detail , RankLink, Head} from '../styles/styles'
import Paginate from './Paginate';

const Rankings = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        getData();
    }, [page])  
    const getData = async () => {
      await hero.get('/all.json').then((response) => {
        setData(response.data);
        });
    }

    const nextPage = (e) => {
        setPage(page + 1);
       
    }

    const prevPage = () => {
        setPage(page - 1);
    }
   
    const stats = data.sort((a, b) => [b.powerstats.combat + b.powerstats.strength + b.powerstats.speed
    + b.powerstats.power + b.powerstats.durability + b.powerstats.intelligence] - [a.powerstats.combat
    + a.powerstats.strength + a.powerstats.speed + a.powerstats.power + a.powerstats.durability 
    + a.powerstats.intelligence]).slice(page*21,21*(page+1))
    .map((hero) => {
        const total = hero.powerstats.combat + hero.powerstats.strength
            + hero.powerstats.speed + hero.powerstats.power 
            + hero.powerstats.intelligence + hero.powerstats.durability;
        const alliance = hero.biography.alignment
        const color = alliance === 'good' | 'neutral' ? 'rgba(0, 0, 255, 0.7)' : 'rgba(255, 0, 0, 0.7)'
        return (
                <Row key={hero.id}>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                <RankLink to={`/${hero.id}`}>{hero.name}
                </RankLink>
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {total}
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.powerstats.power}
                </Detail> 
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.powerstats.combat}
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.powerstats.speed}
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.powerstats.strength}
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.powerstats.durability}
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.powerstats.intelligence}
                </Detail>
                <Detail style={{"borderColor" : color, "backgroundColor" : color}}>
                    {hero.biography.publisher ? hero.biography.publisher : 'Publisher Unknown'}
                </Detail>
                </Row>
                
        );
    });   

    return (
        <div style={{"backgroundColor" : "#404a4c", "height":"100%"}}>
        <Table>
        <tbody>
         <tr>
            <Head>Name</Head>
            <Head>Level</Head>
            <Head>Power</Head>
            <Head>Combat</Head>
            <Head>Speed</Head>
            <Head>Strength</Head>
            <Head>Durability</Head>
            <Head>Intelligence</Head>
            <Head>Publisher</Head>
         </tr>
            {stats}
        </tbody>
        </Table>
        {data.length !== 0 && (
            <Paginate next={nextPage} page={page} prev={prevPage} />
            )}
        </div>
    )
}


export default Rankings;