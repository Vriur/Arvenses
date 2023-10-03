/* Nombre de las pestañas correspondientes al menú principal. */
export const SEARCH_TAB = {
    GALERY_NAME: 'Galería',
    TAXONOMY_NAME: 'Taxonomía',
    ADITIONAL_INFORMATION_NAME: 'Información Adicional'
};

/* Nombre de las pestañas correspondiente al menú mostrado en cada cultivo específico. */
export const RESULT_TAB = {
    IMAGES_NAME: "Imágenes",
    ATTRIBUTE_NAME: "Atributos"
};

/* Advertencia mostrada en el rectángulo naranja mostrado en la búsqueda taxonómica. */
export const TAXONOMY_SEARCH_WARNING = '¡Recuerde que cuando cambie de hoja ancha a hoja angosta debe limpiar las marcas!';

/* Estas constantes corresponden al nombre que se va a mostrar a lo largo de la app y la versión correspondiente. */
export const APP = {
    NAME: 'Caféarvenses',
    VERSION: 'V 1.0'
};

/* Constantes correspondientes al texto mostrado en la barra principal. */
export const MAIN_BAR = {
    APP_INFO: 'Info. de la app',
    ABOUT_US: 'Sobre nosotros',
    HELP: 'Ayuda'
}

/* Constantes correspondientes al texto mostrado en la pantalla de inicio. */
export const HOME = {
    BUTTON_TEXT: 'ENTRAR',
    MODAL_TITLE: 'ADVERTENCIA',
    MODAL_TEXT: 'La información sobre manejo acá se incluye de buena fe. Los autores o la Universidad de Costa Rica no asumen ni se responsabilizan por el uso y sus consecuencias a partir de la información suministrada.',
    MODAL_BUTTON_TEXT: 'Entendido'
};

/* Constantes correspondientes al texto mostrado en la pantalla sobre nosotros. */
export const ABOUT_US = {
    AUTHORS_TITLE: 'Autores:',
    AUTHORS_TEXT: 'Mary Pamela Portuguez García, Renán Agüero Alvarado, Steven Brenes Prendas y Adolfo Soto Aguilar.',
    PROGRAMMERS_TITLE: 'Programadores:',
    PROGRAMMERS_TEXT: 'Nathan Gonzáles Herrera.',
    GRAPHIC_DESIGNERS_TITLE: 'Diseñadores Gráficos:',
    GRAPHIC_DESIGNERS_TEXT: 'Evelin Naranjo Madrigal, Jasmín Ortega Gutiérrez y Kevin Amador Navarro.',
    ACKNOWLEDGMENT_TITLE: 'Agradecimiento:',
    ACKNOWLEDGMENT_TEXT: 'A los fondos concursables de la Vicerrectoría de Acción Social.\nSilvia Lobo Cabezas y Alonso Quesada Hernández, Herbario Nacional.\nA todos los productores de café que nos permitieron muestrear sus fincas.',
    CONTACT_TITLE: 'Contacto:',
    CONTACT_TEXT: 'Correo: arvenses.eeafbm@ucr.ac.cr \nTeléfono: 2511-7778 \nPágina web: \n',
    CONTACT_LINK: {
        VALUE: 'arvenses-eeafbm.ucr.ac.cr/index.php/es/',
        PREFIX: 'WEB'
    },
    PROJECT_INFO: 'Proyecto de Acción Social ED-1816, Universidad de Costa Rica',
};

/* Constantes correspondientes al texto mostrado en la pantalla de ayuda. */
export const HELP = {
    WELCOME: 'Bienvenidos a arvenses de pastos',
    MAIN_TEXT: 'Cuando abra la app, oprima entrar. Se desplegará una pantalla con tres columnas. A la izquierda la galería con todas las fotos de las arvenses. En el centro la columna titulada Taxonomía. A la derecha se muestra la sección de información adicional.',
    GALERY_TITLE: 'Galería:',
    GALERY_TEXT: '\n\u2022 Use la galería como una guía convencional ilustrada. \n\n\u2022 Desplácese hacia arriba y hacia abajo de la lista de las especies. En la parte superior de la pantalla verá el botón buscar. Introduzca un nombre, o parte de este, para buscar una especie determinada; si no aparece, no se incluyó en esta versión.',
    TAXONOMY_TITLE: 'Taxonomía:',
    TAXONOMY_WARNING: '¡Recuerde que cuando cambie de hoja ancha a hoja angosta debe limpiar las marcas!',
    TAXONOMY_TEXT: '\n\u2022 Use la columna de taxonomía para identificar una especie desconocida. De los atributos que se despliegan, recuerde que no tiene que seleccionarlos TODOS, sólo los que usted requiera. Empiece por el menú general. \n\n\u2022 Una vez se despliega un menú, se puede desplegar los submenús asociados. Si mantiene oprimido un ícono de menú o submenú, se despliegan definiciones sobre estos. \n\n\u2022 Cuando se oprime un atributo, se marca el mismo y se reduce el número de especies en la base de datos, cuando el número de especies restantes sea bajo, por ejemplo 4, oprima coincidencias, para desplegar las fotos. \n\n\u2022 Si oprime de nuevo un atributo, se borrará la respectiva marca, esto es útil, cuando se escogen por error. \n\n\u2022 En el botón “+”, en la parte inferior de la pantalla puede revisar los ítems seleccionados, o limpiar las marcas e iniciar de nuevo.',
    MATCHING_OPTIONS_TITLE: 'Opción de coincidencias:',
    MATCHING_OPTIONS_TEXT: '\n Si los atributos que usted ha escogido reducen el número de especies remanentes a un número pequeño, y su arvense desconocida no está entre ellas, hay tres posibles razones: \n\n\t\t1. La especie no está en la base de datos. Se ha hecho un importante esfuerzo para incluir tantas arvenses de pastos cómo fue posible, pero con los años será necesario seguir añadiendo especies. \n\n\t\t2. Hay un error en los datos. Esto es posible, si descubre algún error, por favor contactar a arvenses.eeafbm@ucr.ac.cr \n\n\t\t3. Usted escogió un atributo incorrecto. Por favor vaya al menú de marcas, para revisar las marcas que ha hecho. Puede revisar, eliminar o cambiar cualquiera de las marcas que ha hecho, directamente en esa pantalla.',
};

/**
 *  Constantes correspondientes al texto mostrado en la pantalla de información adicional. 
 *  BUTTONS_TEXT corresponde al texto mostrado en cada uno de los botones.
 *  DOWNLOADABLE_FILES corresponde a la dirección en donde se encuentra el archivo a descargar.
 */
export const ADITIONAL_INFORMATION = {
    BUTTONS: [
        {TEXT: 'Descargar Referencias', DOWNLOADABLE_FILE: require('./src/assets/files/1.pdf')},
        {TEXT: 'Descargar Información Adicional', DOWNLOADABLE_FILE: require('./src/assets/files/2.pdf')},
    ]
};

// Texto que se muestra al abrir algún archivo adicional.
export const DOWNLOAD = {
    TEXT: 'Se ha comenzado la descarga del archivo.',
    TOAST_TEXT: 'Descargando...',
}

/* Constantes correspondientes al texto mostrado en la pantalla de atributos de cada arvense. */
export const ATTRIBUTES = {
    CATEGORY: 'Categoría: ',
    FAMILY: 'Familia: ',
    SCIENTIFIC_NAME: 'Nombre Científico: ',
    GENDER: 'Genéro: '
};

/* Constantes correspondientes al texto mostrado en la pantalla del listado de arvenses. */
export const GALERY_SEARCH = {
    SEARCH_FIELD_PLACEHOLDER: 'Buscar',
    NUMBER_QUANTITY_TEXT: 'La cantidad de arvenses es de '
}

export const GO_BACK = 'Volver';

/* Constantes correspondientes al texto mostrado en la pantalla de plantas ausentes. */
export const MISSING_INFORMATION = {
    NAME: 'Flores ausentes',
    CONTACT_Label: 'Contacto:',
    OPTIONS: [
        {
            TITLE: 'Opción 1.',
            DESCRIPTION: 'Enviar una foto a la encargada de identificación taxonómica de malezas del Programa de Malezas de la Universidad de Costa Rica.',
            INFORMATION: [
                {
                    NAME: 'Mary Pamela Portuguez García',
                    CONTACTS: [{VALUE: 'mary.portuguez@ucr.ac.cr', PREFIX: 'MAIL'}]
                }
            ]
            
        },
        {
            TITLE: 'Opción 2.',
            DESCRIPTION: 'Trasladar la muestra al Laboratorio de Malezas para su correcta identificación.\nUbicación: La Estación Experimental Agrícola Fabio Baudrit Moreno, se ubica en el distrito San José de Alajuela (2 km oeste de la iglesia católica en Barrio San José, carretera a Atenas).',
            INFORMATION: [
                {
                    NAME: 'Recepción Estación Experimental Agrícola Fabio Baudrit Moreno',
                    CONTACTS: [
                        {VALUE: '2511-7798', PREFIX: 'TEL'}, 
                        {VALUE: 'eeafbmrecepcion@ucr.ac.cr', PREFIX: 'WEB'}
                    ]
                },
                {
                    NAME: 'Mary Pamela Portuguez García',
                    CONTACTS: [
                        {VALUE: '2511-7778', PREFIX: 'TEL'}, 
                        {VALUE: 'mary.portuguez@ucr.ac.cr', PREFIX: 'MAIL'}
                    ]
                }
            ]
            
        }
    ]
}

export const CONTACT_PREFIX = {
    MAIL: 'mailto:',
    TEL: 'tel: +506 ',
    WEB: 'http://'
}

/* Constantes correspondientes al texto mostrado en la barra de acciones taxonómicas. */
export const TAXONOMY_ACTION_BAR_TEXT = {
    MATCHES: 'Coincidencias: ',
    MARKS: 'Marcas'
} 

/* Constantes correspondientes al texto mostrado en la pantalla del listado de marcas taxonómicas. */
export const TAXONOMY_MARKS = {
    ERASE: 'Eliminar',
    ERASE_ALL: 'Borrar todas las marcas',
    NO_MARKS_SELECTED: 'No hay marcas seleccionadas.',
    MARKS_SELECTED_TITLE: 'Marcas Seleccionadas'
}

/* Constante que indica el id correspondiente a la categoría flores. Esto con el fin de mostrar el menú extra,
   es decir, flores presentes y flores ausentes. */
export const TAXONOMIC_FLOWER_ID = 8;

/* Constante correspondiente al texto mostrado en el botón correspondiente a flores presentes. */
export const PRESENT_FLOWER_TEXT = 'Flores Presentes';