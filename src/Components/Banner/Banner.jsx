import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse px-28 lg:py-20 text-center">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className='space-y-6 md:space-y-12'>
                    <h1 className="text-3xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>

                    <button className="btn bg-[#23BE0A] font-bold text-white">Visit the List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;