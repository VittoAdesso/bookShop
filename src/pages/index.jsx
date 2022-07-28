import React from 'react';
import { useAppContext}  from '../store/store';
// import {Link}  from 'react-router-dom';
import Layout from '../components/layout'; 
import Book from '../components/book';

const Index = () => {

    // pass hook store, see is it an objetc in s
    const store = useAppContext();
    return (
        <Layout>
            {/* <Link to="/create">Create</Link> */}
            {store.items.map(item =>
                <Book key={item.id} item={item}/>
            )}
            

        </Layout>
    );
}

export default Index;
