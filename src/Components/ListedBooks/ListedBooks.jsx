import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {

    // ideally we will directly get the read book list from the database

    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    }, []);



    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Whislist</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read : {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My whislist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;