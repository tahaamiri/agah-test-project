import Logo from '../../assets/logo.png'
import Flag from '../../assets/flag.png'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex items-center justify-between py-3 px-[22px] bg-white rounded-[3750px] mx-5 sm:mx-10 md:mx-10 lg:mx-[160px] mt-[50px]'>
            <Image
                src={Logo}
                alt='logo'
                className='w-[95px] h-auto'
            />
            <Image
                src={Flag}
                alt='flag'
            />
        </div>
    )
}

export default Header