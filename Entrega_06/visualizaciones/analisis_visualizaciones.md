# Análisis de Visualizaciones

## Estrategia visual general

La estrategia visual de las visualizaciones del proyecto se alinean con las del proyecto general: utilizar la estética de una revista de moda para acercar datos económicos duros.

*Plataforma*: Exceptuando la visualización 1, utilizamos la plataforma de **Flourish** para incorporar gráficos interactivos, por lo que cuando el lector pasa por encima de la visualización, se desglosa en mayor detalle los datos y estadísticas específicos.

*Colores*: En el caso de las visualizaciones, nos preocupamos de utilizar tonalidades que contrastaran entre sí para las distintas variables de los gráficos. Además, como utilizamos Flourish, los colores se oscurecen o aclaran de acuerdo a como el usuario interactúa con la visualización.

*Tipografía*: En el caso de los gráficos, mantuvimos una tipografía simple para hacerlo legible. 

## Detalle de las visualizaciones

### Visualización 1: IVCM

La visualización, elaborada con Altair, actúa como una introducción a lo que será el resto de la webstory, y sitúa al lector en lo que será el resto de la narrativa. Al comenzar por mostrar cuánta ropa compramos los chilenos, y contextualizamos sobre la creciente inflación, también generamos la pregunta ¿Cómo influye la economía en éste grafico que estoy viendo?, e incentiva al usuario a continuar leyendo.

### Visualización 2: IPC

Esta visualización actúa como el eje central de la Webstory, y permite argumentar toda nuestra hipótesis: la moda se comporta distinto al resto de las variables, aunque haya crisis. Podemos apreciar visualmente la brecha, y la drástica diferencia se comporta como un *hook* para el lector.

### Visualización 3: IPC

Utilizando la misma base de datos que para la visualización 2, elaboramos un segundo gráfico mostrando el progreso del IPC entre 2014 y 2023, en esta ocasión ponderando los bienes y servicios. Así podemos visualizar claramente como, a nivel macro, el vestuario tuvo un comportamiento diferente al común de los bienes.

### Visualización 4 : Importaciones Comparativas

Esta visualización termina por demostrar como el Vestuario, al posicionarse consistentemente con valores tan altos o incluso superiores a los de bienes esenciales (como Carne y Otros alimentos), que se establece una jerarquía de gasto en la mente del consumidor. Se comunica visualmente que la vestimenta no es un gasto marginal o fácilmente sustituible, sino una prioridad de consumo que resiste la presión inflacionaria.

### Visualización 5: Importaciones (valores absolutos)

Utilizando la misma base de datos que para las Visualización 4, elaboramos una visualización de los valores absolutos de las importaciones, mostrando la variable en millones de dólares, apreciando claramente como el vestuario es el bien que más dinero mueve en el mercado.

### Visualización 6: Google Trends

Para mostrar que el vestuario sigue siendo de interés de los chilenos inclusive en tiempos de crisis, adjuntamos una visualización del progreso temporal de la búsqueda de distintas prendas de ropa en Google Trends, apreciando de forma interactiva su evolución en el tiempo.

## Generación de Visualizaciones

Durante entregas previas generamos nuestras visualizaciones con Python y Altair, en ésta entrega incorporamos el uso de **Flourish**, para que los gráficos fueran interactivos al estar adjuntos en la página web. En el caso de la Visualización 1, utilizamos Altair para generarla, y así tener una variedad de plataformas con las que trabajamos. 

Adjuntamos los códigos con los cuales se trabajaron previamente los gráficos, además de las bases de datos correspondientes.

## Ficha técnica base de datos.

### Visualización 1: IVCM
- Fuente de los datos: Instituto Nacional de Estadísticas -  https://www.ine.gob.cl/estadisticas/economia/comercio-servicios-y-turismo .
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Volumen Físico de Ventas | Rango temporal.

### Visualización 2: IPC (I y II).
- Fuente de los datos: Banco Central -  https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_PRECIOS/MN_CAP_PRECIOS/IPC_DIV_2023/638415289755016902?cbFechaInicio=2024&cbFechaTermino=2024&cbFrecuencia=MONTHLY&cbCalculo=NONE&cbFechaBase= .
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Variación promedio | Rango temporal.

### Visualización 3: Importaciones Comparativas (I y II)
- Fuente de los datos: Banco Central -  https://www.bcentral.cl/areas/estadisticas
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Porcentaje de Importaciones Relativas | Rango temporal.

### Visualización 4: Ropa en tendencia según Google Trends
- Fuente de los datos: Google Trends - https://trends.google.cl/trends/?hl=es
- Alcance de los datos: La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024.
- Variables incorporadas: Porcentaje de Búsquedas | Tipo de prenda.
