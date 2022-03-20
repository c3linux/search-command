import React, { useState } from 'react'
import axios from 'axios'
import Recaptcha from 'react-recaptcha'

const PostCommand = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState()
    const [ready, setReady] = useState(false)
    const [statusContent, setStatusContent] = useState(false)
    const [isVerified, setVerified] = useState(false)
    let recaptchaInstance;

    const callback = () => {
        console.log("captcha successfully loaded");
    }

    const postCommands = async (e) => {
        e.preventDefault();
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://164.92.177.109/53api54/15cards14/',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                data: {
                    title,
                    content
                }
            })
            if (response) {
                if (isVerified) {
                    recaptchaInstance.reset();
                    setStatus("Command added succesfully!")
                    setStatusContent(true)
                    setVerified(false)
                    setTitle('')
                    setContent('')
                }
                else {
                    setStatusContent(false)
                    setStatus("Please verify that you are human!")
                }
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
            }, 1500, setReady(true), setStatus("Error detected!"))
        }

    }

    const verifyCallback = (response) => {
        if (response) {
            setVerified(true)
        }
    }

    return (
        <div className='post-command'>
            <div className={`status ${ready === true ? "status-active" : "status"}`}>
                <p className={`status-content ${statusContent === true ? "status-ok" : "status-error"}`}>{status}</p>
                <button className='cancel' onClick={() => { setReady(false) }}>x</button>
            </div>
            <form onSubmit={(e) => { postCommands(e) }} method="post" id="commandpost">
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
            <br /><br />
            <div className='captcha'>
                <Recaptcha
                    ref={e => recaptchaInstance = e}
                    sitekey="6LecafYeAAAAAPaKW9GU0O4TLowzBkPoQcn9GohX"
                    onloadCallback={callback}
                    render='explicit'
                    verifyCallback={verifyCallback}
                    theme='dark '
                />
            </div>

        </div>
    )
}


export default PostCommand