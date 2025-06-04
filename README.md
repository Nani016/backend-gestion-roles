
# Backend - Gestión de Roles y Usuarios

## Descripción
Este es el backend para una aplicación de gestión de roles y usuarios, construido con Node.js, Express y MongoDB.

## Instalación

1. Clonar el repositorio:
   ```
   git clone <URL_BACKEND>
   cd backend
   ```

2. Instalar dependencias:
   ```
   npm install
   ```

3. Crear archivo `.env` con la conexión a MongoDB:
   ```
   MONGO_URI=mongodb://localhost:27017/gestion_roles
   ```

4. Iniciar el servidor en modo desarrollo:
   ```
   npm run dev
   ```

5. Endpoints disponibles:
   - `POST /api/roles` - Crear un nuevo rol
   - `GET /api/roles` - Listar roles
   - `POST /api/usuarios` - Crear un nuevo usuario
   - `GET /api/usuarios` - Listar usuarios

