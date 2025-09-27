
# Proceso

### Indicador económico

Para lograr establecer una relación entre diferentes indicadores económicos con el alza de interés/consumo con ciertos estilos de vestimenta, era esencial poder contar con un indicador económico que se relacione directamente con lo que es el consumo de bienes de vestuario y calzado. 

Para esto, descargamos el IPC, categorizado en una serie de divisiones, desde el INE. Esta base comprendía datos desde el 2009 hasta el 2023. Faltaban los datos mensuales del IPC en divisiones del año 2024 para lograr complementar la base. Estos datos fueron encontrados en la página oficial del Banco Central.

Complementando ambas fuentes, filtramos las divisiones para solamente considerar los datos de la categoría "vestuario y calzado". Luego, eliminamos los datos que queden fuera de nuestro rango temporal (los datos del 2009 hasta el 2013).

El IPC fue escogido ya que contiene datos mensuales, como también una serie de fuentes oficiales, y tiene el dato específico del sector moda. Relacionándolo a los datos que conseguimos posteriormente para reflejar el interés en diferentes prendas, podemos llegar a un análisis más sensible que digamos, con el PIB en general. 

**Los datos para el IPC de vestuario y calzado fueron descargados desde el INE como también por el Banco Central de Chile**

### Indicador de interés en moda

Antes de generar cualquier dato, establecimos dos categorías de estética, y luego le asignamos cuatro prendas a cada una, con una respectiva prenda "antónima" en la categoría opuesta.

- Comodidad/low cost: buzo, polerón, zapatillas, top.

- Ostentosa/lujosa: falda, bláiser, zapatos, blusa.

Ante cada término, se extrajeron datos con la herramienta de Google Trends, comprendiendo un rango de una década (2014-2024), en el contexto geográfico chileno. 

Debido al límite de máximo 5 términos por búsqueda en Google Trends, los datos fueron descargados en dos tandas, para luego ser unificados.

**Todos los datos de la variable moda fueron generados con Google Trends**

### Limpieza

Tras filtrar solamente los datos de vestuario y calzado, también se sumaron los datos de la variación mensual del IPC. 

Luego, ya que los meses estaban codificados en números del 1 al 12, fueron reemplazados por los meses escritos, para tener una lectura más simple y clara. 

Ya generando la base de datos completa, junté en un lado las prendas de la categoría de cómoda. Al finalizar esa serie de cuatro columnas, agregué un promedio de "low cost" mensual, para poder apreciar el alza y o baja de interés de la estética en general. Luego de esa columna, repetí lo mismo con las variables de ropa lujosa.

A esto se sumaron la tabla con las fuentes mixtas del IPC, como el agregado de la variación mensual. También faltaban los datos de la variación mensual de los meses del 2024, así que esos datos fueron calculados de forma manual.

# Fuente de datos

1. Google Trends (2014-2024, Chile)

Google Trends otorga una serie mensual de interés de búsqueda en ciertos términos. En este caso, necesitabamos tener un dato que logre reflejar un interés o desinterés con ciertos estilos de moda. 

Esos datos específicos, especialmente en Chile, no existen, así que Google Trends resultó ser la herramienta ideal.

A esto se suma el hecho de que es una herramienta gratuita, pública y replicable; permite medir un interés en ciertas prendas pero también establecer, a partir de esos datos, interés en ciertas estéticas. Los datos mensuales que otorga, permiten lograr detectar tendencias en moda y también correlacionarlos con hitos externos (como lo ha sido la pandemia, por ejemplo, y consecuentemente momentos de recesión económica).

2. Instituto Nacional de Estadísticas (INE)

El INE ofrece el índice oficial del precio al consumidor, como también una serie de divisiones (entre ellas vestuario y calzado). 

El INE es una fuente oficial de estadísticas del país; podemos establecer una base transparente y confiable. La serie obtenida también nos permite darle un contexto económico a las variaciones de interés en búsquedas detectadas con Google Trends.

3. Banco Central de Chile

Esta fuente aporta los índices faltantes para completar la serie de datos desde el 2014 hasta el 2024. Al igual que los datos del INE, estos, al provenir del Banco Central, mantienen la confianza y verificación de datos.

### Preguntas

¿Cuál es la variación de interés en prendas cómodas vs ostentosas a lo largo del tiempo?

¿Los datos de interés en búsqueda tienen una correlación con el aumento o decrecimiento del IPC de vestuario y calzado?

¿Hubo una relación entre la variación del IPC de vestuario y calzado en los años de la pandemia y el interés de búsqueda de estilos de prenda en Google Trends?

