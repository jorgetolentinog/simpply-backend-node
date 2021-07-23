# SIMPPLY

## Requerimientos
- Node 12


## Scripts
- **install.sh**: Instala dependencias del proyecto
- **server.sh**: Ejecutar servidor en modo desarollo
- **test.sh**: Ejecuta pruebas
- **deploy.sh**: Despliegue el servicio


## Variables de entorno
Las variables de entorno se cargan automaticamente dependiendo del stage con el que se inicio serverless, ejm:
- **local**: env.local
- **dev**: env.dev
- **prod**: env.prod

*server.sh inicia serverless con el stage **local**.*

Todas las variables excepto AWS tienen los siguientes valores por defecto:
```
# AWS
AWS_ACCESS_KEY_ID='ACCESS_KEY_ID'
AWS_SECRET_ACCESS_KEY='SECRET_ACCESS_KEY'
AWS_REGION='us-east-1'

# AIRTABLE
AIRTABLE__BASE_ID='BASE_ID'
AIRTABLE__API_KEY='API_KEY'
AIRTABLE__API_TIMEOUT=3000
```

*Si esta trabajando en un torno local puede cambiar los valores creando el archivo **.env.local***


## Estructura
```
.
+-- src
|   +--config (contiene configuración)
|   +--service (contiene todos los servicios de casos de uso)
|   +--infrastructure (contiene problemas de infraestructura como la persistencia y la entrega)
```
