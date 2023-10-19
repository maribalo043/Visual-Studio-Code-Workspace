import Grupo from "./Grupo.js";
export default class Instituto{
    constructor(codigoInstituto, nombre) {
        this.codigoInstituto = codigoInstituto;
        this.nombre = nombre;
        this.grupos = [];
      }
    
      obtenerCodigo() {
        return this.codigoInstituto; 
      }
    
      obtenerTotalAlumnos() {
        var totalAlumnos = 0;
        for (const grupo of this.grupos) {
          totalAlumnos += grupo.numeroAlumnos;
        }
        return totalAlumnos;
      }
    
      agregarGrupo(codigoGrupo, numeroAlumnos) {
        const nuevoGrupo = new Grupo(codigoGrupo, numeroAlumnos);
        this.grupos.push(nuevoGrupo);
      }
      agregarGrupoFormado(nuevoGrupo){
        this.grupos.push(nuevoGrupo);
      }
}