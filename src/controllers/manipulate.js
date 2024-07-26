const manipulate = (text) => {
    if (text.length === 1) {
        return [text]
    };

    let arrSprit = []
    let isRandom = true
    
    const listOfstr = Array.from(text)
    const lastOFCount = listOfstr.length - 1

    let count = 0
    let countReverse = 0

    const resultListManipulate = []

    while(isRandom) {
        let reverseStr = ''

        const splitStr = listOfstr.shift()
        arrSprit.push(splitStr)

        if(count > 0) { 
            listOfstr.push(arrSprit[count - 1])
        }

        for(let i = listOfstr.length - 1; i >= 0; i--) {
            const valueAtIndex = listOfstr[i]
            reverseStr += valueAtIndex
        }

        if (!resultListManipulate.includes(`${splitStr}${listOfstr.join('')}`)) {
            resultListManipulate.push(`${splitStr}${listOfstr.join('')}`)
        } 

        if (!resultListManipulate.includes(`${splitStr}${reverseStr}`)) {
            resultListManipulate.push(`${splitStr}${reverseStr}`)
        }

        if(lastOFCount === count) {
            arrSprit = []
            count = 0

            countReverse++

            if(countReverse === 2) {
                isRandom = false
            }
        }

        count++
    }

    return resultListManipulate
}


module.exports = {
    manipulate
}