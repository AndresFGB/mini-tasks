Mini Task Manager — Full Stack

Proyecto full-stack de gestión de tareas con autenticación JWT.

Este repositorio contiene **dos aplicaciones separadas**:

- Frontend → React + Tailwind + Axios  
- Backend → Laravel API + JWT

Cada proyecto tiene su propio README con instrucciones detalladas de instalación y ejecución.

---

##  Estructura del repositorio

mini-task-manager/
│
├── front-mini-task/ → Aplicación Frontend (React)
│ └── README.md → Guía de instalación del frontend
│
└── mini-task-manager/ → API Backend (Laravel)
└── README.md → Guía de instalación del backend


---

##  Arquitectura general

React App → Laravel API → MySQL
│ │
└── JWT Authentication ──┘


### Flujo principal

1. El usuario se registra o inicia sesión.
2. El backend genera un token JWT.
3. El frontend guarda el token en `localStorage`.
4. Axios envía el token en cada request.
5. El usuario puede gestionar sus tareas (CRUD).

---

## Orden recomendado para levantar el proyecto

 **Importante:** primero backend, luego frontend.

###  Backend (Laravel)

Ir a la carpeta:

/mini-task-manager


Seguir instrucciones del README del backend:

`mini-task-manager/README.md`

Esto levantará la API en:

http://127.0.0.1:8000/api


---

### Frontend (React)

Ir a la carpeta:

/front-mini-task


Seguir instrucciones del README del frontend:

`front-mini-task/README.md`

Esto levantará la app en:

http://localhost:5173


---

##  Funcionalidades del proyecto

### Autenticación
- Registro de usuario
- Login con JWT
- Logout
- Rutas protegidas

### Gestión de tareas
- Listar tareas del usuario autenticado
- Crear tarea
- Editar tarea
- Eliminar tarea
- Filtrar tareas por estado:
  - Pendiente
  - En progreso
  - Hecho

---

##  Tecnologías utilizadas

### Frontend
- React
- TypeScript
- TailwindCSS
- React Router
- Axios

### Backend
- Laravel
- JWT Auth
- MySQL
- REST API
