// HOF that wraps a handler
// Checking the token from the cookie
// from JWT we decrypt it and decode the id and find the user with that id
// if there's no any user we just throw an error
// if it is we direct then 
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from './prisma'


export const validateRoute = (handler  ) => {
    return async(req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies.TRAX_ACCESS_TOKEN

        if(token) {
            let user
            try{
                const {id} = jwt.verify(token, 'hello')
                user = await prisma.user.findUnique({
                    where: {id}
                })

                if (!user){
                    throw new Error('Not real user')
                }
            } catch (error){
                res.status(401)
                res.json({error: 'Not Authorized'})
            }
            return handler(req, res, user)
        }
        res.status(401)
        res.json({error:'Not Authorized'})
    }
}