## Semana 6

**Wiki info** :
**Entrega Semana 5**
- [WIKI Entrega Semana 6](https://github.com/jchernandezUA/tswdc-project/wiki#semana-6)

**Resemble JS**

- Clonar repositorio
    ```
    git clone https://github.com/jchernandezUA/tswdc-project.git
    ```

- Ir a la carpeta:
    ```
    cd resemble-vtr-cypress
    ```

- Instalar dependencias:
    ```
    npm install
    ```

- Iniciar app:
    ```
    node server.js
    ```

- Ingresar a app : http://localhost:3001

- Correr pruebas en cypress

- Esperar resultados


## Semana 5
**Wiki Info**:
**Entrega Semana 5**
- [WIKI Entrega Semana 5](https://github.com/jchernandezUA/tswdc-project/wiki#semana-5)

## Pre requisitos para pruebas E2E

### S0
Probado en:

- Windows 10, 23H2
- MacOS 14.4.1 (23E224) (Apple Chip)

### Ghost v5.79.6
[Ghost](http://3.83.87.188/)
### Node JS
- [Instalar Node 18.20.1](https://nodejs.org/en/download)

### Cypress
Tener instalado Cypress
    ```
    npm install -g cypress
    ```

### Kraken
Tener instalado Kraken
- Ejecutar el siguiente comando para instalar kraken-node:
    ```
    npm install kraken-node -g
    ```
- Tener instalado Appium:
    ```
    npm install -g appium
    ```
    
## Instrucciones de ejecución:

### Cypress:
 - Dirigirse al folder /Cypress y ejecutar el siguiente comando
- Para instalar cypress se 

 - Correr el siguiente comando
    ```
    cypress open 
    ```

- Se abrirá la interface de cypress y se podran ejecutar de forma independiente las funcionalidades de cada ing automatizador por **/e2e/{{nombre_archivo}}_spec.cy.js**

 - También se puede correr el siguiente comando para correr las pruebas headless
    ```
        cypress run --headless
    ```
### Kraken
- Para ejecutar las pruebas E2E de Kraken se debe dirigit al path: **/kraken** ahí se encuentran los archivos .feature donde se describen los escenarios de prueba.

- Ejecutar los siguientes comandos para instalar las dependencias:
    ```
        npm uninstall -g android-platform-tools
        npm uninstall -g @cucumber/cucumber
        npm uninstall -g kraken-node
        npm uninstall -g appium
        npm install kraken-node
        npm install android-platform-tools
        npm install appium
    ```
    

- Ejecutar el siguiente comando para correr las pruebas:
    ```
         ./node_modules/kraken-node/bin/kraken-node run
    ```