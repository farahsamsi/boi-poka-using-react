import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='bg-base-200 rounded-lg'>
                    <img
                        src={image}
                        className="max-w-[425px] rounded-lg p-16" />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className='text-xl font-medium py-4'>By : {author}</p>
                    <div className='border'></div>
                    <p className='text-xl font-medium py-4'>{category}</p>
                    <div className='border'></div>
                    <p className="py-6">
                        <span className='font-bold'>Review : </span>
                        <span className='text-black text-opacity-70'>{review}</span>
                    </p>
                    <div className='font-bold py-4 flex gap-4 items-center'>Tag :
                        <span className='flex justify-center gap-4'>
                            {
                                tags.map((tag, idx) =>
                                    <button
                                        key={idx}
                                        className="btn btn-xs bg-[#F4FCF3] text-[#23BE0A] font-medium">
                                        {tag}
                                    </button>)
                            }
                        </span>
                    </div>
                    <div className='border mb-4'></div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                {/* row 1 */}
                                <tr >
                                    <td className='text-[#595959]'>Number of Pages:</td>
                                    <td className='text-black font-semibold'>{totalPages}</td>
                                </tr>
                                {/* row 2 */}
                                <tr >
                                    <td className='text-[#595959]'>Publisher: </td>
                                    <td className='text-black font-semibold'>{publisher}</td>
                                </tr>
                                {/* row 3 */}
                                <tr >
                                    <td className='text-[#595959]'>Year of Publishing: </td>
                                    <td className='text-black font-semibold'>{yearOfPublishing}</td>
                                </tr>
                                {/* row 4 */}
                                <tr >
                                    <td className='text-[#595959]'>Rating: </td>
                                    <td className='text-black font-semibold'>{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='space-x-4 '>
                        <button className="btn btn-outline text-lg font-semibold">Read</button>
                        <button className="btn text-lg font-semibold bg-[#50B1C9] text-white">Whislist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;