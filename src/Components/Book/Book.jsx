import React from 'react';

const Book = ({ book }) => {

    const { image, bookId, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-gray-300 rounded-2xl'>
                <img
                    className='h-[166px] py-8'
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By : {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;