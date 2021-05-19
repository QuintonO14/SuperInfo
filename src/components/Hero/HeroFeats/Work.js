import { Works, WorkInfo } from '../../../styles/styles'
const Work = ({ occupation, base, alliance }) => {
    return (
        <Works style={alliance === "good" ? {"color" : "blue"} : {"color" : "red"}}>
            <WorkInfo><strong>Occupation:</strong> {occupation.length > 1 ? occupation : 'N/A'}</WorkInfo>
            <WorkInfo><strong>Homebase:</strong> {base.length > 1 ? base : 'Unknown'}</WorkInfo>
        </Works>
    )
}

export default Work;