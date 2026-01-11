import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='sticky shadow top-0 backdrop-blur z-50'>
        <nav className='border-gray-200 px-4 py-2.5'>
            <div className='justify-between flex flex-wrap items-center mx-auto max-w-7xl'>
                <Link to="/" className='flex items-center'>
                    <img 
                        src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png'
                        className="h-12"
                        alt="Logo"
                    />
                </Link>
                <div className='flex items-center lg:order-2'>
                    <Link to="/login" className='text-gray-900 focus:ring-4 focus:ring-orange-200 focus:outline-none font-mediu, rounded-lg text-sm px-4 py-2.5 text-center'>
                        Login
                    </Link>
                    <Link to="/register" className='text-white  font-medium rounded-lg bg-orange-400 text-sm px-4 py-2.5 text-center'>
                        GetStarted
                    </Link>
                </div>
                <div className='flex flex-wrap flex-row items-center w-xl justify-between px-8' >
                    <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-400 border-b' : 'text-gray-900 hover:text-orange-400 py-2.5 text-center transition-colors duration-200 '}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'text-orange-400 border-b' : 'text-gray-900 hover:text-orange-400 py-2.5 text-center transition-colors duration-200 '}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-orange-400 border-b' : 'text-gray-900 hover:text-orange-400 py-2.5 text-center transition-colors duration-200 '}>
                        Contact
                    </NavLink>
                    <NavLink to="/github" className={({ isActive }) => isActive ? 'text-orange-400 border-b' : 'text-gray-900 hover:text-orange-400 py-2.5 text-center transition-colors duration-200 '}>
                        GitHub
                    </NavLink>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header
