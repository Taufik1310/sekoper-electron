import { useContext } from 'react'
import { RiAdminFill, RiUser3Fill } from 'react-icons/ri'
import { AuthContext } from '../Contexts'

const UserCategory = () => {
    const { onOpenLogin, onAdmin } = useContext(AuthContext)

    const handleLoginAdmin = () => {
        onOpenLogin()
        onAdmin(true)
    }

    const handleLoginUser = () => {
        onOpenLogin()
        onAdmin(false)
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h1 className="text-zinc-400 text-2xl font-semibold mb-10">Masuk sebagai</h1>
            <div className='flex items-center gap-12 cursor-pointer'>
                <div className='p-5 rounded-sm shadow-[0_3px_10px_rgb(255,255,255,0.2)] text-zinc-400 text-center flex flex-col items-center w-48' onClick={handleLoginAdmin}>
                    <RiAdminFill size={64} />
                    <h2 className='my-3 text-2xl font-medium'>Admin</h2>
                    <p className='text-sm'>"Admin, penguasa kode dan raja data!"</p>
                </div>
                <div className='p-5 rounded-sm shadow-[0_3px_10px_rgb(255,255,255,0.2)] text-zinc-400 text-center flex flex-col items-center w-48' onClick={handleLoginUser}>
                    <RiUser3Fill size={64} />
                    <h2 className='my-3 text-2xl font-medium'>Pengguna</h2>
                    <p className='text-sm'>"Pengguna, pionir digital di dunia maya!"</p>
                </div>
            </div>
        </div>
    )
}

export default UserCategory