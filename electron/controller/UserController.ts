import User from "../models/User"
import * as bcrypt from 'bcrypt'

export const createUsers = async () => {
    const UserData = [
        {
            email: 'user123@gmail.com',
            username: 'User Nih',
            password: bcrypt.hashSync('user123', 10),
            isAdmin: false,
        },
        {
            email: 'admin123@gmail.com',
            username: 'Admin Nih',
            password: bcrypt.hashSync('admin123', 10),
            isAdmin: true,
        }
    ]
      
    try {
        await User.sync({ force: true })
        await User.bulkCreate(UserData)  
        console.log('Data user berhasil disisipkan.')
    } catch (error) {
        console.error('Gagal menyisipkan data user:', error)
    }
}

export const getUser = async (email: string, password: string) => {
    try {
        const user = await User.findByPk(email)

        if (!user) {
            return 404
        }

        const passwordMatch = bcrypt.compareSync(password, user.password)

        if (passwordMatch) {
            return user
        } else {
            return 500
        }
    } catch (error) {
        console.error(error)
    }
}

export const insertUser = async (email: string, username: string, password: string, isAdmin: boolean) => {
    try {
        const user = await User.create({
            email: email,
            username: username,
            password: bcrypt.hashSync(password, 10),
            isAdmin: isAdmin
        })
        return user
    } catch (error) {
        console.error(error)
    }
}