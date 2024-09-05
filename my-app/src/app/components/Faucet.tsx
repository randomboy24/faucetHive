import Image from 'next/image';
export const Faucet = () => {
	return (
		<div className='text-black'>
			<Image src={"/public/happySun.jpg"} alt="happy sun" width={40} height={40} />
		</div>
	)
}

