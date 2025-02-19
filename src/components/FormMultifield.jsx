import { useState } from "react"
import { articles } from "../../Data/articles"

// FormMultifield.jsx
export default function FormMultifield() {

    const initialForm = {
        title: '',
        author: '',
        content: '',
        category: '',
        available: false
    }

    const [data, setData] = useState(articles)
    const [formData, setFormData] = useState(initialForm)


    const handleFormData = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
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
                <label htmlFor="available">Pubblico</label>
                <input type="checkbox"
                    checked={formData.available}
                    onChange={handleFormData}
                    name="available"
                    id="available"
                />
            </form >
            {data.length === 0 ? 'Nessun articolo disponibile' :
                <div className="container-cards">
                    {data.map((article) => (
                        <div className="card" key={article.id}>
                            <h2>{article.title}</h2>
                            <span>{article.author}</span>
                            <p>{article.content}</p>
                            <span>{article.category}</span><br />
                            <span className={article.available ? 'public' : 'private'}>{article.available ? 'Pubblico' : 'Privato'}</span>
                            <button onClick={() => deleteArticle(article.id)}>
                                X
                            </button>
                        </div>

                    ))}
                </div>
            }
        </>
    )
}