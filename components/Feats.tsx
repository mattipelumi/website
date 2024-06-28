import React from 'react';
import Image from 'next/image';

const Feats = () => {
	return (
		<div>
			<div className='bg-black py-20 sm:py-20'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl lg:text-center'>
						<p className='mt-2 text-2xl text-center font-bold tracking-tight text-gray-300 sm:text-4xl'>
							All-in-one destination for Photography and Videography services.
						</p>
						<p className='mt-14 text-lg leading-8 text-gray-00'>
							Whether it's the elegance of a wedding, the sleek lines of an
							automobile, the intimacy of a portrait, or the vibrancy of an
							event, we are here to ensure each moment is immortalized with
							professionalism and creativity.
						</p>
					</div>
					<div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
						<dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
							<div className='relative pl-16'>
								<dt className='text-base font-semibold leading-7 text-gray-300'>
									<div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-300'>
										<img
											id='dimg_p859ZsvhDfTlxc8Ph8mL8A4_321'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfllYSw8AydwVXY3cCjriuDpc1a6jbW_nFcg&amp;s'
											className='YQ4gaf'
											height={225}
											style={{ objectPosition: '25% 30%' }}
											width={225}
											alt='Winter Wedding Couple SVG File for ...'
											data-ilt='1719520936821'
										/>
									</div>
									Weddings
								</dt>
								<dd className='mt-2 text-base leading-7 text-gray-300'>
									From intimate ceremonies to grand celebrations, we work
									closely with you to ensure every moment is captured with
									precision and artistry.
								</dd>
							</div>
							<div className='relative pl-16'>
								<dt className='text-base font-semibold leading-7 text-gray-300'>
									<div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-300'>
										<img
											id='dimg_p859ZsvhDfTlxc8Ph8mL8A4_321'
											src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfllYSw8AydwVXY3cCjriuDpc1a6jbW_nFcg&amp;s'
											className='YQ4gaf'
											height={225}
											style={{ objectPosition: '25% 30%' }}
											width={225}
											alt='Winter Wedding Couple SVG File for ...'
											data-ilt='1719520936821'
										/>
									</div>
									Automobiles
								</dt>
								<dd className='mt-2 text-base leading-7 text-gray-300'>
									From classic cars to luxury models and custom builds, we
									expertly showcase each automobile's essences. We capture the
									sleek lines, intricate details, and powerful presence of your
									vehicles.
								</dd>
							</div>
							<div className='relative pl-16'>
								<dt className='text-base font-semibold leading-7 text-gray-300'>
									<div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-300'>
										<svg
											className='h-6 w-6 text-white'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
											/>
										</svg>
									</div>
									Portraits
								</dt>
								<dd className='mt-2 text-base leading-7 text-gray-300'>
									We offer tailored sessions for individuals, families, seniors,
									couples, and corporate portraits, ensuring each photo reflects
									your unique personality and story.{' '}
								</dd>
							</div>
							<div className='relative pl-16'>
								<dt className='text-base font-semibold leading-7 text-gray-300'>
									<div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-300'>
										<svg
											className='h-6 w-6 text-white'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											aria-hidden='true'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
											/>
										</svg>
									</div>
									Events
								</dt>
								<dd className='mt-2 text-base leading-7 text-gray-300'>
									From corporate events and festivals to parties and
									celebrations, we capture the excitement and essence of every
									moment beautifully preserved.
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feats;
