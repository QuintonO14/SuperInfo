import { useState } from 'react';

const Connections = ({ group, relatives, name, alliance }) => {
    const relativesArray = relatives.split(/[,;]/);
    const groupArray = group.split(/[,;]/);
    const [tab, setTab] = useState(false);
    const [active, setActive] = useState(false);
    const color = alliance === 'good' ? 'blue' : 'red'

    const getGroup = () => {
        setTab(true);
        setActive(true);
    }

    const getRelatives = () => {
        setTab(false);
        setActive(false);
    }

    const activeClass = {
        "color" : "white",
        "backgroundColor" : color,
        "border" : `1px solid ${color}`
    }
    
    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-evenly mt-4 ">
            <button
            className="border border-black p-2 bg-white hover:bg-gray-400 active:bg-gray-400" 
            style={active === false ? activeClass : null} onClick={getRelatives}>Relatives</button>
            <button 
            className="border border-black p-2 bg-white hover:bg-gray-400 active:bg-gray-400"
            style={active === true ? activeClass : null} onClick={getGroup}>Groups</button>
            </div>
            {tab === true ? (  
                <div
                className="p-2 text-center"
                style={alliance === "good" ? {color:"blue", border:"2px solid blue"} : {color: "red", border:"2px solid red"}}>
                {groupArray.length > 2 ? (
                    groupArray.map((group) => {
                        return <p key={Math.floor(Math.random() * 100000) + 1}>{group}</p>
                    })) : (
                        <p>There's not much info on the groups {name} is associated with. This could be due to the
                         information not residing within the API. A quick google search may be able to reveal more!</p>
                    ) }
                </div>
                ) : (
                <div 
                className="p-2 text-center"
                style={alliance === "good" ? {color: "blue", border:"2px solid blue"} : {color: "red", border:"2px solid red"}}>
                    {relativesArray.length > 3 ? ( 
                            relativesArray.map((relative) => {
                                return <p key={Math.floor(Math.random() * 10000) + 1}>{relative}</p>
                            })
                    ) : (
                        <p>There's not much info on {name + "'s"} relatives. This could be due to the information
                         not residing within the API. A quick google search may be able to reveal more!</p>
                    )}
                </div>
                )}
        </div>
    )
}

export default Connections;