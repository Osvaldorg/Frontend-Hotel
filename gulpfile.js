import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';


const { src, dest, watch, series } = gulp;

const paths = {
  css: 'src/index.css', // Cambia esto por la ruta de tu archivo
};

// Tarea para minificar CSS
export function minifyCSS() {
  return src(paths.css)
    .pipe(sourcemaps.init()) // Inicializa sourcemaps
    .pipe(postcss([autoprefixer()])) // Agrega prefijos CSS
    .pipe(cleanCSS({ compatibility: 'ie11' })) // Minifica CSS
    .pipe(sourcemaps.write('.')) // Guarda los sourcemaps en el mismo directorio
    .pipe(dest('dist/styles')); // Guarda el archivo minificado en la carpeta dist
}

// Tarea para observar cambios en el CSS y ejecutar la minificación automáticamente
export function watchFiles() {
  watch(paths.css, minifyCSS);
}

// Tarea por defecto
export default series(minifyCSS, watchFiles);