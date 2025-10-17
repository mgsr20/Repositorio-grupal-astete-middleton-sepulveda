# Documentación
Benjamín Astete

## Fuentes consultadas
La base de datos fue construida a partir de información pública proveniente del **Instituto Nacional de Estadísticas (INE)** y del **Banco Central de Chile**.  
A partir de estas fuentes se recopilaron tres indicadores económicos clave para el período **2014–2024**:

- **Producto Interno Bruto (PIB)** trimestral y su variación respecto del trimestre anterior.  
- **Tasa de Desempleo**, medida mensualmente por el INE.  
- **Índice de Precios al Consumidor (IPC)** general y su variación mensual.  

Estos datos fueron integrados en una base unificada, ordenada cronológicamente y normalizada para permitir la **comparación visual y estadística** entre indicadores de distinta escala.  
La visualización final fue desarrollada con la librería **Altair (Python)**, permitiendo representar la evolución mensual de los tres indicadores en una misma gráfica interactiva.  

---

## Variables

### Fecha (Mes)
Corresponde a los meses comprendidos entre enero de 2014 y diciembre de 2024.  
Es la variable temporal que estructura toda la serie.

### PIB (USD)
Representa el Producto Interno Bruto trimestral de Chile expresado en millones de dólares estadounidenses.  
Es un indicador clave del crecimiento y la actividad económica del país.

### PIB variación respecto del trimestre anterior (%)
Indica el porcentaje de cambio del Producto Interno Bruto de Chile en relación con el trimestre inmediatamente anterior.  
Permite observar periodos de crecimiento o desaceleración económica.

### Tasa de desempleo (Porcentaje)
Representa el porcentaje de personas desocupadas dentro de la fuerza laboral del país.  
Su comportamiento se interpreta como un reflejo del dinamismo o fragilidad del mercado laboral.

### IPC (Índice de Precios al Consumidor)
Mide el nivel general de precios de bienes y servicios de consumo en Chile.  
Es un indicador central de la inflación y del costo de vida.

### IPC variación respecto del mes anterior (%)
Mide la variación mensual del Índice de Precios al Consumidor, indicador que refleja la inflación y el costo de vida en el país.  
Es útil para evaluar cómo los precios afectan el poder adquisitivo y las decisiones de consumo.

### PIB_normalizado, Desempleo_normalizado, IPC_normalizado
Variables creadas mediante un proceso de **normalización min-max** para comparar los tres indicadores en una misma escala (0 a 1).  
Esto permite visualizar sus tendencias relativas sin que las diferencias de magnitud distorsionen el análisis.

---

## Observaciones
- Se realizó una **limpieza y transformación de datos**, reemplazando valores vacíos y unificando formatos numéricos.  
- La normalización de las variables permitió generar un gráfico comparativo en el que se aprecian correlaciones entre los indicadores macroeconómicos.  
- El análisis busca observar de qué manera las fluctuaciones del PIB, la inflación y el desempleo podrían estar asociadas con los cambios en el interés por el consumo de vestuario, según los datos de Google Trends trabajados en etapas anteriores del proyecto.  
- El conjunto de datos se utilizó como base para una visualización interactiva que muestra la evolución mensual de estos indicadores, permitiendo relacionar períodos de estabilidad o crisis económica con transformaciones culturales en las preferencias de consumo.  
