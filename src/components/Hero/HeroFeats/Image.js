import {HeroImg, Thumb } from '../../../styles/styles'
const Image = ({ url }) => {
    return (
        <HeroImg>
                <Thumb src={url} alt="none" />
        </HeroImg>
    )
}

export default Image;