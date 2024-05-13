# Semana 6

**Wiki info** :
**Entrega Semana 6**
- [WIKI Entrega Semana 6](https://github.com/jchernandezUA/tswdc-project/wiki#semana-6)

- [Link del vídeo en la semana en la Wiki](https://github.com/jchernandezUA/tswdc-project/wiki)

**Escenarios Ghost 5.79.6 **
[Escenarios](https://github.com/jchernandezUA/tswdc-project/wiki/Escenarios#5796)

**Escenarios Ghost 3.42 **
[Escenarios](https://github.com/jchernandezUA/tswdc-project/wiki/Escenarios#v342)

** Diferencias visuales **
- [Issue 46](https://github.com/jchernandezUA/tswdc-project/issues/46)
- [Issue 47](https://github.com/jchernandezUA/tswdc-project/issues/47)
- [Issue 48](https://github.com/jchernandezUA/tswdc-project/issues/48)
- [Issue 49](https://github.com/jchernandezUA/tswdc-project/issues/49)
- [Issue 50](https://github.com/jchernandezUA/tswdc-project/issues/50)

## E2E Screenshots (Cypress & Kraken)

### Pre requisitos para pruebas E2E

### S0
Probado en:

- Windows 10, 23H2 (64 bits)
- MacOS 14.4.1 (23E224) (Apple Chip)

### Ghost v3.42.0
[Ghost 3.42](https://ghost-nziq.onrender.com/)

#### Node JS
- [Instalar Node v14.21.3](https://nodejs.org/en/download)

* En Windows 10 o superior, para Ghost 3 es necesario tener instalado Python [3.10](https://www.python.org/downloads/windows/) pues es necesario para sqlite3 durante la instalación, así como
[Visual Studio C++ 2019 BuildTools](https://winstall.app/apps/Microsoft.VisualStudio.2019.BuildTools)

### Ghost v5.79.6
[Ghost 5.79](http://3.83.87.188/)

#### Node JS
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
 - Correr el siguiente comando para correr las pruebas headless
    ```
        cypress run --headless
    ```
 - Consultar pantallas en cypress/cypress/screenshots

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
 - Consultar pantallas en kraken/screenshots

**Resemble JS**

- Ir a la carpeta:
    ```
    cd resemble-vtr-cypress
    ```

- Abrir el reporte ubicado en vtr-results/report.html

Para crear un nuevo reporte:

- Instalar dependencias:
    ```
    npm install
    ```

- Iniciar app:
    ```
    node server.js
    ```

- Ingresar a app : http://localhost:3001/


**Backstop JS**


- Ir a la carpeta:
    ```
    cd backstop
    ```
- Ir al reporte
    ```
    cd html_report
    ```
- Abrir el archivo index.html

- Para correr un nuevo reporte
    ```
        npm install -g backstopjs
    ```  
    
    ```
        npx node script.js
    ```
