# lab-unit-testing-dale Microservicio

En este archivo Léame, se encuentra toda la información relacionada con el proyecto de tipo microservicio que nos ayudará a ilustrar cómo funciona jest con nestjs

* Lea esto en otros idiomas: [Español](README.esp.md).

# Tabla de contenido
    -[Requisitos](#Requisitos)
    -[Instalación del paquete de nodo](#Node-package-installation)
    - [Variables de entorno](#Environment-Variables)
    - [Ejecutar](#Ejecutar-el-microservicio-en-entorno-local)
    -[Pruebas en ejecución](#Pruebas-en ejecución)
    -[Migraciones](#Migraciones)
    -[Ejecutar Docker](#Ejecutar-Docker)
    -[Estructura del proyecto](#Estructura-del-proyecto)
    - [Buenas prácticas](#Buenas-practicas)

# <a name="Requisitos">Requisitos</a>

Antes de iniciar el microservicio, recomendamos leer la documentación oficial.

[Documentación de Node.js](https://nodejs.org/en/docs/ 'Node')

[Documentación de NestJs](https://docs.nestjs.com/ 'Nodo')

[Documentación de Jest](https://jestjs.io/docs/getting-started 'Nodo')


Recuerde actualizar las rutas en el archivo dev.env

instale [Node.js](https://nodejs.org/en/ 'Node') en la versión 16.17.0

# <a name="Instalación del paquete de nodos">Instalación del paquete de nodos</a>

Antes de instalar las dependencias de npm, siga estos pasos cuidadosamente.



- En su terminal de código de Visual Studio: computadora: ejecute el comando `npm install` en la raíz del proyecto.

- Para ejecutar las pruebas unitarias y generar una cobertura, puede ejecutar el comando `npm run test:cov`


# <a name="Environment-Variables">Variables de entorno</a>

Su equipo puede compartir estos archivos con usted pero, si está comenzando desde cero, deberá crearlos usted mismo:

- Crear archivos `dev.env` y `test.env` en el directorio raíz. Use [dev.env.template](./dev.env.template) :link: y [test.env.template](./test.env.template) :link: como referencia y agregue sus secretos.

# <a name="Ejecutar-el-microservicio-en-el-entorno-local">Ejecutar Microservicio</a>

- ejecute el siguiente comando para iniciar el microservicio: computadora:

```concha
inicio de ejecución npm
```

- Ejecute el siguiente comando si desea ejecutar el microservicio en modo desarrollador: computadora:

```concha
npm ejecutar inicio: dev
```

- Puede acceder a la documentación una vez que el microservicio se esté ejecutando a través de las siguientes urls. [http://localhost:5011/docs]('http://localhost:5011/docs') :enlace:

# <a name="Pruebas-en-ejecución">Pruebas en ejecución</a>

Para ejecutar las pruebas, puede ejecutar cualquiera de los siguientes comandos :computadora: :

```concha
prueba de ejecución npm
```

```concha
npm ejecutar prueba: cov
```

```concha
prueba de ejecución npm: reloj
```

```concha
npm ejecutar prueba: depurar
```

```concha
npm ejecutar prueba: e2e
```

# <a name="Migraciones">Migraciones</a>

Si el microservicio tiene una conexión de base de datos configurada, se deben ejecutar los siguientes comandos, según su necesidad.

- Para aplicar las migraciones a nuestra base de datos, ejecute el siguiente comando :computadora: :

```concha
npm ejecutar typeorm:migrar
```

- Para realizar alguna reversión de una migración de base de datos, ejecute el siguiente comando: computadora::

```concha
npm ejecutar typeorm: revertir
```

- Para crear una nueva migración, ejecute el siguiente comando :computadora: :

```concha
npm ejecuta typeorm: genera src/db/migration/name-migration
```
- Reemplace name-migration con el nombre que desea darle a la nueva migración.

# <a name="Ejecutar-Docker">Ejecutar Docker</a>

en progreso

# <a name="Estructura-del-proyecto">Estructura del proyecto</a>

```sh
transferencia-validación-nestjs-ms/
├── src # En esta carpeta se encuentra el código de la aplicación
        ├── configuración
        ├── constantes
        ├── módulos
        ├── compartido
        ├── utilidades
        ├── main.ts
        ├── transferencia-validación-servicio.módulo.ts
├── prueba
├── dev.env
├── paquete.json
```
# <a name="Buenas-practicas">Buenas practicas</a>

Recuerda que todo el código que escribas en este microservicio debe estar en inglés, incluidos los comentarios.

No olvides que la descripción de los commit's también debe estar en inglés y el mensaje debe ser descriptivo con el código que vas a subir.
