import { useEffect, useState } from "react"
import ArticleForm from "../components/ArticleForm"

export const Home = () => {
    const [articles, setArticles] = useState(null)
    
    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch('http://localhost:4000/api/articles')
            const article = await response.json()

            if(response.ok){
                setArticles(article)
            }
        }

        fetchArticle()
    }, [])

    return (
    <div className="home-container">
        <div>
            <ArticleForm />
            <div className="article-container">
                <h1>NEWS ARTICLE</h1>
                <div className="article-list">
                    { articles && articles.map((article) => (
                        <div key={article._id} className="article">
                            <h2>{article.title}</h2>
                            <img src={article.image} alt="" />
                            <p>{article.desc}</p>
                            <p>Author: {article.author}</p>
                            <p>Category: {article.category}</p>
                            <p>Content: {article.content}</p>
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    </div>
)
}

export default Home