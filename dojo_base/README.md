### Modelo de problema

Este es un ejemplo para describir como definir una clase así como sus pruebas. 

### Metodología

Programación orientada a objetos + TDD

### Agenda

1. Planteo de problema (5 minutos)
2. Codificación (30 - 40 minutos)
3. Puesta en común (Hasta el final)

## Pasos para realizar el workshop 

1. Forkeamos el repo:

2. Clonamos nuestro fork:

    ```bash
        git clone https://github.com/juandomingo/dojo.git
    ```

### Pasos específicos para javascript
0. Instalar [Node Version Manager](https://github.com/creationix/nvm#installation)

1. Ingresar a la carpeta `javascript` del ejercicio sobre el cual vamos a trabajar.

2. Instalar la version de JS que figura en el file [.nvmrc], por ejemplo:

    ```bash
        nvm install 8.9.1
    ```
    > Este paso es necesario solo la primera vez que instalamos cada versión.

3. Decirle a nvm que version de node queremos utilizar

    ```bash
        nvm use
    ```
    > Este comando va a setear la version definida en el file [.nvmrc] como la version de node a utilizar

4. Instalamos las dependencias

    ```bash
        npm i
    ```

4. Ejecutamos los tests

    ```bash
        npm test
    ```

5. Miramos nuestra cobertura

    ```bash
        npm run coverage
    ```

### Pasos específicos para java

1. Ejecutamos los tests

    ```bash
        mvn cobertura:cobertura; open ./target/site/cobertura/index.html
        ( Estando en la carpeta que contiene el pom.xml )
    ```



#### Qué necesito?

1. Maven 3+ ( brew install maven )
2. JDK 1.7 u 1.8## Pasos para realizar el workshop


## Qué necesito?

1. Notebook para realizar workshop (si queres hacerlo, sino podes venir a compartir tus experiencias)
2. Ganas de compartir tu solución.
