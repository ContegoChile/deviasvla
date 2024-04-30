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
      title: 'CONTRATACIÓN NACIONAL E INTERNACIONAL',
      icon: '/assets/icons/ic_service_analysis.svg', // Replace with the correct path,
      code : 'contratacion_nacional_internacional'
    },
    {
      title: 'INMOBILIARIA, INGENIERÍA Y CONSTRUCCIÓN',
      icon: '/assets/icons/ic_banking_currency.svg', // Replace with the correct path
      code : 'inmobiliaria'
    },
    {
      title: 'FINANCIAMIENTO DE PROYECTOS',
      icon: '/assets/icons/ic_money.svg', // Replace with the correct path
      code : 'financiamiento'
    },
    {
      title: 'MERCADOS REGULADOS',
      icon: '/assets/icons/ic_banking.svg', // Replace with the correct path
      code : 'mercados-regulados'
    },
    {
      title: 'INMIGRACIÓN',
      icon: '/assets/icons/ic_customer_service.svg', // Replace with the correct path
      code : 'inmigracion'
    },
    {
      title: 'INVERSIÓN EXTRANJERA',
      icon: '/assets/icons/ic_money.svg', // Replace with the correct path
      code : 'inversion-extranjera'
    },
    {
      title: 'ENERGÍA Y RECURSOS NATURALES',
      icon: '/assets/icons/energy.svg', // Replace with the correct path
      code : 'energia-recursos-naturales'

    },
    {
      title: 'AGUAS',
      icon: '/assets/icons/aguas.svg', // Replace with the correct path
      code : 'aguas'
    },
    { title: 'LITIGIOS', icon: '/assets/icons/gavel_2.svg', code : 'litigios' },
    { title: 'SOLUCIÓN DE CONFLICTOS Y ARBITRAJE', icon: '/assets/icons/shake.svg' , code: 'conflictos_arbitraje' },
    { title: 'LIBRE COMPETENCIA', icon: '/assets/icons/free.svg', code: 'libre-competencia' },
    { title: 'CONSTITUCIONAL Y ADMINISTRATIVO', icon: '/assets/icons/const.svg' , code: 'constitucional_administrativo' },
    { title: 'INFORMES ESPECIALIZADOS EN DERECHO', icon: '/assets/icons/law.svg' , code : 'informes-especializados-derecho' },
    { title: 'CONFLICTOS DE LEYES Y JURISDICCIÓN', icon: '/assets/icons/conflicts.svg', code : 'conflictos-leyes-juridiccion' },
    { title: 'PROTECCIÓN DEL CONSUMIDOR', icon: '/assets/icons/protect.svg', code : 'proteccion_consumidor' },
    { title: 'INSOLVENCIA Y REORGANIZACIÓN EMPRESARIAL', icon: '/assets/icons/reorg.svg' , code : 'insolvencia-reorganizacion-empresarial' },
    { title: 'MEDIO AMBIENTE', icon: '/assets/icons/environ.svg' , code : 'medio_ambiente' },
    { title: 'AGROINDUSTRIA', icon: '/assets/icons/AGROIN.svg' , code : 'agroindustria' },
    { title: 'EDUCACIÓN', icon: '/assets/icons/edu.svg', code : 'educacion'},
    { title: 'PRÁCTICA GENERAL', icon: '/assets/icons/general.svg' , code : 'practica-general' },
];

export default categories ;