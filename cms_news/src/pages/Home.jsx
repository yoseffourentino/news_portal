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
    <div>
        <h1>NEWS ARTICLE</h1>
        <div>
            { articles && articles.map((article) => (
                <div key={article._id}>
                    <h2>{article.title}</h2>
                </div>
            ))

            }
        </div>
        <ArticleForm />
    </div>
)
}

export default Home