import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Appearances = styled.div`
    grid-column: 3;
    grid-row: 2;
    background-color: #000000cf;
    color: white;
    display: flex;
    justify-content: space-evenly;
    border-radius: 5%;
`

export const AppearInfo = styled.p`
    padding: 1%;
    white-space: pre-wrap;
`

export const Bio = styled.div`
    border: 1px solid black;
    grid-column: 1;
    grid-row: 2 / 5;
    background-color: #000000cf;
    color: white;
    border-radius: 5%;
    overflow: auto;
    &::-webkit-scrollbar {
        border: 1px solid black;
        background-color: #4d4d4dcf;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 5%;
    }
`

export const BioInfo = styled.p`
    margin: 2%;
    word-break: break-word;
`

export const Button = styled.button`
    width: 35%;
    color: black;
    height: 50px;
    font-size: 24px;
    border: 1px solid black;
    border-radius: 5%;
    background-color: #bebebe;
    &:hover {
        background-color: black;
        color: white
    }
`

export const Connect = styled.div`
    position: relative;
    grid-column: 1;
    grid-row: 5 / 7;
    height: 100%;
    background-color: #000000cf;
    overflow: hidden;
    border-radius: 5%;
   
`

export const Container = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding-top: 15%;
    display: block;
    justify-content: center;
    text-align: center;

    &::after {
    content: "";
    background-image: url('heroes.jpg');
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -1;
    opacity: .2
    }
`

export const Detail = styled.td`
    color: white;
    border: 1px solid white;
    font-weight: bold;
    text-align: center
`

export const Err = styled(Link)`
    text-decoration: none;

    &:visited {
        color: black;
    }

    &:hover {
        color: white;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: repeat(6, 115px);
    gap: 1%;
    padding: 1%;
    padding-bottom: 5%;
    background-color: #404a4c;
`

export const Group = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;
    color: white;
    &::-webkit-scrollbar {
        border: 1px solid white;
        background-color: #4d4d4dcf;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 5%;
    }
`


export const Head = styled.th`
    border: 2px solid black;
`

export const HeroImg = styled.div`
    grid-row: 2 /6;
    grid-column: 2;
`

export const HLink = styled(Link)`
    text-decoration: none;
    color: black;
    width: 100%;

    &:visited {
    color: black;
    }
`

export const Img = styled.img`
   border-radius: 25%;
`

export const Items = styled.p`
    padding-left: 2%;
    font-size: 22px;
`

export const List = styled.ul`
    width: 35%;
    height: 200px;
    list-style: none;
    margin: auto;
    padding: 0;
    overflow: auto;
    &::-webkit-scrollbar {
        border: 1px solid black;
        background-color: #4d4d4dcf;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 30%;
    }
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 40%;
  width: 15.0rem;
  height: 15.0rem;
  animation: ${spin} 0.6s linear infinite;
`

export const Name = styled.h1`
    text-align: center;
    background-color: #000000cf;
    padding: 0;
    margin: 0;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Notfound = styled.div`
    text-align: center;
    margin-top: 15%;
`

export const PageButton1 = styled.button`
    background-color: white;
    color: black;
    float: left;
    padding: 1%;
    outline: none;
    box-shadow: 0 5px;
    opacity: 0;
    font-size: 32px;
    border-radius: 25%;

    &:active {
        transform: translateY(3px)
    }
`

export const PageButton2 = styled(PageButton1)`
    float: right
`

export const PageCounter = styled.p`
    padding-top: 2%;
    font-weight: bold;
    color: white;
`

export const Paginator = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
    font-size: 24px;
    margin-top: 1%;
`

export const Rankings = styled(Link)`
    background-color: white;
    font-size: 24px;
    padding: 1%;
    margin: 1%;
    border: 1px solid black;
    text-decoration: none;
    border-radius: 5%;

    &:visited {
        color: black;
        text-decoration: none
    }

    &:hover {
        background-color: rgba(100, 100, 100, 0.7);
        color: black;
    }
`

export const RankLink = styled(Link)`
    color: white;
    &:visited {
        color: white;
    }
`

export const Relatives = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    margin: 0;
    margin-bottom: 5%;
    padding: 0;
    &::-webkit-scrollbar {
        border: 1px solid white;
        background-color: #4d4d4dcf;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 5%;
    }
`

export const RelP = styled.p`
    font-size: 20px;
    text-align: center;
`

export const RelTitle = styled.h5`
    text-align: center;
    background-color: black;
    color: white;
    margin: 0;
`

export const Result = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 28px;
    padding-left: 1%;
    padding-right: 1%;
    text-align: left;
    border: 1px solid black;
    width: 50%:
    position: absolute;
    right: 0;
    background-color: white;

    &:hover {
        background-color: black;
        color: white;
    }
`

export const Return = styled.div`
    background-color: #000000cf;
    display: table;
    text-align: center;
    font-size: 28px;
    margin: auto;
    border-radius: 5%;
    height: 100%;
    width: 100%;

    &:hover {
        border: 2px solid white;
        color: white;
    }
`

export const ReturnLink = styled(Link)`
    text-decoration: none;
    color: white;
    width: 100%;
    display: table-cell;
    vertical-align: middle;

    &:visited {
    color: white;
    }

    &:active {
        transform: scale(1.2);
    }
`

export const Row = styled.tr`
    border: 1px solid white;

    &:hover {
        opacity: 0.5
    }
`

export const Searching = styled.input`
    font-size: 34px;
    width: 35%;
    outline: none;
    border: 3px solid black;
`

export const Stat = styled.div`
    line-height: 68px;
    background-color: #000000cf;
    grid-column: 3;
    grid-row: 3 / 7 ;
    padding: 2%;
    border-radius: 5%;
`

export const Tab1 = styled.button`
    font-size: 24px;
    color: white;
    margin-left: 2%;
    background-color: #00000000
`

export const Tab2 = styled(Tab1)`
    color: white
`

export const Table = styled.table`
    width: 80%;
    border: 1px solid black;
    margin: auto;
    background-color: white;
    color: black;
`

export const Thumb = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5%;
`

export const Title = styled.h1`
    width: 20%;
    margin: auto;
    margin-bottom: 5%;
    font-size: 54px;
}
`

export const Works = styled.div`
    grid-column: 2;
    grid-row: 6;
    background-color: #000000cf;
    color: white;
    border-radius: 5%;
`

export const WorkInfo = styled.p`
    padding: 1%;
    margin: 0
`

