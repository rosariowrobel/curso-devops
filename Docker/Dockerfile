# Imagen base de Node.js 22 (alpine para menor tamaño)
FROM node:22-alpine

# Configurar el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y realizar instalación de dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código al contenedor
COPY . .

# Copiar el script de entrada al contenedor y darle permisos de ejecución
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Exponer el puerto 3000
EXPOSE 3000

# Usar el script de entrada para ejecutar los comandos
CMD ["/app/entrypoint.sh"]
