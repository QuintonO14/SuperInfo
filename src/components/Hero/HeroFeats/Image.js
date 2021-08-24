const Image = ({ url, hero, alliance, occupation, base }) => {
    return (
        <div className="text-center">
                <h1 
                className="py-3 text-2xl font-bold"
                style={hero.biography.alignment === 'good' ? {color: "blue"} : {color:"red"}}>
                     {hero.name}
                </h1>
                <img className="mx-auto w-1/3 h-auto rounded-lg" src={url} alt="none" />
                <div
                className="py-3"
                style={alliance === "good" ? {color: "blue"} : {color: "red"}}>
                    <p><strong>Occupation:</strong> {occupation.length > 1 ? occupation : 'N/A'}</p>
                    <p><strong>Homebase:</strong> {base.length > 1 ? base : 'Unknown'}</p>
                </div>
        </div>
    )
}

export default Image;