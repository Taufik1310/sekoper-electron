import User from "../models/User"
import * as bcrypt from 'bcrypt'

export const createUsers = async () => {
    const UserData = [
        {
            email: 'admin123@gmail.com',
            username: 'Admin',
            password: bcrypt.hashSync('admin123', 10)
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

export const insertUser = async (email: string, username: string, password: string) => {
    try {
        const user = await User.create({
            email: email,
            username: username,
            password: bcrypt.hashSync(password, 10)
        })
        return user
    } catch (error) {
        console.error(error)
    }
}