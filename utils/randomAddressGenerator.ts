import { messages } from "../statics/messages"

export const randomAddressGenerator:()=>[string, string]=()=>{
    return (
        [messages.TEH,
         `${messages.AREA} ${Math.floor(Math.random()*22)}`]
    )
}