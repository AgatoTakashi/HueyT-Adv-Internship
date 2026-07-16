import navLogo from '../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar () {
    return (
        <>
            <nav className="nav">
                <div className="nav__wrapper">
                    <figure className="nav__img--mask">
                        <Image src={navLogo} alt="logo" className='nav__img' />
                    </figure>
                    <ul className="nav__list--wrapper">
                        <Link href={"/for-you"}>
                            <li className="nav__list nav__list--login">Login</li>
                        </Link>
                    <li className="nav__list nav__list--mobile">About</li>
                    <li className="nav__list nav__list--mobile">Contact</li>
                    <li className="nav__list nav__list--mobile">Help</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}