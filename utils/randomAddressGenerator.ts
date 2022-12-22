import { messages } from "../statics/messages"

export const randomAddressGenerator:()=>[string, string]=()=>{
    return (
        [messages.TEH,
         `${messages.AREA} ${Math.ceil(Math.random()*21)}`]
    )
}