const countSmilyFace = (text) => {
    const smilePatternValid = [':' ,';', '-' ,'~', ')' ,'D']
    
    let countFaceSmile = 0
    for(const emotion of text) {
        const sreadEmo = Array.from(emotion)
        let count = 0;
        for(const emoSpread of sreadEmo) {
            const find = smilePatternValid.filter((data) => emoSpread === data) 
            const mouth =  sreadEmo[sreadEmo.length - 1]
            if(mouth === ')' || mouth === 'D') {
                // SMILE COUNT
                if (find.length > 0) {
                    count += find.length
                }
            }
            
        }

        if(count > 1) {
            countFaceSmile++
        }
    }

    return countFaceSmile
}

module.exports = {
    countSmilyFace
}