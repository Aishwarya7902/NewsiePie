import { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
const NewsBoard = ({category}) => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        let url = `https://newsiepie-server.onrender.com/api/news?category=${category}`;
        fetch(url).then(resonse => resonse.json()).then(data =>{
            console.log(data);
            setArticles(data.articles)
        })
    }, [category])
    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            
            {articles
                .filter(news => news.title && news.description && news.url && news.urlToImage) // Filter out empty fields
                .map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        src={news.urlToImage}
                        url={news.url}
                    />
                ))}

        </div>
    )
}

export default NewsBoard