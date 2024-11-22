import { useState } from "react"

const ArticleForm = () => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [content, setContent] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const article = {title, category, author, image, desc, content}

        const response = await fetch('http://localhost:4000/api/articles', {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setCategory('')
            setAuthor('')
            setImage('')
            setDesc('')
            setContent('')
            setError(null)
            console.log('new article added', json)
        }

    }

    const handleImage = (e) => {
        console.log(e.target.files)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <h3>Add New Article</h3>
            <div>
                <label>Add Title</label>
                <input 
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>
            <div>
                <label>Add Category</label>
                <input 
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                />
            </div>
            <div>
                <label>Add Author</label>
                <input 
                    type="text"
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
            </div>
            <div>
                <label>Add Image(URL)</label>
                <input 
                    type="file"
                    onChange={handleImage}
                    // value={image}
                />
            </div>
            <div>
                <label>Add short Description</label>
                <input 
                    type="text"
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />
            </div>
            <div>
                <label>Add Content</label>
                <input 
                    type="text"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                />
            </div>
            <button>Add Article</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default ArticleForm
