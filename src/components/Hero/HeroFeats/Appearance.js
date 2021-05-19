import { Appearances, AppearInfo } from '../../../styles/styles';
const Appearance = ({height, weight, gender, race, eyecolor, haircolor, alliance}) => {
   
    return (
        <Appearances style={alliance === "good" | "neutral" ? {"color" : "blue"} : {"color" :"red"}}>
         <AppearInfo>Height:<br />{height.includes("-") ? 'N/A' : height.join('\n')}</AppearInfo>
         <AppearInfo>Weight:<br />{weight.includes("-") ? 'N/A' : weight.join('\n')}</AppearInfo>
         <AppearInfo>Gender:<br />{gender.includes("-") ? 'N/A' : gender }</AppearInfo>
         <AppearInfo>Race:<br />{race ? race : 'Unknown'}</AppearInfo>
         <AppearInfo>Eye-Color:<br />{eyecolor ? eyecolor : 'N/A'}</AppearInfo>
         <AppearInfo>Hair-Color:<br />{haircolor ? haircolor: 'N/A'}</AppearInfo>
        </Appearances>
    )
}

export default Appearance;