import Lottie from 'react-lottie'
import animationData from './animation/innox.json'
export const HeroCards = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	return (
		<div className='hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px]  h-[500px]'>
			<Lottie options={defaultOptions} height={500} width={500} />
		</div>
	)
}
