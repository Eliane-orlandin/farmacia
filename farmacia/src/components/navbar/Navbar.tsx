import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-teal-800 text-white shadow-md'>
                <div className="container flex justify-between text-lg mx-8 items-center">
                                      
                    <Link to='/home' className="text-2xl font-bold tracking-wide hover:text-teal-200 transition duration-200">
                        Farma Li
                    </Link>
                    
                    <div className='flex font-medium items-center'>
                        <Link to='/categorias' className='hover:text-teal-200 transition duration-200'>
                            Categorias
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;