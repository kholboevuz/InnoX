import { HeroCards } from './HeroCards'
import { Button } from './ui/button'

export const Hero = () => {
	return (
		<section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10'>
			<div className='text-center lg:text-start space-y-6'>
				<main className='text-5xl md:text-7xl font-bold'>
					<h1 className='inline'>
						<span className='inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text'>
							InnoX
						</span>{' '}
						Sirdaryo yoshlar
					</h1>{' '}
					texnoparki{' '}
					<h3 className='inline'>
						<span className='inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text'>
							4 -
						</span>{' '}
						mavsum
					</h3>
				</main>

				<p className='text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0'>
					«INNO X» biznes-inkubatsiya dasturining 4-mavsum ishtirokchilarini
					nimalar kutmoqda?
				</p>

				<div className='space-y-4 md:space-y-0 md:space-x-4'>
					<a href='https://sirdaryotexnopark.uz/platform/login'>
						<Button className='w-full md:w-1/3'>Ro'yxatdan o'tish</Button>
					</a>
				</div>
			</div>

			{/* Hero cards sections */}
			<div className='z-10'>
				<HeroCards />
			</div>

			{/* Shadow effect */}
			<div className='shadow'></div>
		</section>
	)
}
