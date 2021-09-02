import { useEffect, useState } from 'react';
import hero from '../api/api';
import { Link } from 'react-router-dom';

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
    const term = e.target.value.toLowerCase().split(/^A-Za-z/)
      const filtered = data.filter((item) => {
        return item.name.toLowerCase().match(term);
      })
      if(!e.target.value) {
        setShow(false);
        getData();
       } else {
        setFiltered(filtered);
        setShow(true);
       }
  }

  return (
  <div className="flex h-screen bg-gradient-to-r from-red-300 to-blue-300 text-center sm:mt-0 w-full items-center">
   <div className="flex flex-col w-full md:w-2/3 lg:w-1/2 mx-auto  border border-black rounded-lg overflow-y-auto
   bg-gray-100 justify-center place-self-start md:place-self-auto">
    <h1 className="text-xl mt-2">SuperInfo</h1>
    <input  
        className="w-11/12 mx-auto my-2 shadow-md relative border border-black p-2 rounded-md"
        type="text" 
        placeholder="Look up a superhero or villain!" 
        onChange={heroSearch}/>
          {show && (
              <ul className="text-center h-auto sm:h-40 border-t-2 border-b-2 border-black overflow-y-auto
              scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-black scrollbar-thumb-rounded scrollbar-track-rounded">
              {filtered.length < 1 ? <li>No Super Found</li> : (
                filtered.map((hero) => {
                  return (
                    <Link key={hero.id} to={`/${hero.id}`}>
                      <li className="group flex justify-between p-px items-center hover:bg-gray-200">
                        <img src={hero.images.xs} alt="No Hero Pic" />
                        <p>{hero.name}</p>
                        <p className="opacity-0 group-hover:opacity-100 mr-4">➔</p>
                      </li>
                    </Link>
                  )
                })
              )}
              </ul>
          )}
    <Link to="/rankings" className="p-2">
      <button className="w-full lg:w-2/3 xl:w-1/4 rounded-md border border-black p-2 hover:bg-gray-200">Go to Rankings</button>
    </Link>     
    </div>
  </div>
  );
}

export default Home;