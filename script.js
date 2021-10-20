// ex 1
function persona(nombre, edad, cedula) {
    this.nombre = nombre
    this.edad = edad
    this.cedula = cedula
    this.mostrar = function () {
        return `nombre = ${this.nombre}; edad = ${this.edad}; cedula = ${this.cedula}`
    }
}

// let mipersona = new persona('Al', 18, 123456789)
// console.log(mipersona.mostrar())

// ex 2
function cuenta(titular, cantidad) {
    this.titular = titular
    this.cantidad = cantidad
    this.mostrar = function () {
        return `titular = ${this.titular}; cantidad = ${this.cantidad} `
    }
    this.ingresar = function (monto) {
        this.cantidad += monto
    }
    this.retirar = function (monto) {
        this.cantidad -= monto
    }
}

// let micuenta = new cuenta("blaze it", 420)
// console.log(micuenta.mostrar())
// micuenta.retirar(69)
// console.log(micuenta.mostrar())

// ex 3

function formulas() {
    this.sumar = function (num1, num2) {
        return num1 + num2
    }
    this.fibonacci = function (num) {
        if (num <= 0)
            return 0
        var fib1 = 0
        var fib2 = 1
        var temp
        while (num) {
            temp = fib1 + fib2
            fib1 = fib2
            fib2 = temp

            num--
        }
        return `${fib1}, ${fib2}`
    }
    this.operacion_modulo = function (num, mod) {
        return num % mod
    }

    this.primos = function (num) {
        if (num == 1)
            for (let i = 0; i < num; i++) {
                isPrime = true
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        isPrime = false
                        break
                    }
                }
                if (isPrime)
                    console.log(i + " is Prime")
            }
    }
}

let misformulas = new formulas()
console.log(misformulas.fibonacci(7))
console.log(misformulas.operacion_modulo(10, 3))
console.log(1 < 2)

// ex 4

function persona(nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre
    this.edad = edad
    this.dni = dni
    this.sexo = sexo
    this.altura = altura
    this.peso = peso

    this.calcularMC = function () {
        // se asume que el peso y la altura ya están en 
        // unidades de kilogramos y metros respectivamente

        var mc = this.peso / (altura ** 2)
        if (mc < 20)
            return -1
        else if (mc > 25)
            return 1
        else
            return 0
    }

    this.esMayorDeEdad = function () {
        if (this.edad >= 18)
            return true
        else
            return false
    }

    this.comprobarSexo = function (char) {
        // se asume que se el usuario ingresa la información
        // en el formato correcto
        if (this.sexo == char)
            return true
        else
            return false
    }
}

// ex 5

function contrasena(longitud, contrasena) {
    this.longitud = longitud
    this.contrasena = contrasena

    this.esFuerte = function () {
        // se asume que el atributo 'longitud' concuerda con
        // la longitud real de la contraseña
        var mayus = minus = nums = 0
        for (var i = 0; i < longitud-1; i++){
            var letra = this.contrasena[i]

            if (letra >= 0 && letra <= 9)
                nums++
            else if (letra == letra.toUpperCase())
                mayus++
            else if (letra == letra.toLowerCase())
                minus++
        }
        if (mayus >= 2 
            && minus >= 1
            && nums >= 2)
            return true
        else 
            return false
    }

    this.generarPassword = function(){
        this.contrasena = []
        var randchar
        for (let i = 0; i < this.length; i++) {
            randchar = Math.floor(Math.random() * this.longitud)
            this.contrasena.push(randchar)
        }
    }

    this.seguridadPassword = function(){
        // se asume que el atributo 'longitud' concuerda con
        // la longitud real de la contraseña
        var mayus = minus = nums = 0
        for (var i = 0; i < longitud-1; i++){
            var letra = this.contrasena[i]
            if (letra >= 0 && letra <= 9)
                nums++
            else if (letra == letra.toUpperCase())
                mayus++
            else if (letra == letra.toLowerCase())
                minus++
        }
        
        if(longitud >= 14 && (minus + mayus) >=1 && nums >=1)
            return "Seguridad de contraseña fuerte"
        else if(longitud >= 7 && (minus + mayus) >=1 && nums >=1)
            return "Seguridad de contraseña media"
        else if(longitud >= 1 && (minus + mayus) >=1 && nums >=1)
            return "Seguridad de contraseña débil"
        else 
            return "Seguridad de contraseña insuficiente"
    }
}

// ex 6

function contador(valor){
    this.valor = valor
    this.ultimoComando = ""
    this.ultimaActualizacion = valor
    this.reset = function(){
        this.valor = 0
        this.ultimoComando = "reset"
    }
    this.inc = function(){
        this.valor++
        this.ultimoComando = "incremento"
    }
    this.dec = function(){
        this.valor--
        this.ultimoComando = "decremento"
    }
    this.valorActual = function(){
        return this.valor
    }
    this.valorActual = function(valor){
        this.valor = valor
        this.ultimoComando = "actualizacion"
        this.ultimaActualizacion = valor
    }

    // ex 7
    this.ultimoComando = function(){
        switch(this.valorActual){
            case "reset":
                this.reset()
                break
            case "incremento":
                this.inc()
                break
            case "decremento":
                this.dec()
                break
            case "actualizacion":
                this.valorActual(this.ultimaActualizacion)
                break
        }
    }
}


