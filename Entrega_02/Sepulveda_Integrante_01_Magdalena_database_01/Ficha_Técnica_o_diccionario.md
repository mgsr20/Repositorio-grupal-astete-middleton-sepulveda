# Ficha Técnica

## Fuente de los datos

**Google Trends**

https://trends.google.es/trends/

A través de la herramienta de Google que permite observar las búsquedas, y así el interés, de diferentes términos, se extranjeron datos en específico acerca de las ocho prendas, cada una calzando dentro de una u otra categoría. La herramienta también permite observar de forma mensual, en un tiempo determinado (en este caso desde 2014 hasta 2024), dentro de una región determinada (Chile).



**INE**

 https://www.ine.gob.cl/docs/default-source/%C3%ADndice-de-precios-al-consumidor/cuadros-estadisticos/series-empalmadas-y-antecedentes-historicos/series-empalmadas-diciembre-2009-a-la-fecha/serie-hist%C3%B3rica-empalmada-divisiones-ipc-diciembre-2009-a-diciembre-2023-xls.xlsx?sfvrsn=22c6d4d6_6&utm

El INE (Instituto Nacional de Estadística), publicó una "serie histórica empalmada con divisiones del IPC". Básicamente, una base de datos que contiene datos del IPC (Índice de Precios al Consumidor)dividios en diferentes divisiones desde diciembre del 2009 hasta diciembre del 2023. 

Estos datos son públicos y se pueden descargar mediante el portal estadístico del INE.


Necesitabamos específicamente la división de vestuario y calzado.


**Banco Central**

https://si3.bcentral.cl/Siete/ES/Siete/Cuadro/CAP_PRECIOS/MN_CAP_PRECIOS/IPC_DIV_2023/638415289755016902?cbFechaInicio=2024&cbFechaTermino=2024&cbFrecuencia=MONTHLY&cbCalculo=NONE&cbFechaBase=


A través del Banco Central conseguimos los datos faltantes de la división del IPC de vestuario y calzado, de los meses de enero hasta diciembre del 2024.



## Metodología de la construcción de la base

**Google Trends: interés entre dos estéticas**

Los datos se tuvieron que obtener en dos descargas separadas, ya que Google Trends solamente permite comparar hasta cinco términos de manera simultánea. 

Luego, se unificaron estas dos tablas, ligándolas finalmente con la variable temporal (2014 hasta 2024, mensual) que comparten.

Las prendas escogidas fueron buzo, polerón, zapatilla y top (las que clasificaremos como "low cost" o "cómodo") y luego falda, blusa, zapatos y bláiser (que sería la opción "ostentosa", "high cost").

Luego, para cada mes, generamos un promedio de los cuatro términos de cada grupo, para poder tener los datos de crecimiento o decrecimiento de interés mensual de cada estética.

**IPC Vestuario y Calzado**

En esta base de datos, decidimos que la variable económica seleccionada debe ser la más cercana que pueda retratar no solo el interés en la moda, sino realmente el consumo (oferta y demanda) de ella a través del IPC. 

Para esto, conseguimos datos del INE que contienen el IPC mensual, desde el 2009 hasta el 2023, que contiene diferentes divisiones del IPC.

Las divisiones son las siguientes:
- Alimentos y bebidas no alcohólicas
- Bebidas alcohólicas y tabaco
- Vestuario y calzado
- Vivienda y servicios básicos
- Equipamiento y mantención del hogar
- Salud
- Transporte
- Comunicaciones
- Recreación y cultura
- Educación
- Restaurantes y hoteles
- Bienes y servicios diversos

Filtramos dos cosas importante, Tuvimos que descartar los años previos al 2014, como también solamente considerar la columna de "vestuario y calzado".

Luego de esto, aún faltaban los datos mensuales de todo el año 2024. Para esto, consultamos datos del Banco Central y los agregamos a la tabla, para poder completar el rango de 2014-2024.

Esto también se complementó con la variable de variación mensual (%), para lograr apreciar el cambio de precios en un corto plazo, y así tener mayor precisión en los datos.

## Alcance de los datos

La cobertura temporal recolectada es mensual, y cuenta con los años de 2014 hasta el 2024. 

Como mencionamos, el propósito principal de este proyecto es poder aterrizar una tesis ampliamente discutida en contextos más angloparlantes (principalmente estudiado en Estados Unidos), como lo es la teoría de que la economía sí incide en los comportamientos de consumo e interés en la moda, como también el establecimiento de tendencias, dentro de un contexto chileno. Por esto, el alcance de los datos, desde una perspectiva geográfica es en el contexto Chileno.

De forma temática, cubrimos interés en prendas de moda, categorizandolo en dos tendencias, como también la variable económica del sector de vestuario y calzado.

## Características de los datos

Esta base de datos tiene origen mixto.

Los datos de tendencia en las prendas tuvieron que ser generados por nosotros, son primarios, como también el criterio que se generó para categorizar dentro cada prenda una cierta estética. Sin embargo, cabe destacar que la herramienta de Google Trends es completamente gratuita y accesible.

Los datos obtenidos del IPC son secundarios, pero también mixtos para lograr completar el rango temporal.Vienen de fuentes oficiales y confiables, tal como el INE como el Banco Central. 

Hay un total de 15 variables, además de las los datos de año y mes. A la vez, hay un total de 133 registros (133 meses, cada uno complementado con los datos de Trends, además del IPC).

La variable de año (2014-2024) y la de meses (en formato letra), se complementan para establecer el rango temporal de los datos recolectados.

## Variables incorporadas
Todas las variables de prendas individuales (falda, buzo, zapatos, bláiser, zapatillas, top, blusa, polerón) están en un rango del 0 hasta el 100. 100 significa popularidad máxima de un término, un máximo nivel de interés en la búsqueda, mientras que 50  y 0 significan que un término es la mitad de popular en relación con el valor máximo o que también no existían datos suficientes del término.

El promedio de ostentoso/lujoso comprende el promedio simple de falda, blusa, zapatos y bláiser, como un indicador de interés en prendas más lujosas/formales.

El promedio de low cost/cómodo, está compuesto por el promedio de buzo, polerón, zapatillas y top, también como un indicador general de interés por prendas cómodas.

El IPC de vestuario y calzado es el índice de precios al consumidor exclusivamente en bienes de vestuario y calzado. Los datos comprenden una mezcla entre las bases oficiales del INE y el Banco Central.

La variación mensual del IPC de vestuario y calzado es el cálculo de la variación (valga la redundancia) porcentual respecto al mes respectivo anterior. La variable permite observar cómo cambian los precios de prendas de vestir y el calzado de mes a mes. Por el hecho de ser mensaul, permite detectaqr patrones de alzas o caídad y relacionarlos con los datos de interés.

## Observaciones

Existen ciertas limitaciones y factores que debemos considerar con los datos recolectados.

Por un lado, Google Trends refleja un interés de búsqueda, no las ventas reales de estas cosas. No podemos asumir que una búsqueda en Google implica también una compra.

Por otro lado, el IPC es reflejo de una variación de precio, pero no volúmen de compra, sin embargo la variación de precio sí se puede ligar (de una manera más indirecta) con una mayor o menor demanda de los productos. Aunque directamente no refleje el aumento de ventas, es un buen indicador de un posible aumento de demanda (o desinterés), que podría afectar los precios de este.

Fue esencial también expandir los límites temporales de la investigación, la cual originalmente era desde el 2018 hasta el 2024. Aumentarla a una década, como también recopilar los datos de manera mensual, permiten tener una perspectiva más concreta y poder tener conclusiones más concretas a través de la base de datos.