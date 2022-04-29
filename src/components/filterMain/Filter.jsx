import './filter.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Filter = () => {

    const [data, setData] = useState([]);
    const url = 'https://alibaraka.pythonanywhere.com/api/';
    const {category} = useParams();

    useEffect(() => {
        axios.get(`${url}${category}`)
            .then(response=>{
                setData(response.data);
            })
            .catch(error=>{console.log(`Error: ${error}`)
            })
    },[category])

  return (
    <>
    <div className="for-navbar">
    </div>
    <div className="container category">
        <div className="cat-header">
            {category}
        </div>
        <div className="category-container">
            {
                category === "products" && 
                data.map(item=>{
                    return (
                        <div className={item.name === null ? 'cat-none':'cat-product'} key={item.id}>
                            <div className="cat-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cat-details">
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
            {
                category === "questions" && 
                data.map(item=>{
                    return (
                        <div className={item.answer === null ? 'cat-none' : 'cat-question'} key={item.id}>
                            <h3>Question: {item.question}</h3>
                            <h3>Answer: {item.answer}</h3>
                        </div>
                    )
                })
            }
            {
                category === "stories" && 
                data.map(item=>{
                    return (
                        <div className={item.name === null ? 'cat-none':'cat-blog'} key={item.id}>
                            <div className="cat-img">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="cat-details">
                                <h3>{item.name}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div> 
    </>
  )
}

export default Filter