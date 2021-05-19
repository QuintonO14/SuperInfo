import { useState } from 'react';
import { Connect, Items, Relatives, RelP, Group, Tab1, Tab2 } from '../../../styles/styles'

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

    const border = {
        "border": '1px solid white'
    }

    return (
        <Connect>
            <Tab1 style={active === false ? activeClass : border} onClick={getRelatives}>Relatives</Tab1>
            <Tab2 style={active === true ? activeClass : border} onClick={getGroup}>Groups</Tab2>
            {tab === true ? (  
                <Group style={alliance === "good" ? {"color" : "blue", "border" : "2px solid blue"} :
                {"color" : "red", "border" : "2px solid red"}}>
                {groupArray.length > 2 ? (
                    groupArray.map((group) => {
                        return <Items key={Math.floor(Math.random() * 1000) + 1}>{group}</Items>
                    })) : (
                        <RelP>There's not much info on the groups {name} is associated with. This could be due to the information not residing within the API. A quick google search may be able to reveal more!</RelP>
                    ) }
                    <br />
                    <br />
                </Group>) : (
                <Relatives style={alliance === "good" ? {"color" : "blue", "border" : "2px solid blue"} :
                {"color" : "red", "border" : "2px solid red"}}>
                    {relativesArray.length > 3 ? ( 
                            relativesArray.map((relative) => {
                                return <Items key={Math.floor(Math.random() * 10000) + 1}>{relative}</Items>
                            })
                    ) : (
                        <RelP>There's not much info on {name + "'s"} relatives. This could be due to the information not residing within the API. A quick google search may be able to reveal more!</RelP>
                    )}
                    <br />
                    <br />
                </Relatives>
                )}
        </Connect>
    )
}

export default Connections;