export type CategoryItems = {
    title: string;
    icon: string;
    code ?: string;
};

const categories: CategoryItems[] = [
    {
      title: 'CORPORATIVO',
      icon: '/assets/icons/ic_checklist.svg',
      code : 'corporativo'
    },
    {
      title: 'FUSIONES Y ADQUISICIONES',
      icon: '/assets/icons/ic_file.svg', // Replace with the correct path
      code : 'fusiones_adquisiciones'
    },
    {
      title: 'TRIBUTARIA',
      icon: '/assets/icons/ic_agreement.svg', // Replace with the correct path
      code : 'tributaria'
    },
    {
      title: 'LABORAL',
      icon: '/assets/icons/ic_service_bullhorn.svg', // Replace with the correct path,
      code : 'laboral'
    },
    {
      title: 'DERECHO INTERNACIONAL PRIVADO',
      icon: '/assets/icons/ic_service_analysis.svg', // Replace with the correct path,
      code : 'derecho_internacional_privado'
    },
    {
      title: 'INVERSIÓN EXTRANJERA',
      icon: '/assets/icons/ic_money.svg', // Replace with the correct path
      code : 'inversion_extranjera'
    },
    {
      title: 'AGUAS',
      icon: '/assets/icons/aguas.svg', // Replace with the correct path
      code : 'aguas'
    },
    { title: 'LITIGIOS', icon: '/assets/icons/gavel_2.svg', code : 'litigios' },
    { title: 'SOLUCIÓN DE CONFLICTOS Y ARBITRAJE', icon: '/assets/icons/shake.svg' , code: 'conflictos_arbitraje' },
    { title: 'CONSTITUCIONAL Y ADMINISTRATIVO', icon: '/assets/icons/const.svg' , code: 'constitucional_administrativo' },
    { title: 'INFORMES ESPECIALIZADOS EN DERECHO', icon: '/assets/icons/law.svg' , code : 'informes_especializados_derecho' },
    { title: 'DERECHO PENAL', icon: '/assets/icons/conflicts.svg', code : 'derecho_penal' },
    { title: 'PROTECCIÓN DEL CONSUMIDOR', icon: '/assets/icons/protect.svg', code : 'proteccion_consumidor' },
    { title: 'MEDIO AMBIENTE', icon: '/assets/icons/environ.svg' , code : 'medio_ambiente' },
    { title: 'PRÁCTICA GENERAL', icon: '/assets/icons/general.svg' , code : 'practica_general' },
];

export default categories ;