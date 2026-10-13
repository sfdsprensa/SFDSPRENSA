/*************************************************************************************************
 * CONFIGURACIÓN DEL DASHBOARD  (editar aquí antes de publicar)
 *************************************************************************************************/
window.APP_CONFIG = {

  /* ---------------------------------------------------------------------------------------------
   * MODO DE DATOS
   *   'demo'       -> usa datos ficticios (assets/demo-data.js). No requiere backend.
   *   'produccion' -> lee las solicitudes reales desde tu Web App de Google Apps Script.
   * ------------------------------------------------------------------------------------------- */
  MODO: 'demo',

  /* URL de tu Web App de Google Apps Script (termina en /exec).
   * Se obtiene al implementar el proyecto de Apps Script como aplicación web.
   * Ejemplo: 'https://script.google.com/macros/s/AKfycb.../exec'                                */
  API_URL: '',

  /* Token opcional. Debe coincidir con CONFIG.API_TOKEN del backend. Deja '' si no usas token.  */
  API_TOKEN: '',

  /* Sincronización automática con Google Calendar (milisegundos). 0 = desactivada.
   * 300000 = cada 5 minutos.                                                                    */
  AUTO_SYNC_MS: 300000,

  /* Nombre de la entidad para el encabezado y los informes.                                     */
  ENTIDAD: 'Departamento de Prensa y Comunicaciones',
  SUBTITULO: 'Alcaldía de Zipaquirá',

  /* Ponderaciones de carga de trabajo (puntos por tipo de requerimiento).
   * Editables también desde la pantalla de Configuración.                                       */
  PONDERACIONES: {
    'Cubrimiento': 1,
    'Pieza gráfica': 2,
    'Grabación de video': 4
  },

  /* Umbrales del semáforo de carga (puntos por semana).                                          */
  CARGA_UMBRALES: { media: 15, alta: 30 },

  /* Umbrales del porcentaje de cumplimiento (%).                                                 */
  CUMPLIMIENTO_UMBRALES: { medio: 60, alto: 85 },

  /* ---------------------------------------------------------------------------------------------
   * TIEMPOS Y PLAZOS
   * ------------------------------------------------------------------------------------------- */

  /* Plazo máximo (en días calendario, DESPUÉS de la fecha agendada) para que el equipo de prensa
   * de la SFDS entregue el material a Prensa Central.
   *   - Cubrimiento: la fecha agendada es la fecha de grabación; hay 4 días para entregar.
   *   - Grabación de video: la fecha agendada es la de grabación; hay 5 días para entregar.
   *   - Pieza gráfica: la fecha agendada ES la fecha de entrega (la pieza ya hecha), por eso 0.   */
  PLAZOS_ENTREGA: {
    'Cubrimiento': 4,
    'Grabación de video': 5,
    'Pieza gráfica': 0
  },

  /* Antelación mínima con la que los programas deben solicitar (en días HÁBILES).
   * Si una solicitud se agenda con menos de este número de días hábiles, se marca "sobre la hora". */
  ANTELACION_MINIMA_HABIL: 5,

  /* Festivos a excluir del cálculo de días hábiles. Formato 'AAAA-MM-DD'.
   * Ejemplo Colombia 2026: ['2026-01-01','2026-01-12','2026-03-23', ...]. Déjalo [] si no los usas. */
  FESTIVOS: []
};

/* Catálogo canónico de estados (no editar salvo que cambie la lógica del backend). */
window.ESTADOS = {
  PROGRAMADA:    { key: 'PROGRAMADA',   label: 'Programada',                emoji: '🟡', color: '#E8A33D' },
  PENDIENTE:     { key: 'PENDIENTE',    label: 'Pendiente de verificación', emoji: '🔵', color: '#3B82F6' },
  REALIZADA:     { key: 'REALIZADA',    label: 'Realizada',                 emoji: '🟢', color: '#1FA971' },
  NO_REALIZADA:  { key: 'NO_REALIZADA', label: 'No realizada',              emoji: '🔴', color: '#E5484D' },
  CANCELADA:     { key: 'CANCELADA',    label: 'Cancelada',                 emoji: '⚪', color: '#8B94A3' }
};

/* Colores por tipo de requerimiento (usados en agenda y gráficos). */
window.TIPOS = {
  'Cubrimiento':          { label: 'Cubrimiento',        emoji: '📸', color: '#2E86AB' },
  'Pieza gráfica':        { label: 'Pieza gráfica',      emoji: '🎨', color: '#8E5BB5' },
  'Grabación de video':   { label: 'Grabación de video', emoji: '🎥', color: '#D4762A' }
};

/* Personas/equipos a quienes se puede delegar una actividad. */
window.DELEGADOS = ['Alfa', 'Omega', 'Beta'];
