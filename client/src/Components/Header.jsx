import React, { use } from 'react'
import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle} from 'flowbite-react'
import { Link, useLocation} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { TextInput } from 'flowbite-react'
import { Button } from 'flowbite-react'
import {FaMoon} from 'react-icons/fa'
export default function Header() {
    const { pathname: path } = useLocation();
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap rext-sm sm:text-xl font-smibold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>WriteBlog</span>
      </Link>
      <form>
        <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden'color='gray' pill>  
        <AiOutlineSearch /> 
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon/>
        </Button>
        <Link to='sign-in'>
        <Button  color='blue' outline>
            Sign In
        </Button>
        </Link>
        <NavbarToggle/>
      </div>
        <NavbarCollapse>
            <NavbarLink active={path==='/'} as={'div'}>
                <Link to="/" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Home</Link>
            </NavbarLink>
            <NavbarLink active={path==='/about'} as={'div'}>
                <Link to="/about" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>About</Link>
            </NavbarLink>
            <NavbarLink active={path==='/projects'} as={'div'}>
                <Link to="/projects" className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Projects</Link>     
            </NavbarLink>
        </NavbarCollapse>
    </Navbar>
  )
}

