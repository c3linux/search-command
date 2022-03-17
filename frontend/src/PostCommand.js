import React from 'react'

const PostCommand = () => {
    return (
        <div className='post-command'>
            <form method="post">
                <div className="input">
                    <input type="text" placeholder='Command Title'  />
                    <span className="top spaninp"></span>
                    <span className="bottom spaninp"></span>
                </div>
                <br /> <br />
                <div className="input">
                    <input type="text" placeholder='Command Content' />
                    <span className="top spaninp"></span>
                    <span className="bottom spaninp"></span>
                </div>
                


                <button>Post</button>
            </form>
        </div>
    )
}


export default PostCommand