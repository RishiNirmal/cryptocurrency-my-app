import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Container, Row } from 'react-bootstrap'
// import BarChart from "./Graph";
import { VictoryLine, VictoryChart } from 'victory';


export default function IncreaseTable() {

    // Setting up the initial states using
    // react hook 'useState'
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);

    // Fetching crypto data from the API only
    // once when the component is mounted
    useEffect(() => {
        Axios.get(
            `https://api.coinstats.app/public/v1/coins?skip=0&limit=100%C2%A4cy=INR`
        ).then((res) => {
            setCrypto(res.data.coins);
        });
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <h1>All Cryptocurrencies</h1>
                    <Container>
                        <div className="SearchInputDiv">
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </div>
                    </Container>
                    <Table responsive>
                        <thead className="headTable">
                            <tr>
                                <td><p>#</p></td>
                                <td><p>Name</p></td>
                                <td><p>Price</p></td>
                                <td><p>24h %</p></td>
                                <td><p>7d %</p></td>
                                <td><p>Market Cap</p></td>
                                <td><p>Volume(24h)</p></td>
                                <td><p>Circulating Supply</p></td>
                                <td><p>Last 7 Days</p></td>
                            </tr>
                        </thead>
                        {/* Mapping all the cryptos */}
                        <tbody>
                            {/* Filtering to check for the searched crypto */}
                            {crypto
                                .filter((val) => {
                                    return val.name.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((val, id) => {
                                    return (
                                        <>
                                            <tr id={id}>
                                                <td className="rank">{val.rank}</td>
                                                <td className="logo">
                                                    <a href={val.websiteUrl}>
                                                        <img src={val.icon} alt="logo" width="30px" />
                                                    </a>

                                                    <p className="BrandName">{val.name}</p>
                                                    <div>
                                                        <p className="SymbleName">{val.symbol}</p>
                                                    </div>

                                                </td>
                                                {/* <td className="symbol">{val.symbol}</td> */}
                                                <td><p>${val.price}</p></td>
                                                <td><p>{val.priceChange1d}</p></td>
                                                <td><p>{val.priceChange1w}</p></td>
                                                <td><p>${val.marketCap}</p></td>
                                                <td><p>{val.volume}</p></td>
                                                <td><p>{val.availableSupply}</p></td>
                                                {/* <td><p><BarChart/></p></td> */}
                                                <td><p>  
                                                    <VictoryLine
                                                        style={{
                                                            data: { stroke: "blue" }
                                                            
                                                        }}
                                                        
                                                        data={[
                                                            val.price, 
                                                            val.priceChange1d, 
                                                            val.priceChange1w, 
                                                            val.priceChange1d,  
                                                            val.marketCap, 
                                                            val.volume, 
                                                            val.availableSupply
                                                        ]}
                                                    />
                                                </p></td>

                                            </tr>
                                        </>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    );
}
