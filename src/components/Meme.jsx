import { useState, useEffect } from 'react'

export default function Meme() {
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "https://i.imgflip.com/28j0te.jpg"
        }
    )

    const [allMemes, setAllMemes] = useState([])
    
    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then( res => res.json() )
            .then( genMeme => setAllMemes(genMeme.data.memes))
    }, [])

    console.log(allMemes)

    function getMemeImage() {
        let randomNum = Math.floor(Math.random() * allMemes.length)
        let newMemeImage = allMemes[randomNum].url
        setMeme( prevMeme => {
            return {
                ...prevMeme,
                randomImage: newMemeImage 
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme( prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="form-container">
            <div className="form" action="">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top Text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}