# Análisis de Visualizaciones

## Estrategia visual general

La estrategia visual de las visualizaciones del proyecto se alinean con las del proyecto general: utilizar la estética de una revista de moda para acercar datos económicos duros.

*Plataforma*: Utilizamos la plataforma de **Flourish** para incorporar gráficos interactivos, por lo que cuando el lector pasa por encima de la visualización, se desglosa en mayor detalle los datos y estadísticas específicos.

*Colores*: En el caso de las visualizaciones, nos preocupamos de utilizar tonalidades que contrastaran entre sí para las distintas variables de los gráficos. Además, como utilizamos Flourish, los colores se oscurecen o aclaran de acuerdo a como el usuario interactúa con la visualización.

*Tipografía*: En el caso de los gráficos, mantuvimos una tipografía simple para hacerlo legible. 

## Detalle de las visualizaciones

### Visualización 1: IVCM

La visualización actúa como una introducción a lo que será el resto de la webstory, y sitúa al lector en lo que será el resto de la narrativa. Al comenzar por mostrar cuánta ropa compramos los chilenos, y contextualizamos sobre la creciente inflación, también generamos la pregunta ¿Cómo influye la economía en éste grafico que estoy viendo?, e incentiva al usuario a continuar leyendo.

### Visualización 2: IPC

Esta visualización actúa como el eje central de la Webstory, y permite argumentar toda nuestra hipótesis: la moda se comporta distinto al resto de las variables, aunque haya crisis. Podemos apreciar visualmente la brecha, y la drástica diferencia se comporta como un *hook* para el lector.

### Visualización 3: Importaciones Comparativas

Esta visualización termina por demostrar como el Vestuario, al posicionarse consistentemente con valores tan altos o incluso superiores a los de bienes esenciales (como Carne y Otros alimentos), que se establece una jerarquía de gasto en la mente del consumidor. Se comunica visualmente que la vestimenta no es un gasto marginal o fácilmente sustituible, sino una prioridad de consumo que resiste la presión inflacionaria.

## Generación de Visualizaciones

A pesar que durante entregas previas generamos nuestras visualizaciones con Python y Altair, en ésta entrega incorporamos el uso de **Flourish**, para que los gráficos fueran interactivos al estar adjuntos en la página web. Aún así, adjuntamos los códigos con los cuales se trabajó previamente, además de las bases de datos correspondientes.

## Ficha técnica base de datos.

### Visualización 1: IVCM
- Fuente de los datos: Instituto Nacional de Estadísticas -  https://www.ine.gob.cl/estadisticas/economia/comercio-servicios-y-turismo .
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Volumen Físico de Ventas | Rango temporal.

### Visualización 2: IPC
- Fuente de los datos: Banco Central -  https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_PRECIOS/MN_CAP_PRECIOS/IPC_DIV_2023/638415289755016902?cbFechaInicio=2024&cbFechaTermino=2024&cbFrecuencia=MONTHLY&cbCalculo=NONE&cbFechaBase= .
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Variación promedio | Rango temporal.


### Visualización 3: Importaciones Comparativas
- Fuente de los datos: Banco Central -  https://www.bcentral.cl/areas/estadisticas
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Porcentaje de Importaciones Relativas | Rango temporal.
