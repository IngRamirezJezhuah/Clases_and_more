#base de como hacer una imagen para el contene
#usar una imagen base del modelo de node js
FROM node:18

#establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

#copiar package.json y package.log.jsom para instañar dependencias
COPY package*.json ./

#instalar dependencioas
RUN npm install

#copiar el codigo fuente el contenedor
COPY . .

#expandir el puerto en el que corre el servicio
EXPOSE 3000

#comando para iniciar el servicio
CMD [ "node", "index.js" ]