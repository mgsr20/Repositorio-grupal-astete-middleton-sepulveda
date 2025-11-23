## Documentación ##

El trabajo se hizo a partir de una nueva base de datos, ya que se estaba trabajando con una nueva hipótesis: la ropa como un “lujito accesible” en tiempos de crisis económica. 

Por lo tanto, se comenzó por obtener el IPC, específicamente, la serie histórica empalmada de diciembre de 2009 a la fecha, para poder hacer el análisis de la evolución histórica de los precios entre la alimentación y el vestuario.
Se usó la librería Pandas para cargar y procesar la base de datos extraída del INE. Se tuvo que filtrar el archivo para aislar las categorías de "Alimentos y bebidas no alcohólicas" y "Vestuario y calzado". Además, se realizó una normalización técnica de los datos, reemplazando los separadores decimales (comas por puntos) y convirtiendo las columnas de año y mes en un formato de fecha compatible con el de la librería.
La visualización se construyó utilizando la librería Altair, graficando la evolución temporal de los índices de precios de ambas categorías entre 2014 hasta la fecha. El objetivo fue contrastar visualmente la curva inflacionaria de los productos de primera necesidad frente a la estabilidad de precios del sector moda.
Se empleó un gráfico de líneas comparativas, situando el tiempo en el eje X y el valor del índice IPC en el eje Y. Para facilitar la lectura, se asignaron colores específicos según la línea gráfica del  proyecto (negro para la crisis alimentaria y rosa para el refugio del vestuario), permitiendo identificar rápidamente la divergencia económica que se produce entre ambos sectores.

# Fuentes #

Para comenzar a trabajar y responder la nueva hipótesis, se utilizó el INE como fuente principal. El Instituto Nacional de Estadística es el organismo oficial encargado de producir y difundir estadísticas en Chile, por lo que sus datos son accesibles, de carácter público y especialmente, vinculados a la realidad económica chilena.

El uso del IPC, específicamente de los precios de vestuario y alimentación, muestran la evolución de los costos de ambas aristas, siendo clave para mostrar las tendencias de la economía.


# Preguntas #

La visualización logra ilustrar y comprobar la nueva hipótesis, ya que demuestra el contraste entre los precios de la comida y el vestuario.

¿Existe una diferencia real entre la inflación de lo "necesario" (comida) y la inflación de lo "identitario" (ropa)?
¿Es el vestuario un "lujo accesible" en comparación con el costo de vida general?

¿Cómo afectó la crisis post-pandemia al precio de la ropa en comparación con los alimentos?

