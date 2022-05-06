import styled from 'styled-components'
import { RgbToHex } from './converter'

const ColorPalette = styled.div`
    outline: 1px solid black;
    width: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    color: white;
    text-shadow: 0 0 2px black;
    font-size: large;
`

// const InputText = styled.input`
//   width: 80px;
//   height: 25px;
//   border-style: none;
//   background-color: transparent;
// `;

const Hex = ({ Data }) => {
    const HexCode = () => {
        return RgbToHex(Data[0], Data[1], Data[2])
    }

    return (
        <div>
            <h2>HEX</h2>
            <div>
                <ColorPalette style={{ background: HexCode() }}>{HexCode()}</ColorPalette>
            </div>
        </div>
    )
}

export default Hex
