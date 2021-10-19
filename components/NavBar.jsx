import Link from 'next/link'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function NavBar() {
    return (
        <div
            className='
                w-full max-w-7xl m-auto px-5 py-4
                bg-blue-500 text-white
                flex justify-between items-center rounded-bl-sm rounded-br-sm
            '
        >
            <div className='text-2xl font-semibold w-full text-center'>
                <Link href='/'>Book Store</Link>
            </div>
        </div>
    )
}
