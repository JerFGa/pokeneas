# Pokeneas 🐾⚡

Microservicio contenerizado desarrollado en **Node.js** y **Express** que expone información estructurada y contenido multimedia sobre "Pokeneas" (personajes humorísticos inspirados en la jerga y cultura popular paisa / colombiana).

Desarrollado como práctica de contenedores y microservicios para la materia **Tópicos Especiales en Telemática** en la **Universidad EAFIT**.

---

## 🚀 Características

- **API REST (JSON):** Endpoint `/api` que retorna aleatoriamente los datos de un Pokenea (id, nombre, edad, altura, habilidad y una frase filosófica típica) junto con el **ID del contenedor Docker** que sirvió la petición (`os.hostname()`), permitiendo verificar balanceo de carga y replicación.
- **Vista Web Dinámica (HTML):** Endpoint `/` que renderiza una interfaz visual con la imagen del personaje y su frase célebre.
- **Contenerización Docker:** `Dockerfile` optimizado y liviano para despliegue inmediato en entornos locales, clústeres Docker Swarm o Kubernetes.

---

## 🛠️ Tecnologías

- **Runtime:** Node.js (v18+)
- **Framework Web:** Express.js
- **Contenedores:** Docker
- **Sistema & Red:** Módulos nativos `os` de Node.js

---

## 📦 Ejecución con Docker

### 1. Construir la imagen:
```bash
docker build -t pokeneas .
```

### 2. Ejecutar el contenedor:
```bash
docker run -p 80:80 pokeneas
```

### 3. Probar la aplicación:
- **Vista Web:** Abre en el navegador `http://localhost:80/`
- **API REST (JSON):** Abre o consulta vía cURL `http://localhost:80/api`

---

## 💻 Ejecución Local (sin Docker)

```bash
npm install
npm start
```
La aplicación iniciará en `http://localhost:80`.
