const {
    manipulate,
    findOddNumber,
    countSmilyFace
} = require('./src/controllers/index')

const main = () => {
    // manipulate
    console.log('-------------- manipulate ------------------')
    console.log(manipulate('a'))
    console.log(manipulate('ab')) 
    console.log(manipulate('abc')) 
    console.log(manipulate('aabb')) 

    // findOddNumber
    console.log('-------------- manipulate ------------------')
    console.log(findOddNumber([7]))
    console.log(findOddNumber([0]))
    console.log(findOddNumber([1,1,2]))
    console.log(findOddNumber([0,1,0,1,0]))
    console.log((findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])))

 
    // countSmilyFace
    console.log('-------------- countSmilyFace ------------------')
    console.log(countSmilyFace([':)', ';(', ';}', ':-D']))
    console.log(countSmilyFace([';D', ':-(', ':-)', ';~)']))
    console.log(countSmilyFace([';]', ':[', ';*', ':$', ';-D']))
}

main()