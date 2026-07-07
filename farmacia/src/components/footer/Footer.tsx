import { LinkedinLogo, GithubLogo, Briefcase } from "@phosphor-icons/react";

function Footer() {

    let data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-teal-900 text-white border-t border-teal-800">
                <div className="container flex flex-col items-center py-5 gap-2">
                    <p className='text-xl font-bold tracking-wide'>
                        Farma Li | Copyright: {data}
                    </p>
                    <p className='text-md text-teal-200'>Conecte-se conosco profissionalmente</p>
                                     
                    <div className='flex gap-4 mt-1'>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition duration-200">
                            <LinkedinLogo size={38} weight='bold' />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition duration-200">
                            <GithubLogo size={38} weight='bold' />
                        </a>
                        <a href="https://portfolio.com" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition duration-200">
                            <Briefcase size={38} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;