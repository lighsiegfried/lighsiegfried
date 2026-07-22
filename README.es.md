<!-- Idioma: Español · English → README.md -->
<p align="right"><a href="README.md">English</a> · <strong>Español</strong></p>

<img src="assets/profile/banner.svg" alt="Wilson — Desarrollador de Software Full-Stack. Aplicaciones web, móviles y asistidas por IA." width="100%">

# Wilson

**Desarrollador de Software Full-Stack** — Construyo aplicaciones full-stack
web, móviles y local-first asistidas por IA.

<a href="https://github.com/lighsiegfried">Perfil de GitHub</a> ·
<a href="#proyectos-destacados">Proyectos destacados</a> ·
<a href="#stack-tecnico">Stack técnico</a>

---

## Sobre mí

Construyo software en todo el stack — front-ends web, servicios de back-end,
Android nativo y herramientas local-first con asistentes de IA en el
dispositivo. Mi trabajo reciente convierte la IA y la automatización en
aplicaciones prácticas de escritorio y móviles.

Me importa entregar proyectos mantenibles: servicios en contenedores, pipelines
de CI/CD, configuración fuera del control de versiones y pruebas automatizadas
donde aportan valor. El trabajo representativo está en **Proyectos destacados**,
más abajo.

## Resumen rápido

| | |
| --- | --- |
| **Dirección** | Desarrollo full-stack — web · móvil · apps asistidas por IA |
| **Stack principal** | JavaScript / Node.js · Python · Android (nativo) |
| **Tipos de proyecto** | Apps full-stack · herramientas de voz/automatización · móvil · web 3D |
| **Prioridades de ingeniería** | Contenedores · CI/CD · privacidad por defecto · pruebas automatizadas |

<sub>Basado en repositorios públicos — ver los proyectos y el stack a continuación.</sub>

## Proyectos destacados

<a id="proyectos-destacados"></a>
Tres proyectos originales que muestran rango entre automatización, cloud y
móvil. Las portadas son arte de marca, no capturas de pantalla.

### agent-automaton — Asistente de voz local para Windows

<img src="assets/projects/agent-automaton.svg" alt="Portada de agent-automaton: un asistente de voz local para Windows hecho con Python, Docker, Compose y pytest." width="100%">

Asistente por voz que reconoce comandos hablados y ejecuta acciones de
escritorio en el dispositivo, para una operación privada y con las manos libres.

- **Stack:** Python · Docker / Compose · pipelines de voz y wake-word · pytest.
- **Ingeniería:** en contenedores (`Dockerfile` + `compose.yml`); conjuntos de
  dependencias por capacidad (`requirements-voice.txt`, `requirements-wakeword.txt`, …);
  suite de pruebas `pytest` (`pytest.ini`, `tests/`).
- **Repositorio:** <https://github.com/lighsiegfried/agent-automaton>

### portafolio — Plataforma de portafolio Cloud e IA

<img src="assets/projects/portafolio.svg" alt="Portada de portafolio: una plataforma de portafolio cloud e IA hecha con JavaScript, Node.js, AWS CodeBuild y GitHub Actions en un monorepo." width="100%">

Una aplicación de portafolio monorepo con infraestructura como código y un
pipeline de build en AWS.

- **Stack:** JavaScript · Node.js · AWS (CodeBuild) · GitHub Actions.
- **Ingeniería:** estructura monorepo (`apps/`); infraestructura como código
  (`infra/`); pipelines de AWS CodeBuild (`buildspec.yaml`); configuración vía
  `.env.example`; versión de Node fijada (`.nvmrc`).
- **Repositorio:** <https://github.com/lighsiegfried/portafolio>

### Finanzas — App de finanzas personales Android, local-first

<img src="assets/projects/Finanzas.svg" alt="Portada de Finanzas: una app de finanzas personales Android local-first hecha con Android nativo, Gradle Kotlin DSL y un asistente de IA en el dispositivo." width="100%">

Una app Android nativa que almacena los registros totalmente en el dispositivo e
incluye un asistente de IA local, para un seguimiento privado de gastos y
ahorros.

- **Stack:** Android (nativo) · Gradle (Kotlin DSL) · IA en dispositivo.
- **Ingeniería:** almacenamiento de datos totalmente local por privacidad;
  secretos de firma fuera del control de versiones (`keystore.properties.example`);
  build con Gradle Kotlin DSL (`build.gradle.kts`).
- **Repositorio:** <https://github.com/lighsiegfried/Finanzas>

<sub>Más proyectos — <a href="https://github.com/lighsiegfried/modelos3d">modelos3d</a> (web 3D con Next.js) y <a href="https://github.com/lighsiegfried/crud_nodejs">crud_nodejs</a> (CRUD full-stack) — en la <a href="https://github.com/lighsiegfried?tab=repositories">pestaña de repositorios</a>.</sub>

## Stack técnico

<a id="stack-tecnico"></a>
Solo tecnologías observadas en repositorios públicos. **Núcleo** = usado en
varios proyectos; **proyecto** = visto en un proyecto seleccionado concreto.

| Área | Tecnologías | Nivel |
| --- | --- | --- |
| Frontend | JavaScript, React / Next.js, HTML, CSS, Bootstrap, jQuery | Núcleo |
| Backend | Node.js, Python, PHP | Núcleo |
| Móvil | Android (nativo), Gradle (Kotlin DSL) | Proyecto (Finanzas) |
| Cloud & DevOps | AWS CodeBuild, Docker, Docker Compose, GitHub Actions | Proyecto (portafolio, agent-automaton) |
| Testing | pytest | Proyecto (agent-automaton) |
| IA & Automatización | Asistentes de IA en dispositivo, automatización por voz | Proyecto (agent-automaton, Finanzas) |

<sub>Bases de datos: relacional / SQL (el motor varía por proyecto). Lenguajes vistos en los repos: JavaScript, Python, Java, PHP, HTML/CSS.</sub>

## Panorama de desarrollo

Generado a partir de **metadatos públicos de GitHub** entre los seis
repositorios seleccionados. La clasificación de lenguajes de GitHub refleja
tipos de archivo, **no** competencia.

<img src="assets/metrics/project-categories.svg" alt="Proyectos seleccionados por categoría: Web / Full-stack 4, IA / Automatización 1, Móvil 1." width="49%">
<img src="assets/metrics/project-maturity.svg" alt="Proyectos seleccionados por madurez: Desarrollo activo 3, Demo completa 2, Trabajo anterior 1." width="49%">

<img src="assets/metrics/languages.svg" alt="Lenguaje principal entre 6 repositorios seleccionados, según la clasificación por extensión de archivo de GitHub: JavaScript 3, HTML 2, Python 1." width="49%">

<sub>Los gráficos se regeneran semanalmente desde metadatos públicos vía GitHub Actions. Ver <a href="scripts/generate-profile-metrics.mjs">el generador</a>.</sub>

## Enfoque de ingeniería

Demostrado en los repositorios seleccionados:

- **Arquitectura:** monorepo con infraestructura como código (`portafolio`);
  servicios en contenedores (`agent-automaton`).
- **Documentación:** `README.md` por proyecto; configuración documentada vía
  `.env.example` / `keystore.properties.example`.
- **Testing:** suite automatizada `pytest` en `agent-automaton`.
- **CI/CD:** buildspecs de AWS CodeBuild y GitHub Actions (`portafolio`).
- **Privacidad por defecto:** datos local-first y secretos fuera del control de
  versiones (`Finanzas`, `agent-automaton`).

## Enfoque actual

La actividad pública reciente (2026) se centra en **aplicaciones local-first
asistidas por IA** y **automatización por voz** — ver `agent-automaton`,
`Finanzas` y `portafolio`.

## Contacto

- **GitHub:** <https://github.com/lighsiegfried>

---

<p align="center"><a href="README.md">English</a> · <strong>Español</strong></p>

<!--
Reglas de contenido de este perfil (ver CLAUDE.md):
- Nada se inventa. Los datos no verificados se omiten en lugar de mostrarse como
  marcadores sin terminar. Lo faltante se registra en privado en
  github-modernization-report/content-gaps.md.
- Mantener README.md y README.es.md sincronizados (estructura, enlaces y contenido).
- Se pueden añadir enlaces de contacto verificados (LinkedIn, email, portafolio)
  cuando se proporcionen.
-->
