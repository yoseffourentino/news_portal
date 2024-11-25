import { useEffect, useState } from "react"
import ArticleForm from "../components/ArticleForm"
import logout from '../assets/logout.png'
import { Link } from "react-router-dom"

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
            {/* <Link to="/">
                <div className="logout-btn">
                    <img src={logout} alt="" />
                </div>
            </Link> */}
            <ArticleForm />
            <div className="article-container">
                <h1>NEWS ARTICLE PREVIEW</h1>
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