const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/templates/blog-post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/404.js"))),
  "component---src-pages-acerca-de-nosotros-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/Acerca-de-nosotros.js"))),
  "component---src-pages-app-tareas-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/AppTareas.js"))),
  "component---src-pages-app-tareas-app-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/AppTareas/App.js"))),
  "component---src-pages-app-tareas-components-task-form-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/AppTareas/components/TaskForm.js"))),
  "component---src-pages-app-tareas-components-tasks-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/AppTareas/components/Tasks.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/javier/Trabajo_PW/Blog/src/pages/index.js")))
}

