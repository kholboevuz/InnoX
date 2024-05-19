import Lottie from 'react-lottie'
import animationData from '../assets/innovation.json'
import { Statistics } from './Statistics'

export const About = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<section id='about' className='container py-24 sm:py-32'>
			<div className='bg-muted/50 border rounded-lg py-12'>
				<div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
					<div className='w-[300px] object-contain rounded-lg'>
						<Lottie options={defaultOptions} height={400} width={300} />
					</div>
					<div className='bg-green-0 flex flex-col justify-between'>
						<div className='pb-6'>
							<h2 className='text-3xl md:text-4xl font-bold'>
								<span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
									InnoX{' '}
								</span>
								Haqida
							</h2>
							<p className='text-xl text-muted-foreground mt-4'>
								O‘zbekiston Respublikasi Vazirlar Mahkamasining 2020-yil
								22-maydagi “Respublika hududlarida Yoshlar texnoparklarini
								tashkil etish chora-tadbirlari to‘g‘risida” 313-sonli qaroriga
								hamda O'zbekiston Respublikasi Innovatsion rivojlanish
								vazirligining 2022-yil 9-dekabrdagi 412-son qaroriga muvofiq
								"Sirdaryo yoshlar texnoparki"da "InnoX" biznes-inkubator
								akseleratsiya dasturi tashkil etildi.etish to‘g‘risida”
								buyrug‘iga muvofiq hududlarda yoshlarning tahliliy fikrlash,
								ularni ilmiq-tadqiqot va innovatsion faoliyatga keng jalb etish,
								iqtidorli tashabbuskor yoshlarning o‘z intellektual salohiyatini
								namoyon qilishi va ijtimoiy moslashuvi uchun zarur sharoitlar
								yaratish maqsadida Sirdaryo Yoshlar Texnoparki huzurida
								istedodli yoshlar uchun “InnoX” dasturi tashkil qilindi. Ushbu
								dastur asosida 18 yoshdan 35 yoshgcha bo‘lgan yoshlar orasida
								innovatsion loyihalar qabul qilinishi belgilab olindi.
							</p>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	)
}
