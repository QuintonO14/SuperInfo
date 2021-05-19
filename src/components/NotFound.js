import { Notfound, Err, Button } from '../styles/styles';
const NotFound = () => {
    return (
        <Notfound>
        <h1>Sorry, No Superheroes or Villains Here!</h1>
        <Err to="/">
            <Button>
                Return Home
            </Button>      
        </Err>
        </Notfound>
        )
} 

export default NotFound;