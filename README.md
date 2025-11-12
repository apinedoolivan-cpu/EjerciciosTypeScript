# 🧩 Proyecto TypeScript — Configuración completa de ESLint con pnpm

Este repositorio contiene ejercicios en **TypeScript** y una guía **completa** para instalar, configurar y solucionar problemas de **ESLint** usando **pnpm**.  

---

## 🚀 Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (versión 18 o superior)
- **pnpm** (gestor de paquetes rápido y modular)

Puedes instalar pnpm con el siguiente comando:

```bash
npm install -g pnpm
```

---

## 📦 Instalación del proyecto

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   ```

2. Entra en el directorio del proyecto:
   ```bash
   cd PrimerosEjercicios
   ```

3. Instala las dependencias:
   ```bash
   pnpm install
   ```

---

## 🧹 Instalación de ESLint

Para configurar **ESLint** en este proyecto con TypeScript y ESM, ejecuta el siguiente comando:

```bash
pnpm add -D eslint @eslint/js globals typescript-eslint
```

Esto instalará:
- `eslint` → el núcleo de ESLint.
- `@eslint/js` → configuración base recomendada de JavaScript.
- `globals` → define variables globales comunes.
- `typescript-eslint` → soporte completo de TypeScript en ESLint.

---

## ⚠️ Problemas comunes durante la instalación

### 1. Error: `Descripción = Consulta no válida`
Este error es típico en **PowerShell** y ocurre porque **Windows bloquea la creación de enlaces simbólicos (symlinks)** que `pnpm` necesita.  
Puedes solucionarlo de tres formas:

- **Opción 1:** Usa **CMD (Símbolo del sistema)** o **Git Bash** en lugar de PowerShell.  
- **Opción 2:** Activa el **Modo desarrollador** en Windows:
  - Abre **Configuración → Privacidad y seguridad → Para desarrolladores**.
  - Activa **Modo desarrollador**.  
- **Opción 3:** Ejecuta **PowerShell o VS Code como Administrador**.

---

### 2. Error: `ERR_PNPM_EISDIR`
Mensaje completo típico:
```
ERR_PNPM_EISDIR  EISDIR: illegal operation on a directory, symlink ...
```

Este error aparece cuando pnpm intenta crear un enlace simbólico sobre una carpeta existente.  
Para resolverlo:

1. Elimina la instalación anterior:
   ```bash
   rd /s /q node_modules
   del pnpm-lock.yaml
   ```
2. Limpia la caché de pnpm:
   ```bash
   pnpm store prune
   ```
3. Reinstala:
   ```bash
   pnpm install
   ```
4. Si persiste:
   ```bash
   pnpm install --force
   ```

---

## ⚙️ Configuración de ESLint

Crea un archivo llamado **`.eslintrc.ts`** en la raíz del proyecto con este contenido:

```ts
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  }
);
```

### Explicación rápida del archivo:
- Usa las configuraciones recomendadas de ESLint y TypeScript.
- Configura el entorno del navegador (`globals.browser`).
- Ajusta reglas comunes (`no-unused-vars`, `no-console`).

---

## 🧰 Agregar scripts al `package.json`

Abre el archivo `package.json` y añade lo siguiente dentro del bloque `"scripts"`:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.js",
    "lint:fix": "eslint . --ext .ts,.js --fix"
  }
}
```

Esto te permitirá ejecutar:

- **Analizar el código:**
  ```bash
  pnpm lint
  ```
- **Corregir errores automáticamente:**
  ```bash
  pnpm lint:fix
  ```

---

## 💡 Si `eslint --init` falla

Si al ejecutar:
```bash
npx eslint --init
```
aparece el error de “Consulta no válida” o falla la instalación de dependencias, simplemente crea manualmente el archivo `.eslintrc.ts` mostrado arriba y ejecuta:

```bash
pnpm add -D eslint @eslint/js globals typescript-eslint
```

El resultado final será exactamente el mismo que con el asistente de ESLint.

---

## 🧩 Verificación de instalación

Ejecuta el siguiente comando para verificar que ESLint funciona correctamente:

```bash
pnpm exec eslint .
```

Si todo está correcto, verás una lista de archivos analizados o advertencias de estilo, pero sin errores de instalación.

---

## 🧠 Buenas prácticas recomendadas

- Ejecuta `pnpm lint` antes de cada *commit* para mantener el código limpio.  
- Configura tu editor (VS Code o similar) para que ESLint se ejecute al guardar.  
- Puedes combinar ESLint con **Prettier** para formateo automático.  
- Evita ejecutar `pnpm` en PowerShell si no tienes modo desarrollador habilitado.  
- Si notas lentitud, limpia el store de pnpm cada cierto tiempo con `pnpm store prune`.

---

## 🩵 Resumen rápido (por si solo quieres los pasos clave)

1. Instalar dependencias base:
   ```bash
   pnpm install
   ```
2. Instalar ESLint:
   ```bash
   pnpm add -D eslint @eslint/js globals typescript-eslint
   ```
3. Crear `.eslintrc.ts` con la configuración mostrada.
4. Agregar scripts al `package.json`.
5. Ejecutar:
   ```bash
   pnpm lint
   ```
6. Si hay errores, usar:
   ```bash
   pnpm lint:fix
   ```

---

## 🩺 Errores conocidos y soluciones rápidas

| Error o mensaje | Causa | Solución |
|-----------------|--------|----------|
| `ERR_PNPM_EISDIR` | Carpeta o symlink corrupto en node_modules | Borra `node_modules` y `pnpm-lock.yaml`, ejecuta `pnpm install` |
| `Descripción = Consulta no válida` | PowerShell bloquea symlinks | Usa CMD / Git Bash o activa modo desarrollador |
| “A config file was generated, but…” | Aviso de ESLint, no es error real | Ignorar o ajustar reglas en `.eslintrc.ts` |

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---

👨‍💻 **Autor:** Alejandro Pinedo
📧 **Contacto:** apinedoolivan@gmail.com  
🌐 **GitHub:** [@apinedoolivan-cpu](https://github.com/apinedoolivan-cpu)
