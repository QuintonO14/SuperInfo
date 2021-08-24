const Biography = ({ alias, alliance, alter, first, fullName, pob, publisher}) => {
    const allies = alliance.charAt(0).toUpperCase() + alliance.slice(1);
    return (
        <div
        className="w-11/12 mx-auto"
        style={alliance === "good" ? {color: "blue"} : {color: "red"}}>
            <p><strong>Aliases:</strong>{alias.length > 1 ? alias.slice(1, 10).join(",") : 'No known aliases'}</p>
            <p><strong>Aligned:</strong>{allies.length > 1 ? allies : 'Unknown'}</p>
            <p><strong>Alters:</strong>{alter ? alter : 'No alter egos found'}</p>
            <p><strong>First Appeared:</strong>{first ? first : 'No known first appearance'}</p>
            <p><strong>Full Name:</strong>{fullName ? fullName : 'Full name unavailable'}</p>
            <p><strong>Birth Place:</strong>{pob.length > 1 ? pob : 'Birth Place Unknown'}</p>
            <p><strong>Publisher:</strong>{publisher ? publisher : 'Publisher unknown'}</p>
        </div>
    )
}

export default Biography;