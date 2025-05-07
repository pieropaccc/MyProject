# Usa una imagen oficial de Playwright que ya tiene navegadores preinstalados
FROM mcr.microsoft.com/playwright:v1.52.0-jammy





# Crea la carpeta de trabajo
WORKDIR /app

# Copia solo los archivos de dependencias primero (mejor para cache)
COPY package*.json ./

# Instala dependencias del proyecto
RUN npm install --with-deps

RUN chmod -R 755 /ms-playwright

# Copia el resto del proyecto
COPY . .

# Corre los tests al iniciar el contenedor
CMD ["npx", "playwright", "test"]
