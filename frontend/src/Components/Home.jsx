import  { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [seats,setSeats]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9000/getSeats')
        .then((res)=>{
            
            console.log(res.data);
            setSeats(res.data);
        })
        .catch((err) => {
             console.error('Error fetching seats:', err);
        });
    },[])
    const handleClick=(i,j)=>{
        console.log(i+'   '+j);
        axios.post('http://localhost:9000/setSeats',{ row: i, col: j })
        .then(()=>{
            console.log("Data is added");
        })
        .catch((err)=>{
            console.log('Error: '+err);
        })
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
                        let row = String.fromCharCode(65 + i);
                        for (let j = 0; j < b; j++) {
                            seatCols.push(
                                <input key={j} type='checkbox'  style={{ margin: 2 }}  onClick={()=>handleClick(row,j)}/>
                            );
                        }
                        seatRows.push(
                            <div key={i}>{seatCols}{i+1}</div>
                        );
                    }
                    return <div key={idx}>{seatRows} </div>;
                })
            }
        </div>
    )
}

export default Home
