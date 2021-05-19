import { Searching } from '../styles/styles';
const Search = ({hero}) => {
    return (
        <Searching  type="text" placeholder="Look up a superhero or villain!" onChange={hero}/>
    )
}

export default Search;