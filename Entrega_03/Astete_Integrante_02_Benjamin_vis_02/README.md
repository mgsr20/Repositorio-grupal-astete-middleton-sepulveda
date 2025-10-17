# Documentación del Proceso
Benjamín Astete

## 1. Proceso de Visualización
El dataset proviene del archivo limpio proporcionado con datos del **PIB**, **Tasa de Desempleo**, **IPC**, para ser un complemento con las series de interés por vestuario en Chile que recopiló mi compañera.  
Los pasos fueron:
1. Cargar y revisar el CSV original y asegurar consistencia de fechas y tipos de datos.
2. Convertir la columna de fecha a formato datetime mensual para 2014–2024.
3. Limpiar los valores numéricos: eliminar comas, reemplazar valores faltantes y convertir a tipo numérico.
4. Normalizar los valores de PIB, Desempleo e IPC mediante escalado min-max para compararlos en una misma escala (0-1).
5. Crear una visualización interactiva con Altair mostrando las tres variables macroeconómicas.
6. Exportar la visualización en formatos HTML (interactivo) y JPG (estático) para análisis y presentación.

**Nota metodológica:** El proceso se documentó cuidadosamente y se mantuvo la consistencia de fechas y valores para asegurar replicabilidad. Todas las transformaciones están registradas y son reversibles, permitiendo reproducir los resultados con los mismos datos originales.

## 2. Preguntas que responde
- ¿Cómo varía el desempleo frente al PIB en la última década?  
- ¿Qué patrones económicos se observan en los años de crisis, como la pandemia?  
- ¿Se correlacionan los descensos del PIB con aumentos en el desempleo?  
- ¿Cómo se comporta el IPC mensual en relación con el PIB y el desempleo?  
- ¿Existen momentos donde la inflación (IPC) impacta directamente en las tendencias de desempleo o crecimiento económico?  
- ¿Cómo varía el interés por prendas *low cost* y *high cost* según los ciclos económicos? 
- ¿Se puede observar un cambio en las preferencias de consumo de vestuario durante periodos de alta inflación o caída del PIB?

## 3. Ficha Técnica del Dataset
| Variable | Descripción |
|-----------|--------------|
| Mes | Mes de observación (enero 2014–diciembre 2024) |
| PIB | Producto Interno Bruto de Chile (USD millones) |
| Tasa_de_desempleo | Porcentaje de desempleo nacional |
| IPC | Índice de Precios al Consumidor general de Chile |
| PIB_normalizado | Escalado entre 0 y 1 para comparación visual |
| Desempleo_normalizado | Escalado entre 0 y 1 para comparación visual |
| IPC_normalizado | Escalado entre 0 y 1 para comparación visual |

## 4. Observaciones y anotaciones metodológicas
- Los datos muestran una correlación negativa fuerte entre PIB y Desempleo, particularmente evidente en 2020–2021, periodo de pandemia.  
- La incorporación del IPC permite evaluar cómo la inflación mensual se relaciona con las fluctuaciones del PIB y del desempleo.  
- El análisis de series de vestuario permite observar cómo los consumidores ajustan sus preferencias (*low cost vs high cost*) según el contexto económico.  
- Todas las transformaciones y normalizaciones fueron documentadas para garantizar replicabilidad, permitiendo reconstruir los indicadores normalizados a partir de los datos originales.  
- La visualización interactiva mensual permite identificar patrones finos y correlaciones temporales entre variables económicas y consumo de vestuario que no se capturan en agregados anuales.  
- Se recomienda mantener copias de los datos originales y registrar cualquier filtrado o imputación de valores faltantes para asegurar transparencia en futuros análisis.  
