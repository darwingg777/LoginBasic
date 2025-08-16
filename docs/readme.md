<p align="center">
  <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git Logo" width="80" height="80" />
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" width="80" height="80" />
</p>

# Actividad en Clase: Git y GitHub Básico

## Objetivo

Practicar el flujo básico de trabajo con Git y GitHub desde la terminal, incluyendo la creación de un repositorio local, configuración inicial, conexión con GitHub, y el uso básico de ramas.

---

## Requisitos

- Tener Git instalado.
- Tener una cuenta activa en GitHub.
- Tener acceso a la terminal (Git Bash en Windows).

---

## Parte 1: Crear el proyecto local

1. Crear una carpeta para el proyecto:

```bash
mkdir proyecto-clase
cd proyecto-clase
```

2. Crear un archivo de ejemplo:

```bash
nano README.md
```

> Escribe algo como "Este es mi primer proyecto con Git y GitHub" y guarda con `Ctrl + O`, luego `Enter` y sal con `Ctrl + X`.

3. Inicializar el repositorio:

```bash
git init
```

---

## Parte 2: Configuración de Git (una sola vez por usuario)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@example.com"
```

Verifica la configuración actual con:

```bash
git config --list
```

---

## Parte 3: Flujo básico de Git

1. Ver el estado del repositorio:

```bash
git status
```

2. Agregar un archivo específico al staging area:

```bash
git add README.md
```

O agregar todos los archivos:

```bash
git add .
```

3. Confirmar los cambios con un mensaje:

```bash
git commit -m "Primer commit: se agregó el README"
```

---

## Parte 4: Conectar con GitHub

1. Ir a GitHub y crear un nuevo repositorio vacío (sin README ni .gitignore).

2. Copiar la URL del repositorio (HTTPS o SSH).

3. Agregar el repositorio remoto:

```bash
git remote add origin https://github.com/usuario/proyecto-clase.git
```

4. Verificar que el remoto esté bien configurado:

```bash
git remote -v
```

5. Crear la rama principal `master` y subirla:

```bash
git branch -m master
git push origin master
```

---

> -M significa "rename forzado". Se usa en lugar de -m para evitar errores si ya existe una rama llamada master.

## Parte 5: Uso básico de ramas

1. Crear y cambiar a una nueva rama llamada `feature-readme`:

```bash
git checkout -b feature-readme
```

> El comando `git checkout -b` crea una nueva rama y cambia a ella directamente.

2. Hacer un cambio en el archivo `README.md`:

```bash
nano README.md
```

3. Guardar, agregar el archivo y hacer commit:

```bash
git add README.md
git commit -m "Se agregó información adicional al README"
```

4. Subir la nueva rama al repositorio remoto:

```bash
git push origin feature-readme
```

---

## Parte 6: Clonar un repositorio existente

Si quieres trabajar desde otra computadora o empezar desde cero con un repositorio remoto, puedes clonarlo con:

```bash
git clone https://github.com/usuario/proyecto-clase.git
```

---

## Parte 7: Verificación

1. Ir al repositorio en GitHub.
2. Verifica que existan dos ramas: `master` y `feature-readme`.
3. Revisa que los commits estén registrados y que el archivo `README.md` contenga el contenido actualizado.

---

## Entregable

- El enlace del repositorio en GitHub.
- Confirmación de que existen al menos dos ramas (`master` y una rama `feature-*`).
- Que haya al menos dos commits registrados.

---

## Preguntas de reflexión

- ¿Para qué sirve el comando `git status`?
- ¿Qué hace el comando `git add`?
- ¿Cuál es la diferencia entre `git add` y `git commit`?
- ¿Para qué se usa `git remote add origin`?
- ¿Qué hace el comando `git push`?
- ¿Qué hace `git checkout -b` comparado con `git checkout`?
- ¿Por qué es recomendable trabajar con ramas?
- ¿Qué ocurre si se clona un repositorio que ya existe en tu máquina?
- ¿Cómo puedes ver todas las ramas locales y remotas?
- ¿Qué comando usas para eliminar un archivo del repositorio?
- ¿Cómo puedes ver todas las ramas locales y remotas?
- ¿Cómo ves el historial de commits en tu repositorio?
- ¿Cómo puedes ver los últimos 3 commits en una sola línea cada uno?
- ¿Qué comando usas para ver el estado actual de tu repositorio?
- ¿Cómo puedes ver los remotos configurados y sus URLs?
- ¿Qué comando te permite cambiar de rama?
- ¿Cómo puedes crear una nueva rama y cambiarte a ella al mismo tiempo?

---
