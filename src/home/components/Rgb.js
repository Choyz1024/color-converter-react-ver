import styled from 'styled-components'
import { RgbToHex } from './converter'

const RgbInput = styled.div`
    width: 650px;
`
const InputArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 50px 0px;
`
const InputRange = styled.input`
    width: 500px;
`
const InputText = styled.input`
    width: 25px;
`
const Palette = styled.div`
    outline: 1px solid black;
    width: 30px;
    height: 30px;
    background: black;
`

const Rgb = ({ Data, setData }) => {
    const R = Data[0]
    const G = Data[1]
    const B = Data[2]

    const RChange = (e) => {
        if (e.target.value >= 0 && e.target.value < 256) {
            setData([e.target.value, G, B])
        }
    }

    const GChange = (e) => {
        if (e.target.value >= 0 && e.target.value < 256) {
            setData([R, e.target.value, B])
        }
    }

    const BChange = (e) => {
        if (e.target.value >= 0 && e.target.value < 256) {
            setData([R, G, e.target.value])
        }
    }

    return (
        <RgbInput>
            <h2>RGB</h2>
            <InputArea>
                <span>R</span>
                <InputRange type="range" min={0} max={255} value={R} onChange={RChange}></InputRange>
                <InputText type="text" value={R} onChange={RChange}></InputText>
                <Palette style={{ background: RgbToHex(R, 0, 0) }}></Palette>
            </InputArea>
            <InputArea>
                <span>G</span>
                <InputRange type="range" min={0} max={255} value={G} onChange={GChange}></InputRange>
                <InputText type="text" value={G} onChange={GChange}></InputText>
                <Palette style={{ background: RgbToHex(0, G, 0) }}></Palette>
            </InputArea>
            <InputArea>
                <span>B</span>
                <InputRange type="range" min={0} max={255} value={B} onChange={BChange}></InputRange>
                <InputText type="text" value={B} onChange={BChange}></InputText>
                <Palette style={{ background: RgbToHex(0, 0, B) }}></Palette>
            </InputArea>
        </RgbInput>
    )
}

export default Rgb
