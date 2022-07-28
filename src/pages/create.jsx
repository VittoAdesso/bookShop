import React, { useState } from 'react';
import { useAppContext} from '../store/store';
// import {Link}  from 'react-router-dom';
import Layout from './../components/layout';

const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    const [intro, setIntro] = useState('');
    const [completed, setCompleted] = useState(false);
    const [review, setReview] = useState('');

    // pass a function 
    const store = useAppContext();


    function handleChange(e){
        // const textInput = e.target.textInput;
        // const valueInput = e.target.valueInput;

        switch (e.target.name) {
            case "title":
                setTitle(e.target.value);
                break;
            case "author":
                setAuthor(e.target.value);
                break;
            case "cover":
                setCover(e.target.value);
                break;   
            case "intro":
                setIntro(e.target.value);
                break;  
            case "completed":
                setCompleted(e.target.checked);
                break;
            case "review":
                setReview(e.target.value);
                break;

                default:
        }
    };

    function handleOnChangeFile(e) {
        const element = e.target;

        // to decodified img of local form always use its
        let file = element.files[0];
        const reader = new FileReader();
    
    // event of API     
        reader.onloadend = () => {
            setCover(reader.result.toString());
        }
        reader.readAsDataURL(file);
    };

    // to controll form
    function handleSubmit(e){
        e.preventDefault();
        const newBook ={
            id: crypto.randomUUID(),
            title,
            author, 
            cover, 
            intro, 
            completed,
            review,
        }
        // is a const before declare
        store.createItem(newBook);
    };

    return (
        <Layout>
        {/* <Link to="/">Home</Link> */}
        <form onSubmit={handleSubmit}>
            <div>
                <div>Title</div>
                <input type="text" name="title" onChange={handleChange} value={title}/>   
            </div>  
            <div>
                <div>Author</div>
                <input type="text" name="author" onChange={handleChange} value={author}/>   
            </div>
            <div>
                <div> Cover</div>
                {/* to select a file into the computer */}
                <input type="file" name="cover" onChange={handleOnChangeFile}/>   
                <div> { !! cover ? < img  src={ cover } alt="cover" width="200" height="preview"/> : ''} </div>
            </div>
            <div>
                <div>Introduction</div>
                <input type="text" name="intro" onChange={handleChange} value={intro}/>  
            </div>
            <div>
                <div>Completed</div>
                {/* is boolean */}
                <input type="checkbox" name="completed" onChange={handleChange} value={completed}/>   
            </div>
            <div>
                <div>Author</div>
                <input type="text" name="review" onChange={handleChange} value={review}/>   
            </div>

            <input type="submit" value="RegisterBook"/>
        </form>
        </Layout>
    );
}

export default Create;
