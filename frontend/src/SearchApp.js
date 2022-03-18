import React, { useState, useEffect } from 'react';
import axios from 'axios';
const SearchApp = () => {
    const [searchitem, setSearchterm] = useState('');
    const [selected, setSelected] = useState()
    const [data, setData] = useState([])
    var display = "none";
    if (searchitem.length > 0) { display = "block" }

    const handleClick = (id) => {
        setSelected(id)
    }

    const getData = async () => {
        const response = await axios.get('http://localhost:8000/api/cards/')
        setData(response.data)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="main">
            <div className='input'>
                <input type="text" placeholder="Search a command..." onChange={(e) => { setSearchterm(e.target.value) }} />
                <span className="top spaninp"></span>
                <span className="bottom spaninp"></span>
            </div>
            <div className="cards" style={{ display: display }}>
                {data.filter((val) => {
                    if (searchitem === '') {
                        return val
                    } else if (val.title.toLowerCase().includes(searchitem.toLowerCase()) | val.content.toLowerCase().includes(searchitem.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className='card' key={key}>
                            <h3>{val.title} <span>
                                <i className="far fa-clipboard" onClick={() => {
                                    navigator.clipboard.writeText(val.content)
                                    setTimeout(() => {
                                        handleClick(null)
                                    }, 500);
                                    handleClick(val.id)
                                }}></i>
                            </span></h3>
                            <p>{val.content}</p>
                            <br />
                            <span className={`card-top cardspan ${selected === val.id ? 'top-active' : ''}`}></span>
                            <span className={`card-right cardspan ${selected === val.id ? 'right-active' : ''}`}></span>
                            <span className={`card-bottom cardspan ${selected === val.id ? 'bottom-active' : ''}`}></span>
                            <span className={`card-left cardspan ${selected === val.id ? 'left-active' : ''}`}></span>
                        </div>


                    );
                })}
            </div>
        </div>
    )
}

export default SearchApp