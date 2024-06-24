import React from 'react';
import Image from 'next/image';
import pelu from '../assets/pelu.jpg';

const Hero = () => {
	return (
		<div>
			<div className='relative isolate px-6 pt-1 lg:px-8'>
				<div
					className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-40'
					aria-hidden='true'
				>
					<div className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]  sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]' />
				</div>
				<div className='mx-auto max-w-2xl py-12 sm:py-48 lg:py-56'>
					<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
						<div className='relative rounded-full px-3 text-sm leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
							Announcing our next round of funding
							<a href='#' className='font-semibold text-indigo-600'>
								<span className='absolute inset-0' aria-hidden='true' />
								Read more <span aria-hidden='true'>&rarr;</span>
							</a>
						</div>
					</div>
					<div className='text-center'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl'>
							Capturing the essense of every moment in still and motion pictures
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							From fleeting moments to lifelong memories. We capture the beauty
							of your special events
						</p>
					</div>
				</div>
				<div
					className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
					aria-hidden='true'
				>
					<div
						className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
