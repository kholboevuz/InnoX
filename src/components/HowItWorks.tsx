import { MixIcon, PaperPlaneIcon, ViewGridIcon } from '@radix-ui/react-icons'
import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface FeatureProps {
	icon: JSX.Element
	title: string
	description: string
}

const features: FeatureProps[] = [
	{
		icon: <CheckCircle />,
		title: "Ro'yxatdan o'tish",
		description:
			"Belgilangan muddatda talabgor ro'yxatdan o'tishi kerak boladi!",
	},
	{
		icon: <PaperPlaneIcon />,
		title: 'Loyihani yuklash',
		description:
			"Belgilangan muddatda talabgor o'zi va loyihasi haqida ma'lumotlarni topshirishi kerak boladi!",
	},
	{
		icon: <MixIcon />,
		title: "Testdan o'tishi",
		description: 'Belgilangan muddatda talabgor test topshirishi kerak boladi!',
	},
	{
		icon: <ViewGridIcon />,
		title: 'Loyiha taqdimoti',
		description:
			'Belgilangan muddatda talabgor loyihasi taqdimotini topshirishi kerak boladi!',
	},
]

export const HowItWorks = () => {
	return (
		<section id='howItWorks' className='container text-center py-24 sm:py-32'>
			<h2 className='text-3xl md:text-4xl font-bold '>
				InnoX{' '}
				<span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
					tanlovidan ro'yxatdan o'tish{' '}
				</span>
			</h2>
			<p className='md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground'>
				Bosqichma-bosqich qoʻllanma
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
				{features.map(({ icon, title, description }: FeatureProps) => (
					<Card key={title} className='bg-muted/50'>
						<CardHeader>
							<CardTitle className='grid gap-4 place-items-center'>
								{icon}
								{title}
							</CardTitle>
						</CardHeader>
						<CardContent>{description}</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
