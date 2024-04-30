type operations = 'multiply'|'add'|'divide'

const calculator = (a:number, b:number, op: operations) =>{
    // if(!operations.includes(op)){console.log('Esa operacioon no es valida')}

    if(op=='multiply') return a*b
    if(op=='add') return a+b
    if(op=='divide') return a/b
}

console.log(calculator(1,6,'add'))