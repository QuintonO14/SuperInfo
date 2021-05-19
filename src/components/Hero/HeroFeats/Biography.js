import { Bio, BioInfo } from '../../../styles/styles'
const Biography = ({ alias, alliance, alter, first, fullName, pob, publisher}) => {
    const allies = alliance.charAt(0).toUpperCase() + alliance.slice(1);
    return (
        <Bio style={alliance === "good" ? {"color" : "blue"} : {"color" : "red"}}>
            <BioInfo><strong>Aliases:</strong>{alias.length > 1 ? alias.slice(1, 10).join(",") : 'No known aliases'}</BioInfo>
            <BioInfo><strong>Aligned:</strong>{allies.length > 1 ? allies : 'Unknown'}</BioInfo>
            <BioInfo><strong>Alters:</strong>{alter ? alter : 'No alter egos found'}</BioInfo>
            <BioInfo><strong>First Appeared:</strong>{first ? first : 'No known first appearance'}</BioInfo>
            <BioInfo><strong>Full Name:</strong>{fullName ? fullName : 'Full name unavailable'}</BioInfo>
            <BioInfo><strong>Birth Place:</strong>{pob.length > 1 ? pob : 'Birth Place Unknown'}</BioInfo>
            <BioInfo><strong>Publisher:</strong>{publisher ? publisher : 'Publisher unknown'}</BioInfo>
        </Bio>
    )
}

export default Biography;