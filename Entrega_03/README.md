# Documentación

 Se trabajó con la base de datos limpia del proyecto, la cual reúne el interés mensual (2018–2024) por ocho prendas distintas (cuatro low cost y cuatro high cost), junto con el IPC de vestuario y su variación mensual.

 Sin embargo, en lugar de calcular el promedio del interés por categoría (lo cual sería erróneo en Google Trends por los valores relativos), se identificaron las prendas con el interés más alto y en cada categoría, lo cual nos dejó con las zapatillas y el zapato; el calzado.

 Se usó Pandas para limpiar y estructurar los datos. Se tuvo que eliminar las columnas de promedio, como también identificar las prendas de mayor tendencia. Después de esto, se aplicaron las nuevas columnas que las etiquetan como las representativas de su respectiva categoría. 


 La visualización se realizó con la librería Altair, mostrando la evolución temporal de ambas variables representativas junto al IPC de vestuario y calzado, para comparar cómo fluctúan las búsquedas frente al contexto de interés de precios. 

 Se utilizó un gráfico de líneas múltiples (3), con el tiempo en el eje X y las variaciones de interés e IPC en el eje Y.

También, con python, se calculó la correlación entre los factores analizados.

## Fuentes
En el _database_ original se generaron datos con Google Trends, como también se juntaron datos preexistentes del IPC (INE, Banco Central).

Las fuentes escogidas son oficiales y accesibles, por ende los datos generados por nosotros son también verificables y replicables. Los datos de las fuentes oficiales, como el INE y el Banco Central son de confianza, y nos permiten acceder a datos que se puedan vincular a la realidad económica chilena.

### Google Trends
Datos de interés de búsqueda mensual para 8 prendas seleccionadas, cada una perteneciente a una categoría de comodidad/ostentisidad (2014–2024).

Permite observar cambios en el comportamiento e interés de los consumidores en torno a distintos tipos de vestimenta.

### INE
Índice de Precios al Consumidor (IPC) de vestuario y calzado.
Refleja la evolución del costo de la ropa y el calzado en Chile, clave para conectar el análisis de tendencias con la economía.

### Banco Central de Chile
Datos complementarios de IPC 2024.
Completa la serie temporal hasta el año actual, asegurando coherencia y continuidad.


## Preguntas

¿Qué tipo de calzado apela más a las personas en momentos de crisis económica o inflación?

¿Podemos interpretar el interés en calzado como un indicador del poder adquisitivo de las personas? ¿Qué sucede con el factor cultural?

¿Existe una relación entre las variaciones del IPC y el interés por zapatos versus zapatillas?

¿Qué tipo de vestimenta (económica o de mayor valor) muestra mayor sensibilidad a los cambios en el contexto económico chileno?

