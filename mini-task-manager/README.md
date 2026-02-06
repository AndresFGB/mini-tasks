# Mini Task Manager – Backend

Backend desarrollado en Laravel 12  que expone una  API REST  para autenticación de usuarios y gestión de tareas, utilizando  JWT  para seguridad y  MySQL  como base de datos.

El objetivo del proyecto es demostrar buenas prácticas en el diseño de APIs, autenticación segura y manejo de recursos protegidos por usuario.

---

##  Tecnologías utilizadas

- PHP 8.2+
- Laravel 12
- MySQL
- JWT Auth (`tymon/jwt-auth`)
- Composer

---

## Estructura del proyecto (relevante)

app/
├── Http/
│ ├── Controllers/
│ │ └── Api/
│ │ ├── AuthController.php
│ │ └── TaskController.php
├── Models/
│ ├── User.php
│ └── Task.php
routes/
└── api.php
database/
└── migrations/

##  Base de datos

### Tabla `users`

| Campo | Descripción |
|------|------------|
| id | Identificador |
| name | Nombre del usuario |
| email | Correo electrónico (único) |
| password | Contraseña cifrada |
| timestamps | Fechas de creación y actualización |

### Tabla `tasks`

| Campo | Descripción |
|------|------------|
| id | Identificador |
| user_id | Relación con `users.id` |
| title | Título de la tarea (obligatorio) |
| description | Descripción (opcional) |
| status | `pending` \| `in_progress` \| `done` |
| timestamps | Fechas de creación y actualización |

---

## Autenticación (JWT)

La autenticación se maneja mediante **JSON Web Tokens (JWT)**.

- El token se genera al iniciar sesión.
- No se almacena en la base de datos.
- El cliente debe enviar el token en cada request protegida.

### Header requerido

Authorization: Bearer {JWT_TOKEN}
---

##  Endpoints disponibles

### 🔹 Registrar usuario

**POST** `/api/register`

{
  "name": "Nuevo Usuario",
  "email": "nuevo@test.com",
  "password": "12345678"
}

Login (obtener token JWT)

**POST** /api/login

{
  "email": "nuevo@test.com",
  "password": "12345678"
}

Respuesta:

{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "token_type": "Bearer"
}

Listar tareas del usuario autenticado

**GET** /api/tasks
Requiere JWT

Crear tarea

**POST**  /api/tasks
Requiere JWT

{
  "title": "Primera tarea",
  "description": "Probando JWT",
  "status": "pending"
}

Actualizar tarea

**PUT** /api/tasks/{id}
Requiere JWT

{
  "title": "Tarea actualizada",
  "status": "done"
}

## Validaciones implementadas

- Email único y con formato válido
- Contraseña con mínimo 8 caracteres
- El campo status solo acepta:
    - pending
    - in_progress
    - done
- Cada usuario solo puede ver y modificar sus propias tareas

## Instalación y ejecución

correr xampp control panel
start Apache
start MySQL
http://localhost/phpmyadmin


composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate
php artisan serve
