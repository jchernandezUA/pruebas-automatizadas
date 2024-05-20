# Semana 7

**Wiki info** :
**Entrega Semana 7**
- [WIKI Entrega Semana 7](https://github.com/jchernandezUA/tswdc-project/wiki#semana-7)

** Incidencias reportadas **
- [Issue 66](https://github.com/jchernandezUA/tswdc-project/issues/66)
- [Issue 67](https://github.com/jchernandezUA/tswdc-project/issues/67)
- [Issue 68](https://github.com/jchernandezUA/tswdc-project/issues/68)
- [Issue 69](https://github.com/jchernandezUA/tswdc-project/issues/69)
- [Issue 70](https://github.com/jchernandezUA/tswdc-project/issues/70)
- [Issue 71](https://github.com/jchernandezUA/tswdc-project/issues/71)
- [Issue 72](https://github.com/jchernandezUA/tswdc-project/issues/72)
- [Issue 73](https://github.com/jchernandezUA/tswdc-project/issues/73)
- [Issue 74](https://github.com/jchernandezUA/tswdc-project/issues/74)

### Generación de datos aleatorios

[Estrategias Kraken](https://github.com/jchernandezUA/tswdc-project/wiki/Descripci%C3%B3n-de-estrategias#descripci%C3%B3n-de-estrategias-kraken)
[Estrategias Cypress](https://github.com/jchernandezUA/tswdc-project/wiki/Descripci%C3%B3n-de-estrategias#descripci%C3%B3n-de-estrategias-cypress)

### Pre requisitos para pruebas

### S0
Probado en:

- Windows 10, 23H2 (64 bits)
- MacOS 14.4.1 (23E224) (Apple Chip)

### Ghost 5.79.6
[Ghost](http://54.205.168.32/)

#### Node JS
- [Instalar Node 18.20.1](https://nodejs.org/en/download)
- 
### Cypress
Tener instalado Cypress
    ```
    npm install -g cypress
    ```
### Faker-js
Tener instalado Faker-js
    ```
    npm install -g @faker-js/faker
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
 - Correr el siguiente comando para correr las pruebas headless
    ```
        cypress run --headless
    ```
### Kraken
- Para ejecutar las pruebas de Kraken se debe dirigit al path: **/kraken** ahí se encuentran los archivos .feature donde se describen los escenarios de prueba.

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
    ```s