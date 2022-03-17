import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PostCommand = () => {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    
    const postCommands = async (e) => {
        e.preventDefault();
        try {
            axios({
                method: 'POST',
                url: 'http://1d63-185-96-126-12.ngrok.io/api/cards/',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                data: {
                    title,
                    content
                }
            })
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='post-command'>
            <form onSubmit={postCommands} method="post">
                <div className="input">
                    <input type="text" placeholder='Command Title' onChange={(e) => setTitle(e.target.value)} />
                    <span className="top spaninp"></span>
                    <span className="bottom spaninp"></span>
                </div>
                <br /> <br />
                <div className="input">
                    <input type="text" className='content-input' placeholder='Command Content' onChange={(e) => setContent(e.target.value)} />
                    <span className="top spaninp"></span>
                    <span className="bottom spaninp"></span>
                </div>
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}


export default PostCommand