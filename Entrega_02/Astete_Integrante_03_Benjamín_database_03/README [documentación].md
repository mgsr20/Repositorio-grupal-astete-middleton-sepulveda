# Documentación del proceso de limpieza de datos  
*Por Benjamín Astete*
**Proyecto:** Correlación entre economía y tendencias de moda femenina en Chile (2014–2024)  

---

## Proceso de limpieza de datos

El proceso de limpieza de datos se realizó siguiendo los siguientes pasos:

1. **Importación de los datos originales**  
   - Se importaron los datos del **PIB trimestral (%)**, **PIB trimestral en USD** y **tasa de desempleo mensual (%)** desde los archivos XLX proporcionados por el Banco Central de Chile.  
   - Herramientas usadas: Microsoft Excel y Google Sheets.

2. **Selección de los años de análisis**  
   - En la misma página del **Banco Central de Chile**, se filtraron y seleccionaron los años **2014 a 2024**, que constituyen el período de análisis definido para la construcción de la base de datos.  

3. **Revisión de consistencia y formato**  
   - Se verificó que los valores de cada columna correspondieran al tipo de dato esperado: números decimales para PIB y desempleo, fecha/año para la columna de tiempo.  
   - Se estandarizó el formato de fechas:  
     - Años anuales: `YYYY`  
     - Trimestres: `YYYY-Tn` (por ejemplo, `2018-T1`)  

4. **Detección y tratamiento de valores faltantes**  
   - Se identificaron meses con valores faltantes (por medición en trimestres).  
   - Decisiones tomadas:  
     - Para el **PIB trimestral y desempleo**, se completaron datos faltantes realizando la alineación de los valores disponibles por criterio de mes/año, dejando espacios en blanco para los valores no registrados.  

5. **Verificación de duplicados**  
   - Se revisaron duplicados en las columnas `Año` y `Mes`.  
   - No se encontraron duplicados. 


6. **Ordenamiento de los datos con fórmulas en Excel**  
   - Se utilizaron **fórmulas en Excel** para **invertir valores y ordenar series**, asegurando que los datos se encontraran en las columnas y filas correspondientes por criterio de mes/año.  
   - Esto permitió garantizar que la secuencia temporal de los registros fuera consistente y estuviera correctamente alineada antes de aplicar cualquier transformación.  


¿7. **Validación final**  
   - Se generó una tabla para detectar valores atípicos.  
   - No se documentó una anomalía significativa.  

**Herramientas utilizadas:**  
- Microsoft Excel / Google Sheets.   

---

## Fuentes de datos utilizadas

| Fuente | Descripción | Justificación |
|--------|-------------|---------------|
| Banco Central de Chile (BDE) | PIB anual (%) y PIB trimestral en USD | Fuente oficial y confiable, datos públicos, permite medir crecimiento económico y variaciones trimestrales. |
| Banco Central de Chile (BDE) | Tasa de desempleo anual (%) | Fuente oficial y confiable, permite medir el estado del mercado laboral y poder adquisitivo. |

> Estas fuentes fueron elegidas por su **fiabilidad**, **acceso público** y relevancia directa con la variable económica de nuestro proyecto.  

---

## Ejemplos de preguntas que se pueden responder con la base de datos limpia

Al trabajar con la base de datos limpia, se pueden explorar múltiples preguntas. Algunos ejemplos:  

1. **Relación entre PIB, desempleo y adquisión de calzado y vestuario**  
   - Pregunta: ¿Existe correlación entre años de bajo crecimiento del PIB y aumento de la tasa de desempleo?  
   - Ante una eventual correlación, ¿existe una correlación entre PIB y/o desempleo en el volumen de adquisión sectorial de calzado y vestuario?


2. **Variaciones trimestrales del PIB en USD vs compra de vestuario**  
   - Pregunta: ¿Qué trimestres muestran mayor caída o crecimiento del PIB en USD durante 2018–2024? ¿Qué prendas experimentaron un auge en ventas durante ese período?

---

**Nota:**  
Este registro asegura transparencia y replicabilidad del trabajo periodístico, permitiendo que otros investigadores o periodistas puedan realizar nuevas iteraciones del proceso y validar los resultados.
