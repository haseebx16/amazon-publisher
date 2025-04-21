"use client";

import React from 'react'
import { useState } from 'react';
import ContactModal from '../components/ContactModal';


const PricingPlans = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <section className={` text-white mb-12 font-oswald damascus-pattern p-12 flex flex-col justify-center items-center`}>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-4xl text-orange-500 font-bold'>Our Pricing Plans</p>
            <p className='text-lg text-gray-300 text-center max-w-2xl mt-4'>Our podium of Amazon Legacy Press services offers you with an array of experienced ghostwriters, editors and publishing eccentrics who will together, transform your idea into a splendid yet commendable book.</p>
        </div>
        <div className={` flex md:flex-row  flex-col md:space-y-0  mt-6 space-y-2 md:space-x-2`}>
            {/* Pricing Plan: 01 */}
            <div className=' border-2 bg-black border-customYellow p-4 h-fit rounded-lg max-w-xs'>
                <h1 className='text-2xl bg-customYellow text-center text-black p-4'>Basic Package <br/></h1>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;A dedicated team of specialist proofreaders, Editors, Designers and a Project Manager.</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Designing /integrating book cover design (As per requirement)</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Publishing the book in all 3 formats (eBook, paperback & Hardcover)                </p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Thorough Review of your Manuscript</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Publication On Amazon</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% Ownership Rights</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% Satisfaction Guaranteed</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Unlimited Revisions</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Author Central page creation</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Amazon Optimization.</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% royalty on eBook for Author</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;70% royalty on Paperback and Hardcover for Author</p>
                {/* <p className='mt-4'><span className='text-red-500'>Note: The Amazon Best Seller Package guarantees you at least $20,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p> */}
                <button onClick={openModal} className='mt-4 bg-customYellow text-black hover:bg-customField duration-300 px-4 py-2'>Let's Get Started</button>
            </div>

            {/* Pricing Plan: 02 */}
            <div className=' border-2 bg-black border-customYellow h-fit p-4 rounded-lg mt-8 max-w-xs'>
               <h1 className='text-2xl bg-customYellow text-center text-black p-4'>Standard Package <br/></h1>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;A dedicated team of specialist proofreaders, Editors, Designers and a Project Manager.</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Designing /integrating book cover design (As per requirement)</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Publishing the book in all 3 formats (eBook, paperback & Hardcover)                </p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Thorough Review of your Manuscript</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Publication On Amazon, Kindle, Barnes & Noble</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% Ownership Rights</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% Satisfaction Guaranteed</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Unlimited Revisions</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Author Central page creation</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Amazon Optimization.</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% royalty on eBook for Author</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;70% royalty on Paperback and Hardcover for Author</p>
                {/* <p className='mt-4'><span className='text-red-500'>Note: The Amazon Prime Package guarantees you at least $40,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p> */}
                <button onClick={openModal} className='mt-4 bg-customYellow text-black hover:bg-customField duration-300 px-4 py-2'>Let's Get Started</button>
            </div>

            {/* Pricing Plan: 03 */}
            <div className=' border-2 bg-black border-customYellow h-fit p-4 rounded-lg mt-8 max-w-xs'>
                <h1 className='text-2xl bg-customYellow text-center text-black p-4'>Premium Package <br/></h1>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;A dedicated team of specialist proofreaders, Editors, Designers and a Project Manager.</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Designing /integrating book cover design (As per requirement)</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Publishing the book in all 3 formats (eBook, paperback & Hardcover)                </p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Thorough Review of your Manuscript</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Publication On Amazon, Kindle, Barnes & Noble, Good Reads, Apple Books Store & Google Book Store</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% Ownership Rights</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% Satisfaction Guaranteed</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Unlimited Revisions</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Author Central page creation</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;Amazon Optimization.</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;10 Custom Illustration</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;100% royalty on eBook for Author</p>
                <p className='mt-2'><span className='text-customYellow'>&#x2713;</span>&nbsp;70% royalty on Paperback and Hardcover for Author</p>
                {/* <p className='mt-4'><span className='text-red-500'>Note: The Amazon Platinum Package guarantees you at least $120,000 in revenue in the first year after the book is published, and if we fail to meet this goal, we will fully refund your money.</span></p> */}
                <button onClick={openModal} className='mt-4 bg-customYellow text-black hover:bg-customField duration-300 px-4 py-2'>Let's Get Started</button>
            </div>
            <ContactModal isOpen={isModalOpen} onClose={closeModal}/>
        </div>
    </section>
  )
}

export default PricingPlans