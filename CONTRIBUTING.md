---

# Guía de contribución – Proyecto Comercio Local

Este documento explica cómo colaborar en este repositorio. Si haces parte del equipo de desarrollo, sigue estas reglas para mantener la calidad y orden del proyecto.

---

## 📦 Instalación del proyecto (local)

```
git clone git@github.com:kumanday-labs/Proyecto_Nevado.git
cd Proyecto_Nevado
cp .env.example .env
npm install        # o pipenv install si es backend en Python
```

---

## 🌱 Flujo de trabajo con ramas (GitHub Flow)

1. Siempre trabaja desde la rama `main` actualizada:

```
git checkout main
git pull origin main
```

2. Crea una rama con prefijo según el tipo:

| Tipo de rama | Uso                            |
| ------------ | ------------------------------ |
| `feature/`   | Nueva funcionalidad            |
| `fix/`       | Corrección de errores          |
| `chore/`     | Tareas menores no funcionales  |
| `hotfix/`    | Arreglos urgentes sobre `main` |

Ejemplo:

```
git checkout -b feature/login-form
```

3. Haz commits con el formato estándar:

```
tipo(scope): descripción (#número-de-issue)
```

Ejemplos:

```
feat(auth): agregar login con Clerk (#12)
fix(cart): corregir overflow de cantidad (#27)
chore: actualizar README
```

4. Empuja tu rama:

```
git push origin feature/login-form
```

---

## ✅ Pull Requests

* Siempre abre un Pull Request hacia `main`.
* Usa el botón **"Create pull request"** en GitHub.
* Vincula el issue correspondiente si aplica, usando: `Fixes #15`.
* Pide revisión a al menos 1 compañero.
* No se permite hacer `push` directo a `main`.

---

## 🔍 Estilo de código

* Usa `npm run lint` o el linter configurado antes de hacer commit.
* Asegúrate de que el CI pase correctamente (build, lint o tests).
* Haz commits pequeños, con cambios claros y bien separados por rama.

---

## 📄 Buenas prácticas

* Borra tu rama remota después del merge (`Delete branch`).
* No subas archivos sensibles: `.env`, claves privadas, ni archivos temporales.
* Todos los cambios en `main` deben pasar por PR y CI aprobado.

---

## 💬 Preguntas

Cualquier duda puede discutirse directamente en los comentarios del Pull Request o en el canal interno del equipo.

---
