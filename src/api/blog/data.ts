import type {Lawyer} from 'src/types/lawyer';
import { tokens } from 'src/locales/tokens';


export const firma = {


  title: tokens.form.firmaTitle as string,
  about:tokens.form.aboutFirm as string,

};

export const areas = {


  title: tokens.form.areasTitle as string,
  about:tokens.form.areasList as string,

};

export const lawyers: Lawyer[] = [

  {
    id: '1',
    name: 'Carlos Villarroel B.',
    email: 'cvillarroel@vla.cl',
    linkedinUrl: 'https://www.linkedin.com/in/example',
    title: tokens.form.carlosTitle as string,
    cover: '/assets/team/villarroel.jpg',
    image: '/assets/team/villarroel.jpg',
    userurl: 'carlos-villarroel',
    bio: tokens.form.carlosBio as string, // Truncated for brevity
    intro: tokens.form.carlosIntro as string, // Truncated for brevity
    education: tokens.form.carlosEducation as string, // Truncated for brevity
    professional: tokens.form.carlosProfessionalAca as string, // Truncated for brevity
    experience: tokens.form.carlosExperiencePro as string, // Truncated for brevity
    publications: tokens.form.carlosPublications as string, // Truncated for brevity
    languages: tokens.form.carlosLanguages as string, // Truncated for brevity
  },

  {
    id: '2',
    name: 'Gabriel Villarroel B.',
    email: 'gvillarroel@vla.cl',
    linkedinUrl: 'https://www.linkedin.com/in/example',
    title: tokens.form.gabrielTitle as string,
    cover: '/assets/team/villarroel-g.jpg',
    image: '/assets/team/villarroel-g.jpg',
    userurl: 'gabriel-villarroel',
    bio: tokens.form.gabrielBio as string, // Truncated for brevity
    intro: tokens.form.gabrielIntro as string, // Truncated for brevity
    education: tokens.form.gabrielEducation as string, // Truncated for brevity
    professional: tokens.form.gabrielProfessionalAca as string, // Truncated for brevity
   experience: tokens.form.gabrielExperiencePro as string, // Truncated for brevity
    publications: tokens.form.gabrielPublications as string, // Truncated for brevity
    languages: tokens.form.gabrielLanguages as string, // Truncated for brevity
  },

  {
    id: '3',
    name: 'Raúl Lecaros Z.',
    email: 'raul.lecaros@vla.cl',
    linkedinUrl: 'https://www.linkedin.com/in/example',
    title: tokens.form.raulTitle as string,
    cover: '/assets/team/raul-lecaros.jpg',
    image: '/assets/team/raul-lecaros.jpg',
    userurl: 'raul-lecaros',
    bio: tokens.form.raulBio as string, // Truncated for brevity
    intro: tokens.form.raulIntro as string, // Truncated for brevity
    education: tokens.form.raulEducation as string, // Truncated for brevity
    professional: tokens.form.raulProfessionalAca as string, // Truncated for brevity
    experience: tokens.form.raulExperiencePro as string, // Truncated for brevity
    publications: tokens.form.raulPublications as string, // Truncated for brevity
    languages: tokens.form.raulLanguages as string, // Truncated for brevity
  },

  {
    id: '4',
    name: 'Christian Aste M.',
    email: 'caste@vla.cl',
    linkedinUrl: 'https://www.linkedin.com/in/christian-aste-32676b56/',
    title: tokens.form.christianTitle as string,
    cover: '/assets/team/aste.jpg',
    image: '/assets/team/aste.jpg',
    userurl: 'christian-aste',
    bio: tokens.form.christianBio as string, // Truncated for brevity
    intro: tokens.form.christianIntro as string, // Truncated for brevity
    education: tokens.form.christianEducation as string, // Truncated for brevity
    professional: tokens.form.christianProfessionalAca as string, // Truncated for brevity
    experience: tokens.form.christianExperiencePro as string, // Truncated for brevity
    publications:  tokens.form.christianPublications as string, // Truncated for brevity
    languages: tokens.form.christianLanguages as string, // Truncated for brevity
  },

  {
    id: '5',
    name: 'Juan Cristobal Jaramillo Charles',
    email: 'jcjaramillo@vla.cl',
    title: tokens.form.juanTitle as string, // Placeholder token for title
    cover: '/assets/team/juan-cristobal.jpg',
    image: '/assets/team/juan-cristobal.jpg',
    userurl: 'juan-cristobal-jaramillo',
    bio: tokens.form.juanBio as string, // Placeholder token for bio
    intro: tokens.form.juanIntro as string, // Placeholder token for intro
    education: tokens.form.juanEducation as string, // Placeholder token for education
    professional: tokens.form.juanProfessionalAca as string, // Placeholder token for professional
    experience: tokens.form.juanExperiencePro as string, // Placeholder token for experience
    publications: tokens.form.juanPublications as string, // Placeholder token for publications
    languages: tokens.form.juanLanguages as string // Placeholder token for languages
  },


  {
    id: '6',
    name: 'Carolina Langlois D.',
    email: 'clanglois@vla.cl',
    title: tokens.form.carolinaTitle as string, // Add title here
    cover: '/assets/team/langlois.jpg', // Placeholder
    image: '/assets/team/langlois.jpg', // Placeholder
    userurl: 'carolina-langlois',
    education: tokens.form.carolinaEducation as string, // 'Magíster en Derecho de la Empresa, PUC (1998).'
   experience: tokens.form.carolinaExperiencePro as string, // 'Experiencia profesional: Abogado Jefe y Gerente de RRHH Grupo CCF.'
    professional: tokens.form.carolinaProfessionalAca as string, // 'Actividad Académica: Profesor de Derecho del Trabajo, PUC.'
    publications: tokens.form.carolinaPublications as string, // 'Publicaciones: Varios artículos en Derecho del Trabajo.'
    languages: tokens.form.carolinaLanguages as string, // Add languages here
  },


// María Cecilia López G.
  {
    id: '7',
    name: 'María Cecilia López G.',
    email: 'mclopez@vla.cl',
    title: tokens.form.mariaTitle as string, // Placeholder token for title
    cover: '/assets/team/maria-lopez.jpg',
    image: '/assets/team/maria-lopez.jpg',
    userurl: 'maria-lopez',
    bio: tokens.form.mariaBio as string, // Placeholder token for bio
    intro: tokens.form.mariaIntro as string, // Placeholder token for intro
    education: tokens.form.mariaEducation as string, // Placeholder token for education
    professional: tokens.form.mariaProfessionalAca as string, // Placeholder for empty professional data
    experience: tokens.form.mariaExperiencePro as string, // Placeholder token for experience
    publications: tokens.form.mariaPublications as string, // Placeholder token for publications
    languages: tokens.form.mariaLanguages as string ,
  },

// Jaime Valenzuela del V.
  {
    id: '8',
    name: 'Jaime Valenzuela del V.',
    email: 'jvalenzuela@vla.cl',
    title: tokens.form.jaimeTitle as string, // Placeholder token for title
    cover: '/assets/team/jaime-valenzuela.jpg',
    image: '/assets/team/jaime-valenzuela.jpg',
    userurl: 'jaime-valenzuela',
    bio: tokens.form.jaimeBio as string, // Placeholder token for bio
    intro: tokens.form.jaimeIntro as string, // Placeholder token for intro
    education: tokens.form.jaimeEducation as string, // Placeholder token for education
    professional: tokens.form.jaimeProfessionalAca as string, // Placeholder token for academic professional experience
    experience: tokens.form.jaimeExperiencePro as string, // Placeholder token for professional experience
    publications: tokens.form.jaimePublications as string, // Placeholder token for publications
    languages: tokens.form.jaimeLanguages as string, // Pla
  },

// Claudio Verdugo B.
  {
    id: '9',
    name: 'Claudio Verdugo B.',
    email: 'cverdugo@vla.cl',
    title: tokens.form.claudioTitle as string, // Placeholder token for title
    cover: '/assets/team/verdugo.jpg',
    image: '/assets/team/verdugo.jpg',
    userurl: 'claudio-verdugo',
    bio: tokens.form.claudioBio as string, // Placeholder token for bio
    intro: tokens.form.claudioIntro as string, // Placeholder token for intro
    education: tokens.form.claudioEducation as string, // Placeholder token for education
    professional: tokens.form.claudioProfessionalAca as string, // Placeholder token for academic professional experience
    experience: tokens.form.claudioExperiencePro as string, // Placeholder token for professional experience
    publications: tokens.form.claudioPublications as string, // Placeholder token for publications
    languages: tokens.form.claudioLanguages as string,
  },

// Rafael del Valle V.
  {
    id: '10',
    name: 'Rafael del Valle V.',
    email: 'rdelvalle@vla.cl',
    title: tokens.form.rafaelTitle as string, // Placeholder token for title
    cover: '/assets/team/rafael-del-valle.jpg',
    image: '/assets/team/rafael-del-valle.jpg',
    userurl: 'rafael-del-valle',
    bio: tokens.form.rafaelBio as string, // Placeholder token for bio
    intro: tokens.form.rafaelIntro as string, // Placeholder token for intro
    education: tokens.form.rafaelEducation as string, // Placeholder token for education
    professional: tokens.form.rafaelProfessionalAca as string, // Placeholder token for academic professional experience
    experience: tokens.form.rafaelExperiencePro as string, // Placeholder token for professional experience
    publications: tokens.form.rafaelPublications as string, // Placeholder token for publications
    languages: tokens.form.rafaelLanguages as string, // Placehold
  },

  {
    id: '23',
    name: 'Kyle Townley',
    email: 'kyle@vla.cl ',
    title: 'Abogado',
    cover: '/assets/team/kyle-townley.jpg', // Placeholder
    image: '/assets/team/kyle-townley.jpg',// Placeholder
    userurl: 'kyle-townley',
    bio: 'Especialista en Derecho de Aguas y Recursos Naturales.',
    intro: 'Educación: Universidad de Chile (Licenciado en Derecho, 1987).',
    education: 'Universidad Adolfo Ibáñez, Magíster en Dirección y Gestión Tributaria (2005).',
    professional: 'Actividad Académica: Profesor de Derecho de Aguas.',
    publications: 'Publicaciones: Varios artículos en Derecho de Aguas y Medio Ambiente.'
  },


  {
    id: '11',
    name: 'Jorge Luis Varela del S.',
    email: 'jvarela@vla.cl',
    title: tokens.form.jorgeTitle as string,
    cover: '/assets/team/jorge-varela.jpg',
    image: '/assets/team/jorge-varela.jpg',
    userurl: 'jorge-varela',
    bio: tokens.form.jorgeBio as string,
    intro: tokens.form.jorgeIntro as string,
    education: tokens.form.jorgeEducation as string,
    professional: tokens.form.jorgeProfessionalAca as string,
    experience: tokens.form.jorgeExperiencePro as string,
    publications: tokens.form.jorgePublications as string,
    languages: tokens.form.jorgeLanguages as string,
  },

// 12. Ricardo Celaya B.
  {
    id: '12',
    name: 'Ricardo Celaya B.',
    email: 'rcelaya@vla.cl',
    title: tokens.form.ricardoCBTitle as string,
    cover: '/assets/team/ricardo-celaya.jpg',
    image: '/assets/team/ricardo-celaya.jpg',
    userurl: 'ricardo-celaya',
    bio: tokens.form.ricardoCBBio as string,
    intro: tokens.form.ricardoCBIntro as string,
    education: tokens.form.ricardoCBEducation as string,
    professional: tokens.form.ricardoCBProfessionalAca as string,
    experience: tokens.form.ricardoCBExperiencePro as string,
    publications: tokens.form.ricardoCBPublications as string,
    languages: tokens.form.ricardoCBLanguages as string,
  },

  {
    id: '13',
    name: 'Ricardo Freire Sch.',
    email: 'rfreire@vla.cl',
    title: tokens.form.ricardoFSTitle as string,
    cover: '/assets/team/ricardo-freire.jpg',
    image: '/assets/team/ricardo-freire.jpg',
    userurl: 'ricardo-freire',
    bio: tokens.form.ricardoFSBio as string,
    intro: tokens.form.ricardoFSIntro as string,
    education: tokens.form.ricardoFSEducation as string,
    professional: tokens.form.ricardoFSProfessionalAca as string,
    experience: tokens.form.ricardoFSExperiencePro as string,
    publications: tokens.form.ricardoFSPublications as string,
    languages: tokens.form.ricardoFSLanguages as string,
  },

// 14. Eduardo Silva D.
  {
    id: '14',
    name: 'Eduardo Silva D.',
    email: 'esilva@vla.cl',
    title: tokens.form.eduardoTitle as string,
    cover: '/assets/team/eduardo-silva.jpg',
    image: '/assets/team/eduardo-silva.jpg',
    userurl: 'eduardo-silva',
    bio: tokens.form.eduardoBio as string,
    intro: tokens.form.eduardoIntro as string,
    education: tokens.form.eduardoEducation as string,
    professional: tokens.form.eduardoProfessionalAca as string,
    experience: tokens.form.eduardoExperiencePro as string,
    publications: tokens.form.eduardoPublications as string,
    languages: tokens.form.eduardoLanguages as string,
  },

  {
    id: '15',
    name: 'Francisco Micheli B.',
    email: 'fmicheli@vla.cl',
    title: tokens.form.franciscoTitle as string,
    cover: '/assets/team/francisco-micheli.jpg',
    image: '/assets/team/francisco-micheli.jpg',
    userurl: 'francisco-micheli-b',
    education: tokens.form.franciscoEducation as string, // Add education here
    professional: tokens.form.franciscoProfessionalAca as string, // Add professional experience here
    experience: tokens.form.franciscoExperiencePro as string, // Add professional experience here
   publications: tokens.form.franciscoPublications as string, // Add publications here
     languages: tokens.form.franciscoLanguages as string, // Add languages here
  },

  {
    id: '16',
    name: 'Francisca Moya O.',
    email: 'fmoya@vla.cl',
    title: tokens.form.franciscaTitle as string,
    cover: '/assets/team/francisca-moya.jpg',
    image: '/assets/team/francisca-moya.jpg',
    userurl: 'francisca-moya',
    bio: tokens.form.franciscaBio as string,
    intro: tokens.form.franciscaIntro as string,
    education: tokens.form.franciscaEducation as string,
    professional: tokens.form.franciscaProfessionalAca as string,
    experience: tokens.form.franciscaExperiencePro as string,
    publications: tokens.form.franciscaPublications as string,
    languages: tokens.form.franciscaLanguages as string,
  },

// 17. Catalina Faz A.
  {
    id: '17',
    name: 'Catalina Faz A.',
    email: 'cfaz@vla.cl',
    title: tokens.form.catalinaTitle as string,
    cover: '/assets/team/catalina-faz.jpg',
    image: '/assets/team/catalina-faz.jpg',
    userurl: 'catalina-faz',
    bio: tokens.form.catalinaBio as string,
    intro: tokens.form.catalinaIntro as string,
    education: tokens.form.catalinaEducation as string,
    professional: tokens.form.catalinaProfessionalAca as string,
    experience: tokens.form.catalinaExperiencePro as string,
    publications: tokens.form.catalinaPublications as string,
    languages: tokens.form.catalinaLanguages as string,
  },

  {
    id: '18',
    name: 'Diego Núñez C.',
    email: 'dnunez@vla.cl',
    title: tokens.form.diegoTitle as string,
    cover: '/assets/team/diego-nunez.jpg',
    image: '/assets/team/diego-nunez.jpg',
    userurl: 'diego-nunez',
    bio: tokens.form.diegoBio as string,
    intro: tokens.form.diegoIntro as string,
    education: tokens.form.diegoEducation as string,
    professional: tokens.form.diegoProfessionalAca as string,
    experience: tokens.form.diegoExperiencePro as string,
    publications: tokens.form.diegoPublications as string,
    languages: tokens.form.diegoLanguages as string,
  },

// 19. Luis Zurita T.
  {
    id: '19',
    name: 'Luis Zurita T.',
    email: 'lzurita@vla.cl',
    title: tokens.form.luisTitle as string,
    cover: '/assets/team/luis-zurita.jpg',
    image: '/assets/team/luis-zurita.jpg',
    userurl: 'luis-zurita',
    bio: tokens.form.luisBio as string,
    intro: tokens.form.luisIntro as string,
    education: tokens.form.luisEducation as string,
    professional: tokens.form.luisProfessionalAca as string,
    experience: tokens.form.luisExperiencePro as string,
    publications: tokens.form.luisPublications as string,
    languages: tokens.form.luisLanguages as string,
  },

// 20. Fernanda Aste Baeza
  {
    id: '20',
    name: 'Fernanda Aste Baeza',
    email: 'faste@vla.cl',
    title: tokens.form.fernandaTitle as string,
    cover: '/assets/team/fernanda-aste.jpg',
    image: '/assets/team/fernanda-aste.jpg',
    userurl: 'fernanda-aste',
    bio: tokens.form.fernandaBio as string,
    intro: tokens.form.fernandaIntro as string,
    education: tokens.form.fernandaEducation as string,
    professional: tokens.form.fernandaProfessionalAca as string,
    experience: tokens.form.fernandaExperiencePro as string,
    publications: tokens.form.fernandaPublications as string,
    languages: tokens.form.fernandaLanguages as string,
  },
  // Add more lawyers as needed


{
  id: '21',
    name: 'Maria Gracia Labadia Drápela',
  email: 'mglabadia@vla.cl',
  title: tokens.form.mariaGLDTitle as string,
  cover: '/assets/team/maria-gracia-labadia.jpg',
  image: '/assets/team/maria-gracia-labadia.jpg',
  userurl: 'maria-gracia-labadia',
  bio: tokens.form.mariaGLDBio as string,
  intro: tokens.form.mariaGLDIntro as string,
  education: tokens.form.mariaGLDEducation as string,
  professional: tokens.form.mariaGLDProfessionalAca as string,
  experience: tokens.form.mariaGLDExperiencePro as string,
  publications: tokens.form.mariaGLDPublications as string,
  languages: tokens.form.mariaGLDLanguages as string,
},

// 22. João Castillo
{
  id: '22',
    name: 'João Castillo',
  email: 'jcastillo@vla.cl',
  title: tokens.form.joaoTitle as string,
  cover: '/assets/team/joao-castillo.jpg',
  image: '/assets/team/joao-castillo.jpg',
  userurl: 'joao-castillo',
  bio: tokens.form.joaoBio as string,
  intro: tokens.form.joaoIntro as string,
  education: tokens.form.joaoEducation as string,
  professional: tokens.form.joaoProfessionalAca as string,
  experience: tokens.form.joaoExperiencePro as string,
  publications: tokens.form.joaoPublications as string,
  languages: tokens.form.joaoLanguages as string,
},


];
