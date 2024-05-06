## Semana 5
**Wiki Info**:
**Entrega Semana 5**
- [WIKI Entrega Semana 5 VRT](https://github.com/jchernandezUA/tswdc-project/wiki#semana-5)

## Pre requisitos para pruebas E2E

### Ghost v5.79.6
[Ghost](http://3.83.87.188/)
### Node JS
- [Instalar Node 18.20.1](https://nodejs.org/en/download)

### Cypress
Tener instalado Cypress
    ```sh
        npm install -g cypress
    ```
### Kraken
Tener instalado Kraken
- Ejecutar el siguiente comando para instalar kraken-node:
    ```sh
    npm install kraken-node -g
    ```
- Tener instalado Appium:
    ```sh
    npm install -g appium
    ```
    
## Instrucciones de ejecución:

### Cypress:
 - Dirigirse al folder /Cypress y ejecutar el siguiente comando
- Para instalar cypress se 

 - Correr el siguiente comando
    ```sh
    cypress open 
    ```

- Se abrirá la interface de cypress y se podran ejecutar de forma independiente las funcionalidades de cada ing automatizador por **/e2e/{{nombre_archivo}}_spec.cy.js**

 - También se puede correr el siguiente comando para correr las pruebas headless
    ```sh
        cypress run --headless
    ```
### Kraken
- Para ejecutar las pruebas E2E de Kraken se debe dirigit al path: **/kraken** ahí se encuentran los archivos .feature donde se describen los escenarios de prueba.

- Ejecutar el siguiente comando para instalar las dependencias:
    ```sh
    npm install
    ```
    

- Ejecutar el siguiente comando para correr las pruebas:
    ```sh
         ./node_modules/kraken-node/bin/kraken-node run
    ```