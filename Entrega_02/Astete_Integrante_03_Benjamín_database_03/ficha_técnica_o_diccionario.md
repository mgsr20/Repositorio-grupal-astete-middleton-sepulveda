# Ficha Técnica de la Base de Datos 
*Por Benjamín Astete*


**Indicadores incluidos en la base de datos:** PIB y Tasa de Desempleo en Chile (2014–2024)  

---

## Fuente de los datos  
- **Producto Interno Bruto (PIB, variación % trinestral):** Banco Central de Chile (BCCh), Base de Datos Estadísticos (BDE).  
- **PIB en USD (trimestral):** Banco Central de Chile (BCCh), Cuentas Nacionales Trimestrales.   
- **Tasa de desempleo:** Banco Central de Chile (BCCh), Base de Datos Estadísticos (BDE).  

---

## Metodología de construcción de la base  
- Recopilé los datos trimestrales del **PIB real** a precios constantes en USD y la variación porcentual respecto del periodo anterior desde la plataforma del Banco Central de Chile.  
- Extraje los datos mensuales de la **tasa de desempleo promedio nacional** desde la Base de Datos Estadísticos del Banco Central.  
- Organicé los datos en una **serie de tiempo de 2014 a 2024**, permitiendo comparaciones en un período de una década.  
- Normalicé la base de datos en formato tabular: cada fila corresponde a un mes/año, y cada columna a una variable.  
- Como el PIB se mide de manera trimestral y la tasa de desempleo de manera mensual, dejé las filas de cada mes en que no se midió PIB con el espacio en blanco.

---

## Alcance de los datos  
- **Cobertura temporal:** 2014–2024.  
- **Cobertura geográfica:** Chile, nivel nacional.  
- **Periodicidad:** Trimestral y mensual.  
- **Unidad de análisis:** país.  

---

## Características de los datos  
- **Naturaleza:** cuantitativos, continuos.  
- **Formato de almacenamiento:** hoja de cálculo (.xlsx / .csv).  
- **Acceso:** público (disponibles en sitio web del Banco Central de Chile).  
- **Fiabilidad:** alta, por provenir de un organismo autónomo y de rango constitucional.  

---

## Variables incorporadas  

| Variable       | Descripción |
|----------------|-------------|
| Año            | Año calendario (2014–2024). |
| PIB (%)        | Tasa de crecimiento trimestral del Producto Interno Bruto real (variación porcentual respecto al trimestre anterior). Fuente: BCCh. |
| PIB USD (trimestral) | Valor trimestral del PIB de Chile expresado en millones de USD corrientes. Fuente: BCCh, Cuentas Nacionales Trimestrales. |
| Desempleo (%)| Tasa mensual de desocupación nacional. Fuente: Banco Central de Chile. |

---

## Otras observaciones  
- Los datos del **PIB** permiten identificar ciclos de expansión y recesión económica en Chile durante el período, incluyendo choques como la pandemia (2020) y la posterior recuperación.  
- Los datos de **desempleo** reflejan condiciones del mercado laboral, útiles para evaluar la capacidad adquisitiva de los consumidores y su impacto en el sector moda.   
- La **comparación conjunta** de las variables permite aproximarse a un indicador de prosperidad económica y poder de compra de los hogares, lo que nos servirá para analizar si hay una correlación entre moda (estética) y economía.