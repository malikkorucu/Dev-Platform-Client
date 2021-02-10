const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
    nuxtServerInit({dispatch},{req}){

        if(req.headers.cookie){
            let token = cookieparser.parse(req.headers.cookie).dev_token;
            dispatch('auth/initToken',token, {root:true})
        }
    }
}