
# Entrega semana 8

## Estrategia de prueba Iteración 2

[Estrategia de pruebas](https://docs.google.com/document/d/1SiC4mFt7aXQlbWtTW95Yu3lOwNw_WuzeraLuIoh-hwY/edit)

### Resultados Semana 1
**Inventario de pruebas semana 1**
[Inventiario](https://docs.google.com/spreadsheets/d/1jhxcXGVS1LDpgrUe5LTG2Xysj_VWqqY9FHFruOh10xE/edit?hl=es#gid=0)

**Incidencias reportadas**
- [Issue 79](https://github.com/jchernandezUA/tswdc-project/issues/79)
- [Issue 80](https://github.com/jchernandezUA/tswdc-project/issues/80)
- [Issue 81](https://github.com/jchernandezUA/tswdc-project/issues/82)
- [Issue 82](https://github.com/jchernandezUA/tswdc-project/issues/82)
- [Issue 83](https://github.com/jchernandezUA/tswdc-project/issues/83)
- [Issue 84](https://github.com/jchernandezUA/tswdc-project/issues/84)
- [Issue 85](https://github.com/jchernandezUA/tswdc-project/issues/85)
- [Issue 86](https://github.com/jchernandezUA/tswdc-project/issues/86)
- [Issue 87](https://github.com/jchernandezUA/tswdc-project/issues/87)
- [Issue 88](https://github.com/jchernandezUA/tswdc-project/issues/88)
- [Issue 89](https://github.com/jchernandezUA/tswdc-project/issues/89)
- [Issue 90](https://github.com/jchernandezUA/tswdc-project/issues/90)
- [Issue 91](https://github.com/jchernandezUA/tswdc-project/issues/91)
- [Issue 92](https://github.com/jchernandezUA/tswdc-project/issues/92)
- [Issue 93](https://github.com/jchernandezUA/tswdc-project/issues/93)

#### Pre requisitos

**SISTEMA OPERATIVO**
Probado en:
- iOS 17.5.1
- MacOS 14.4.1 (23E224) (Apple Chip)

#### Ghost 5.82.6
[Ghost](http://54.205.168.32/)

#### Node JS
- [Instalar Node 18.20.1](https://nodejs.org/en/download)

#### Cypress
Tener instalado Cypress
    ```
    npm install -g cypress
    ```
    
### Instrucciones de ejecución de pruebas VRT ResembleJS:
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
- Correr las pruebas para Safari:
    ```
    npx cypress run -b webkit
    ```
- Copiar todas las imagenes resultantes de la carpeta `cypress/screenshots` a la carpeta `vrt-results/screenshots`

- Correr las pruebas para Chrome:
    ```
    npx cypress run -b chrome
    ```
- Copiar todas las imagenes resultantes de la carpeta `cypress/screenshots` a la carpeta `vrt-results/screenshots`

- Correr el reporte:
    ```
    node browsers-vrt.js
    ```

- Ingresar a app : http://localhost:3001/
