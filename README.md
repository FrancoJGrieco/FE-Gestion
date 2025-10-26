# 🌿 Gestor de Supermercado

**Trabajo Final de Seminario 3-603 – UTN-INSPT**  
Autor: **Franco Jesús Grieco**  
Docente de la cátedra: **Prof. Daniel Mernoz**

---

## 📖 Descripción

El **Gestor de Supermercado** es un sistema web inspirado en la plataforma **Clover**, desarrollado como proyecto final de la asignatura Seminario del INSPT.  
El objetivo principal es **replicar las funcionalidades centrales** de la aplicación original, utilizando tecnologías actuales del ecosistema JavaScript.

El proyecto apunta a demostrar el dominio de un **ciclo completo de desarrollo**, desde el análisis y diseño del sistema hasta su implementación, pruebas y despliegue.

---

## 🎯 Objetivos

- Digitalizar el proceso de administración y registro de usuarios y entidades del sistema.
- Implementar un backend con **API REST** y **autenticación JWT**.
- Crear un **frontend interactivo** que reproduzca la experiencia visual y funcional de Clover.
- Gestionar datos en **PostgreSQL** con relaciones dinámicas.
- Implementar **logs de errores**, validaciones y manejo seguro de sesiones.
- Desplegar el proyecto en la nube.

---

## 🧩 Tecnologías Utilizadas

**Frontend**
- React + Vite
- React Router DOM
- Material UI (MUI)
- Axios (comunicación cliente-servidor)

**Backend**
- Node.js + Express
- PostgreSQL / Sequelize
- JWT Authentication

---

## ⚙️ Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/FrancoJGrieco/FE-Gestion.git
cd FE-Gestion
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
```bash
VITE_API_URL = 'http://localhost:5433/'
```

### 4. Ejecutar
```bash
cd frontend
npm run dev
```
### 5. Arquitectura
```bash
┣ 📂 FE_Gestion/
┃ ┣ 📂 src/
┃ ┃ ┣ 📂 assets/
┃ ┃ ┣ 📂 components/
┃ ┃ ┣ 📂 hooks/
┃ ┃ ┣ 📂 pages/
┃ ┃ ┣ 📂 services/
┃ ┃ ┗ App.jsx
┃ ┃ ┗ main.jsx
┃ ┃ ┗ routes.jsx
┣ 📄 README.md
┣ 📄 index.html
┗ 📄 .env.example
```