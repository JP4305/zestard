import Image from 'next/image';
import Link from 'next/link';
import FooterIcons from '../FooterIcons';
import './style.css'

const Footer = () => {
    return (
        <footer className="bg-[#f5f3ef] py-12 text-black">
            <div className="justify-items-center items-stretch grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[auto,1fr,1fr,2fr] gap-8 px-8 lg:mx-28">
                {/* About Column */}
                <div className='lg:col-span-1'>
                    <h4 className="font-semibold mb-4 text-lg">About</h4>
                    <ul className='gap-y-2 grid'>
                        <li className='text-black hover:text-green-500'><Link href="#">Our Story</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">Our Promise</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">Shipping</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">FAQs</Link></li>
                    </ul>
                </div>

                {/* More Info Column */}
                <div className='lg:col-span-1'>
                    <h4 className="font-semibold mb-4 text-lg">More Info</h4>
                    <ul className='gap-y-2 grid'>
                        <li className='text-black hover:text-green-500'><Link href="#">The Greenery</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">Skin Glossary</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">Terms of Use</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">Privacy Policy</Link></li>
                        <li className='text-black hover:text-green-500'><Link href="#">COA</Link></li>
                    </ul>
                </div>
                <hr className='border-b-black border md:hidden' />

                {/* Get In Touch Column */}
                <div className='col-span-2 lg:col-span-1'>
                    <h4 className="font-semibold mb-4 text-lg">Get In Touch</h4>
                    <p className='text-xs'>Have a question? Want to just say hello? Send us a message anytime at <a href="mailto:hello@lumaandleaf.com" className="text-green-500">hello@lumaandleaf.com</a></p>
                    <p className="mt-4 text-xs">The information and products on the site have not been evaluated by the FDA. The products are not intended to diagnose, treat, cure or prevent any disease.</p>
                </div>

                {/* Newsletter Column */}
                <div className='col-span-2 lg:col-span-1'>
                    <h4 className="font-semibold mb-4 text-lg">All of the Tea. None of the Spam.</h4>
                    <div className="flex mb-4">
                        <input type="email" placeholder="Enter your email" className="p-2 flex-1 focus:outline-none bg-transparent border-b-2 border-black" />
                        <button className="bg-black px-4 py-1 hover:bg-white text-white text-xs hover:text-black p-2 ml-2 rounded-3xl">SIGN UP</button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[30%,70%] justify-items-center md:justify-items-stretch items-center mt-4">
                        <div>
                        <img src="https://lumaandleaf.com/cdn/shop/files/lumafooterlogo_200x200.png?v=1622109079" alt="Logo" width={50} height={50} className="mr-4" />
                        </div>
                        <div className='mt-4 md:mt-0'>
                        <FooterIcons />
                        <p className="mt-4 text-xs w-60">© 2020 Luma & Leaf. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;