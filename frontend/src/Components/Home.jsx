import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [seats,setSeats]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/getSeats')
        .then((res)=>{
            debugger;
            console.log(res.data);
            setSeats(res.data);
        })
        .catch((err) => {
             console.error('Error fetching seats:', err);
        });
    },[])
    const handleClick=()=>{

    }
    return (
        <div>
            <h1>Home</h1>
             {
                seats.length > 0 &&
                seats.map((val, idx) => {
                    let a = val.rows;
                    let b = val.cols;
                    let seatRows = [];
                    for (let i = 0; i < a; i++) {
                        let seatCols = [];
                        for (let j = 0; j < b; j++) {
                            seatCols.push(
                                <input key={j} type='checkbox'  style={{ margin: 2 }} />
                                
                            );
                        }
                        seatRows.push(
                            <div key={i}>{seatCols}{i}</div>
                        );
                    }
                    return <div key={idx}>{seatRows} </div>;
                })
            }
        </div>
    )
}

export default Home
