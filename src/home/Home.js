import Rgb from './components/Rgb'
import Hex from './components/Hex'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
    height: 100%;
`
const Header = styled.header`
    // outline: 5px solid tomato;
    width: 100%;
    height: 20px;
    margin: 25px auto;
    padding: 25px 200px;
    background: #fff;
`
const Body = styled.div`
    // outline: 5px solid tomato;
    margin: 50px;
    display: flex;
    justify-content: space-evenly;
`
const Tips = styled.div`
    text-align: center;
`

const Home = () => {
    const randomCode = () => {
        return Math.floor(Math.random() * 256)
    }
    const [data, setData] = useState([randomCode(), randomCode(), randomCode()])

    const randomColor = (e) => {
        if (e.altKey === true) {
            setData([randomCode(), randomCode(), randomCode()])
        }
    }

    return (
        <Container onClick={randomColor}>
            <Header>
                <h2>Color Converter</h2>
            </Header>
            <Body>
                <Rgb Data={data} setData={setData} />
                <Hex Data={data} setData={setData} />
            </Body>
            <Tips>ALT-click to random a color</Tips>
        </Container>
    )
}

export default Home
