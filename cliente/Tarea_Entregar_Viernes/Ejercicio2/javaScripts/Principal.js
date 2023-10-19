
import Grupo from '../javaScripts/Grupo.js'
import Instituto from "../javaScripts/Instituto.js";

  const miInstituto = new Instituto("IDF123", "Instituto Doctor Fleming Oviedo");
  miInstituto.agregarGrupo("1 DAW", 30);
  var nuevoGrupo = new Grupo("2 DAW",15);
  miInstituto.agregarGrupoFormado(nuevoGrupo);
  miInstituto.agregarGrupo("4 ESO", 35);
  
  console.log("Código del Instituto:", miInstituto.obtenerCodigo()); 
  console.log("Número total de alumnos:", miInstituto.obtenerTotalAlumnos());

