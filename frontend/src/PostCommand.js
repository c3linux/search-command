import React, { useState } from 'react'
import axios from 'axios'

const PostCommand = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState()
    const [ready, setReady] = useState(false)
    const [statusContent, setStatusContent] = useState(false)

    const postCommands = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://164.92.177.109:8000/api/cards/',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                data: {
                    title,
                    content
                }
            })
            if (response) {
                setStatus("Command added!")
                setStatusContent(true)
            }
            setTimeout(() => {
                setReady(false)
            }, 1500, setReady(true))

        }
        catch (error) {
            setStatus("Error occured!")
            setStatusContent(false)
            setTimeout(() => {
                setReady(false)
            }, 1500, setReady(true), setStatus("Error occured!"))
        }
        setTitle('')
        setContent('')
    }

    return (
        <div className='post-command'>
            <div className={`status ${ready === true ? "status-active" : "status"}`}>
                <p className={`status-content ${statusContent === true ? "status-ok" : "status-error"}`}>{status}</p>
                <button className='cancel' onClick={() => { setReady(false) }}>x</button>
            </div>
            <form onSubmit={postCommands} method="post">
                <div className="input">
                    <input type="text" placeholder='Command Title' onChange={(e) => setTitle(e.target.value)} required value={title} />
                    <span className="top spaninp"></span>
                    <span className="bottom spaninp"></span>
                </div>
                <br /> <br />
                <div className="input">
                    <input type="text" className='content-input' placeholder='Command Content' onChange={(e) => setContent(e.target.value)} required value={content} />
                    <span className="top spaninp"></span>
                    <span className="bottom spaninp"></span>
                </div>
                <button className='submit' type='submit'>Post</button>
            </form>
        </div>
    )
}


export default PostCommand