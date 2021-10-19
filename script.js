// ex 1
function persona(nombre, edad, cedula){
    this.nombre = nombre
    this.edad = edad
    this.cedula = cedula
    this.mostrar = function(){
        return `nombre = ${this.nombre}; edad = ${this.edad}; cedula = ${this.cedula}`
    }
}

// let mipersona = new persona('Al', 18, 123456789)
// console.log(mipersona.mostrar())

// ex 2
function cuenta(titular, cantidad) {
    this.titular = titular
    this.cantidad = cantidad
    this.mostrar = function(){
        return `titular = ${this.titular}; cantidad = ${this.cantidad} `
    }
    this.ingresar = function(monto){
        this.cantidad += monto
    }
    this.retirar = function (monto){
        this.cantidad -= monto
    }
}

// let micuenta = new cuenta("blaze it", 420)
// console.log(micuenta.mostrar())
// micuenta.retirar(69)
// console.log(micuenta.mostrar())

// ex 3

function formulas(){
    this.sumar = function(num1, num2){
        return num1 + num2
    }
    this.fibonacci = function(num){
        if (num <= 0)
            return 0
        var fib1 = 0
        var fib2 = 1
        var temp
        while(num){
            temp = fib1 + fib2
            fib1 = fib2
            fib2 = temp

            num--
        }
        return `${fib1}, ${fib2}`
    }
    this.operacion_modulo = function(num, mod){
        return num % mod
    }

    this.primos = function(num){
        if (num > 1){
            for(let i = 2; i < num; i++){
                if (num % i == 0)
                    return true 
            }
        }
    }
}

let misformulas = new formulas()
console.log(misformulas.fibonacci(7))
console.log(misformulas.operacion_modulo(10,3))
console.log(1<2)