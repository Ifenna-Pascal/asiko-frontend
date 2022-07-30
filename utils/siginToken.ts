import jwt from 'jsonwebtoken';
export const SignToken = async (message:string):Promise<string | null> => {
    console.log(process.env.NEXT_PUBLIC_JWT_SECRET_KEY, "secreettttt")
    const token = await jwt.sign({id:message}, <string>process.env.NEXT_PUBLIC_JWT_SECRET_KEY, {expiresIn: '1d'});
    return token
}