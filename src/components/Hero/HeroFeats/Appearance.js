const Appearance = ({height, weight, gender, race, eyecolor, haircolor, alliance}) => {
   
    return (
        <div 
        className="flex justify-evenly w-11/12 mx-auto"
        style={alliance === "good" | "neutral" ? {color: "blue"} : {color:"red"}}>
         <div>
         <p>Height:<br />{height.includes("-") ? 'N/A' : height.join('\n')}</p>
         <p>Weight:<br />{weight.includes("-") ? 'N/A' : weight.join('\n')}</p>
         <p>Gender:<br />{gender.includes("-") ? 'N/A' : gender }</p>
         </div>
         <div>
         <p>Race:<br />{race ? race : 'Unknown'}</p>
         <p>Eye-Color:<br />{eyecolor ? eyecolor : 'N/A'}</p>
         <p>Hair-Color:<br />{haircolor ? haircolor: 'N/A'}</p>
         </div>
        </div>
    )
}

export default Appearance;