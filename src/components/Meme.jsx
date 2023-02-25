import { useState } from 'react'
import memesData from '../memesData'

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/28j0te.jpg"
        }
    )

    const [allMemeImages, setAllMemesImages] = useState(memesData)

    function getMemeImage() {
        let memesArr = allMemeImages.data.memes
        let randomNum = Math.floor(Math.random() * memesArr.length)
        let newMemeImage = memesArr[randomNum].url
        setMeme( prevMeme => {
            return {
                ...prevMeme,
                randomImage: newMemeImage 
            }
        })
    }

    return (
        <main className="form-container">
            <div className="form" action="">
                <input type="text" className="form-input" placeholder="Top Text"/>
                <input type="text" className="form-input" placeholder="Bottom Text"/>
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} className="meme-image" />
        </main>

    )
}