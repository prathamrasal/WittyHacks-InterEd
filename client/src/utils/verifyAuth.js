import { decode, verify } from "jsonwebtoken";
import cookie from 'cookie'

export const authVerification=(req)=>{
    if (req.headers.cookie) {
        const {token} = cookie.parse(req.headers.cookie);
        console.log(`Auth protection applied..`);
        try {
            let decodedData = verify(token,process.env.ACCESS_TOKEN_SECRET);
            console.log(`Detected Auth for user ${decodedData?.user?.name}`)
            return {admin : false, auth : true, user : decodedData.user}
        }catch(err) {
            console.log(`Undetected Auth`)
            return {admin : false,auth : false,user : {}}
        }
    }
    console.log(`Undetected Auth`)

    return {admin : false,auth : false,user : {}}
} 