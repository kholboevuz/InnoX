import Lottie from 'react-lottie'
import animationData from '../assets/step.json'
import { ChartIcon, MagnifierIcon, WalletIcon } from './Icons'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
interface ServiceProps {
	title: string
	description: string
	icon: JSX.Element
}

const serviceList: ServiceProps[] = [
	{
		title: 'Bozorni Tadqiq Qilish',
		description:
			'Bozorda o’z o’rniga ega bo’lish uchun, raqobatchilaringizni va nishon auditoriyangizni tushunish muhim. Bu sizning g’oyangiz bozorda qanchalik yaxshi o’rin egallashi mumkinligi haqida tushuncha beradi.',
		icon: <ChartIcon />,
	},
	{
		title: ' Moliyalashtirish',
		description:
			'Startupingizni qanday moliyalashtirishni rejalashtiring. Bu o’z mablag’laringiz, investorlardan yoki kreditlardan bo’lishi mumkin.',
		icon: <WalletIcon />,
	},
	{
		title: 'Marketing',
		description:
			' Mahsulotingizni targ’ib qilish uchun samarali marketing strategiyasini ishlab chiqing. Sizning brendingiz va mahsulotingiz haqida odamlar bilib olishlari kerak.',
		icon: <MagnifierIcon />,
	},
]

export const Services = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<section className='container py-24 sm:py-32'>
			<div className='grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center'>
				<div>
					<h2 className='text-3xl md:text-4xl font-bold'>
						<span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
							Startupni{' '}
						</span>
						qanday boshlash kerak?
					</h2>

					<p className='text-muted-foreground text-xl mt-4 mb-8 '>
						Sizda ajoyib biznes g’oyasi bormi va uni qanday amalga oshirishni
						bilmayapsizmi? Quyidagi qadamlar sizning startup safaringizni
						boshlash uchun kerakli yo’nalishni beradi:
					</p>

					<div className='flex flex-col gap-8'>
						{serviceList.map(({ icon, title, description }: ServiceProps) => (
							<Card key={title}>
								<CardHeader className='space-y-1 flex md:flex-row justify-start items-start gap-4'>
									<div className='mt-1 bg-primary/20 p-1 rounded-2xl'>
										{icon}
									</div>
									<div>
										<CardTitle>{title}</CardTitle>
										<CardDescription className='text-md mt-2'>
											{description}
										</CardDescription>
									</div>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>

				<div className='w-[300px] md:w-[500px] lg:w-[600px] object-contain'>
					<Lottie options={defaultOptions} height={300} width={300} />
				</div>
			</div>
		</section>
	)
}
