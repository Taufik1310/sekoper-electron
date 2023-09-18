import { ChangeEvent, useContext, useState } from "react"
import { AlertContext, AuthContext } from "../Contexts"

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { onEmailInvalid, onPasswordInvalid, onPasswordNotMatch, onFailRegister, onRegistered } = useContext(AlertContext)
    const { onOpenLogin } = useContext(AuthContext)

    const handleFormSubmitted = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        let data = {
            email: email,
            username: username,
            password: password,
            confirmPassword: confirmPassword
        }
        validateUser(data)
    }

    const validateUser = async (data: {
        email: string,
        username: string,
        password: string,
        confirmPassword: string
    }) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(data.email)) {
            onEmailInvalid()
            return
        }

        if (data.password.length < 8) {
            onPasswordInvalid()
            return
        }

        if (data.password !== data.confirmPassword) {
            onPasswordNotMatch()
            return
        }

        let dataSended = { email: email, username: username, password: password }

        try {
            const result = await window.database.insertUser(dataSended)
            if (result === undefined) {
                onFailRegister()
                return
            } 
            onRegistered()
            setEmail('')
            setUsername('')
            setPassword('')
            setConfirmPassword('')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-transparent rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-700">
                Daftar
                </h1>
                <form className="mt-6" onSubmit={handleFormSubmitted}>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-blue-50"
                        >
                            Email
                        </label>
                        <input
                            required
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-transparent border border-blue-700 rounded-md focus:border-blue-400 focus:ring-none focus:outline-none"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-blue-50"
                        >
                            Username
                        </label>
                        <input
                            required
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-transparent border border-blue-700 rounded-md focus:border-blue-400 focus:ring-none focus:outline-none"
                            value={username}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-blue-50"
                        >
                            Password
                        </label>
                        <input
                            required
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-transparent border border-blue-700 rounded-md focus:border-blue-400 focus:ring-none focus:outline-none"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-blue-50"
                        >
                            Konfirmasi Password
                        </label>
                        <input
                            required
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-blue-600 bg-transparent border border-blue-700 rounded-md focus:border-blue-400 focus:ring-none focus:outline-none"
                            value={confirmPassword}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Daftar
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-blue-50">
                    {" "}
                    Sudah punya Akun?{" "}
                    <span
                        className="font-medium text-blue-600 hover:underline cursor-pointer"
                        onClick={() => onOpenLogin()}
                    >
                        Masuk
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Register