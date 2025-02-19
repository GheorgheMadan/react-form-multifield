import { useState } from "react"
import { articles } from "../../Data/articles"

// FormMultifield.jsx
export default function FormMultifield() {

    const initialForm = {
        title: '',
        author: '',
        content: '',
        category: ''
    }

    const [data, setData] = useState(articles)
    const [formData, setFormData] = useState(initialForm)


    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addArticle = (e) => {
        e.preventDefault();

        setData((currentList) => [
            ...currentList, { id: currentList.length > 0 ? currentList[currentList.length - 1].id + 1 : 1, ...formData }
        ]);

        setFormData(initialForm);
    };

    function deleteArticle(articleId) {
        const updatedArticles = data.filter((article) => {
            return article.id !== articleId
        })
        setData(updatedArticles)
    }

    return (
        <>
            <h1>LISTA ARTICOLI</h1>
            <form onSubmit={addArticle}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    placeholder="inserisci il titolo"
                    onChange={handleFormData}
                    required
                />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    placeholder="inserisci il nome dell'autore"
                    onChange={handleFormData}
                    required
                />
                <textarea
                    name="content"
                    placeholder="inserisci il contenuto"
                    value={formData.content}
                    onChange={handleFormData}
                    required
                >
                </textarea>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    placeholder="inserisci la categoria"
                    onChange={handleFormData}
                    required
                />
                <button>INVIA</button>
            </form >
            <div className="container-cards">
                {data.map((article) => (
                    <div className="card" key={article.id}>
                        <h2>{article.title}</h2>
                        <span>{article.author}</span>
                        <p>{article.content}</p>
                        <span>{article.category}</span>
                        <button onClick={() => deleteArticle(article.id)}>
                            X
                        </button>
                    </div>

                ))}
            </div>
        </>
    )
}