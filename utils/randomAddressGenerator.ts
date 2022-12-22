import { messages } from "../statics/messages"

export const randomAddressGenerator=()=>{
    return ({
        city:messages.TEH,
        street: `${messages.AREA} ${Math.floor(Math.random()*22)}`
    })
}