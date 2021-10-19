import Head from './Head'
import NavBar from './NavBar'

export default function Layout({ children }) {
    return (
        <div className='m-auto max-w-7xl w-full'>
            <Head title='Book Store' />
            <NavBar />
            {children}
        </div>
    )
}
