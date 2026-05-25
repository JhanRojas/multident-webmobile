# multident-webmobile

Aplicación móvil híbrida desarrollada con Ionic React para la gestión de citas médicas y funcionalidades de accesibilidad.

---

# Tecnologías utilizadas

- Ionic Framework
- React
- TypeScript
- Vite
- Capacitor
- Node.js
- npm

---

# Requisitos previos

## Node.js

Verificar versión instalada:

```bash
node --version
```

Versión utilizada en el proyecto:

```bash
v22.22.3
```

---

## npm

Verificar versión instalada:

```bash
npm --version
```

Versión utilizada en el proyecto:

```bash
10.9.8
```

---

# Instalación de Ionic CLI

Instalar Ionic CLI globalmente:

```bash
npm install -g @ionic/cli@7.2.1
```

Verificar instalación:

```bash
ionic --version
```

Versión utilizada:

```bash
7.2.1
```

---

# Creación del proyecto

Crear proyecto Ionic React utilizando plantilla Tabs:

```bash
ionic start multident-webmobile tabs --type=react
```

---

# Instalación de dependencias

Ingresar al proyecto:

```bash
cd multident-webmobile
```

Instalar dependencias:

```bash
npm install
```

---

# Ejecución del proyecto

Levantar aplicación localmente:

```bash
ionic serve
```

La aplicación estará disponible normalmente en:

```text
http://localhost:8100
```

---

# Exposición HTTPS para dispositivos móviles

Para acceder desde dispositivos móviles mediante HTTPS se utilizó ngrok.

## Instalar ngrok

Descargar desde:

https://ngrok.com/download

---

## Iniciar túnel HTTPS

Ejecutar:

```bash
ngrok http 8100
```

ngrok generará una URL HTTPS pública similar a:

```text
https://xxxxxxxx.ngrok-free.app
```

La URL puede abrirse directamente desde un iPhone o dispositivo Android.

---

# Estructura del proyecto

```text
src/
├── components/
├── pages/
├── services/
├── utils/
├── theme/
└── App.tsx
```

---

# Funcionalidades implementadas

- Inicio de sesión
- Registro de usuarios
- Persistencia local con localStorage
- Gestión de autenticación
- Navegación protegida
- Gestión de citas médicas
- Accesibilidad
  - Modo alto contraste
  - Reducir animaciones
  - Lectura por voz
  - Cambio de idioma
  - Ajuste de tamaño de fuente

---

# Scripts útiles

## Ejecutar aplicación

```bash
ionic serve
```

---

## Ejecutar pruebas

```bash
npm test
```

---

## Formatear código

```bash
npx prettier --write .
```

---

# Configuración recomendada VS Code

## Extensiones

- Ionic
- ESLint
- Prettier
- TypeScript Importer

---

# Autor

Proyecto académico desarrollado para el curso de Interacción Hombre Máquina.