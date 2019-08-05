const readline = require('readline-sync')
let a, b, z, testZ, array_Index, status
let negtestZ, negarray_Index, status_Neg

let Xvalues = Array(10000)
let Yvalues = Array(10000)
let negXvalues = Array(10000)
let negYvalues = Array(10000)

negarray_Index = -1
array_Index = -1
status = 0
status_Neg = 0



console.log("Use this as reference --> aX + bY = z")

a = Number(readline.question("Enter a: "))
b = Number(readline.question("Enter b: "))
z = Number(readline.question("Enter z: "))

console.log(`${a}X + ${b}Y = ${z}`)


for(x = 0; 1000 > x; x++){
    for(y = 0; 1000 > y; y++){

        testZ = a*x + b*y
        if(testZ === z){

            array_Index++

            Xvalues[array_Index] = x
            Yvalues[array_Index] = y
            
            status++
        }




    }


}

for(x = -1; -1000 < x; x = x - 1){
    for(y= -1; -1000 < y; y = y - 1){

        negtestZ = a*x + b*y
        if (negtestZ == z){

            negarray_Index++

            negXvalues[negarray_Index] = x
            negYvalues[negarray_Index] = y

            status_Neg ++

        }

    }
    
}




console.log(`Process status: ${status+status_Neg} solutions found!`)
console.log(`\n\n`)

if(array_Index === -1 && negarray_Index ===-1 ){
    console.log("No solution.")
}

else{

    console.log("For x >= 0 and y >= 0")
    for(i = 0; array_Index >= i; i++){

        console.log(`Solution Set ${i+1}`)
        console.log(`${a}*${Xvalues[i]} + ${b}*${Yvalues[i]} = ${z}`)
        console.log(`${a*Xvalues[i]} + ${b*Yvalues[i]} = ${z}`)
        console.log(`${a*Xvalues[i] + b*Yvalues[i]} = ${z}`)
        console.log(`X: ${Xvalues[i]} \nY: ${Yvalues[i]} \n `)
    }

    if(array_Index == -1){
        console.log("No known solutions for this interval...\n\n")
    }

            console.log("For -1 >= x and -1 >=y")
            for(ii = 0; negarray_Index >=ii; ii++){
               
                console.log(`Solution Set ${ii+1}`)
                console.log(`${a}*${negXvalues[ii]} + ${b}*${negYvalues[ii]} = ${z}`)
                console.log(`${a*negXvalues[ii]} + ${b*negYvalues[ii]} = ${z}`)
                console.log(`${a*negXvalues[ii] + b*negYvalues[ii]} = ${z}`)
                console.log(`X: ${negXvalues[ii]} \nY: ${negYvalues[ii]} \n `)
            }
            
            if(negarray_Index == -1){
                console.log("No known solutions for this interval...")
            }
}

console.log("")