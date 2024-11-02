import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { image, bookId, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 border rounded-2xl p-6">
                <figure className='bg-gray-300 rounded-2xl'>
                    <img
                        className='h-[166px] py-8'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, idx) => <button className="btn btn-xs bg-[#F4FCF3] text-[#23BE0A] font-medium">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="font-medium">{category}</div>
                        <div className="">

                            <div className="rating">
                                <span className='mr-3'>{rating}</span>
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;