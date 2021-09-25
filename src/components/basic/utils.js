export const isArraEmpty = (arr) =>{
    if(arr !== null && arr !== undefined && arr.length > 0){
        return false
    }
    return true
}

export const dumpSms = (message) =>{
    console.log(message)
}

//export {isArraEmpty, dumpSms}