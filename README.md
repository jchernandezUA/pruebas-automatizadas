
# Entrega semana 8

## Estrategia de prueba Iteración 2

[Estrategia de pruebas](https://docs.google.com/document/d/1SiC4mFt7aXQlbWtTW95Yu3lOwNw_WuzeraLuIoh-hwY/edit)

[Presentación](https://docs.google.com/presentation/d/1H7pdN-zZUboWrjtjD3UjZvZBsLQmM4VQhxNwQwjFXu8/edit?usp=sharing)

[Retrospectiva](https://easyretro.io/publicboard/GojAETTB3MRpmIO2MQ72vAwiAQZ2/e48b2c61-9424-414a-b307-5b322abeab69)

[Video](https://drive.google.com/file/d/14iPNxhwgRcTX_5c3n0X3CeU9XyrkPwsE/view?usp=drive_links)


### Resultados Semana 1
**Inventario de pruebas semana 1**
[Inventiario](https://docs.google.com/spreadsheets/d/1IGSLCSQaI5zIwyktE9IdXIzEOmO76j8_/edit?usp=sharing&ouid=109467681455241057941&rtpof=true&sd=true)

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
- [Issue 94](https://github.com/jchernandezUA/tswdc-project/issues/94)
- [Issue 95](https://github.com/jchernandezUA/tswdc-project/issues/95)
- [Issue 96](https://github.com/jchernandezUA/tswdc-project/issues/96)
- [Issue 97](https://github.com/jchernandezUA/tswdc-project/issues/97)
- [Issue 98](https://github.com/jchernandezUA/tswdc-project/issues/98)
- [Issue 99](https://github.com/jchernandezUA/tswdc-project/issues/99)
- [Issue 100](https://github.com/jchernandezUA/tswdc-project/issues/100)

#### Pre requisitos

**SISTEMA OPERATIVO**
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
