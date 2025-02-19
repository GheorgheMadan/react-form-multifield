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

        // Aggiunge il nuovo articolo alla lista
        const updatedArticles = [...data, formData];
        setData(updatedArticles);

        // Reset del form
        setFormData(initialForm);
    };

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
                />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    placeholder="inserisci il nome dell'autore"
                    onChange={handleFormData}
                />
                <textarea
                    name="content"
                    placeholder="inserisci il contenuto"
                    value={formData.content}
                    onChange={handleFormData}
                >
                </textarea>
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    placeholder="inserisci la categoria"
                    onChange={handleFormData}
                />
                <button>INVIA</button>
            </form >
            <div className="container-cards">
                {data.map((article) => (
                    <div className="card">
                        <h2>{article.title}</h2>
                        <span>{article.author}</span>
                        <p>{article.content}</p>
                        <span>{article.category}</span>
                        <button>x</button>
                    </div>

                ))}
            </div>
        </>
    )
}