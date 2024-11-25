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

    const handleImage = async (e) => {
        const file = e.target.files[0]

        if(!file) return
            const data = new FormData()
            data.append("file", file)
            data.append("upload_preset", "article_image_upload")
            data.append("cloud_name", "dl1jazor2")

            const response = await fetch('https://api.cloudinary.com/v1_1/dl1jazor2/image/upload', {
                method:"POST",
                body: data
            })

            const uploadedImageURL = await response.json()            
            setImage(uploadedImageURL.url)
            console.log(uploadedImageURL.url)
    
                
    }

    return (
        <div className="form-container">    
            <form onSubmit={handleSubmit} className="form">
                <h3>Add New Article</h3>
                <div className="form-content">
                    <label>Add Title</label>
                    <input 
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-content">
                    <label>Add Category</label>
                    <input 
                        type="text"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                </div>
                <div className="form-content">
                    <label>Add Author</label>
                    <input 
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        value={author}
                    />
                </div>
                <div className="form-content">
                    <label>Add Image(URL)</label>
                    <input 
                        type="file"
                        onChange={handleImage}
                        // value={image}
                    />
                </div>
                <div className="form-content">
                    <label>Add short Description</label>
                    <input 
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    />
                </div>
                <div className="form-content-input">
                    <label>Add Content</label>
                    <textarea 
                        type="text"
                        rows={10}
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                    />
                </div>
                <button className="form-button">ADD ARTICLE</button>
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default ArticleForm
