import { useEffect, useState } from 'react';
import hero from '../api/api';
import Search from './Search';
import { Container, HLink, Img, List, Rankings, Result, Title} from '../styles/styles';

const Home = () => {
  useEffect(() => {
      getData();
  }, [])

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState(false);

  const getData = async () => {
    await hero.get('/all.json').then((response) => {
      setData(response.data);
      });
  }

  const heroSearch = async (e) => {
    const term = e.target.value.toLowerCase().split(/[^A-Za-z]/);
      const filtered = data.filter((item) => {
        return item.name.toLowerCase().match(term);
      })
      setFiltered(filtered);
      setShow(true);
    if(!term) {
     getData();
     setShow(false);
    }
  }

  return (
  <Container>
    <div>
    <Title>SuperInfo</Title>
  <Search hero={heroSearch} />
          {show ? (
              <List>
              {filtered.map((hero) => {
                return (
                  <HLink key={hero.id} to={`/${hero.id}`}>
                   <Result>
                     {hero.name}<Img src={hero.images.xs} alt="No Hero Pic"/>
                  </Result>
                  </HLink>
                )
              })}
              {filtered.length < 1 ? <Result>No Super Found</Result> : null}
              </List>
          ) :  null
          }
      <p style={{"padding":"1%", "font-weight":"bold"}}>OR</p>
    <Rankings to="/rankings">Go To Rankings</Rankings>     
    </div>
  </Container>
  );
}

export default Home;