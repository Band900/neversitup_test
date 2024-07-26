const findOddNumber = (text) => {
    if(text.length === 0) {
        return 0
      }
      
      for(const itemType of text) {
        const validateType = typeof itemType
        if(validateType !== 'number') {
          return `function use number type on list only`
        }
      }
    
      const lastRun = text.length - 1
      
      for(let index = 0; index < text.length; index++) {
          const item = text[index]
    
          const filtterOne = text.filter((data) => data === item)
          if(filtterOne.length === 1) {
            return filtterOne[0]
          }
          
          if(lastRun === index) {
            return 0
          }
      }
}

module.exports = {
    findOddNumber
}