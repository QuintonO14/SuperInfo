import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-xl">Sorry, no superheroes or villains here!</h1>
        <Link to="/">
            <button className="border border-black mt-2 p-2 rounded-md shadow-sm hover:bg-gray-200">
                Return Home
            </button>      
        </Link>
        </div>
        )
} 

export default NotFound;