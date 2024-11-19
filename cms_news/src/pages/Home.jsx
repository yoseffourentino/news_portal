import { useEffect, useState } from "react"

export const Home = () => {
    const [articles, setArticles] = useState(null)
    
    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch('/api/articles')
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
                    <h1>{article.title}</h1>
                </div>
            ))

            }
        </div>
    </div>
)
}

export default Home