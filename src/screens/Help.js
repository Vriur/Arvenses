import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#174c72',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '8%'
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
    },

    scrollSection: {
        flex: 1,
        backgroundColor: 'white'
    },

    button: {
        backgroundColor: '#174c72',
        alignItems: 'center',
        justifyContent: 'center',
        height: '8%'
    },

    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: '5%',
    },

    genericTitle:{
        color: 'white',
        fontSize: 20,
        marginHorizontal: '4%',
        marginTop: '5%',
        backgroundColor: '#41ade7'
    },

    genericText: {
        color: 'black',
        fontSize: 20,
        marginHorizontal: '4%',
        marginTop: '2%',
        textAlign: 'justify'
    },
});

const Help = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {styles.headerText}>Pastarvenses</Text>
            </View>
            <ScrollView style = {styles.scrollSection}>
                <Text style = {styles.title}>Bienvenidos a arvenses de pastos</Text>
                <Text style = {styles.genericText}>Luego de abrir esta App aparecen tres columnas. A la izquierda Galería, con todas las fotos de las arvenses. En el centro Taxonomía, con herramientas para apoyar la correcta identificación a nivel de especie, y a la derecha Manejo citado, que se refiere al manejo agronómico de las arvenses.</Text>
                <Text style = {styles.genericTitle}>Instrucciones generales de uso</Text>
                <Text style = {styles.genericText}>Empiece con la característica morfológica más obvia por ejemplo para una puede ser sus hojas, todas basales, para otra, su tipo de inflorescencia.</Text>
                <Text style = {styles.genericTitle}>Galería</Text>
                <Text style = {styles.genericText}>Use la galería como una guía convencional ilustrada. Desplácese hacia arriba y hacia abajo de la lista de las especies. En la parte inferior de la pantalla verá la cejilla buscar. Introduzca un nombre, o parte de este, para buscar una especie determinada; si no aparece, no se incluyó en esta versión. Oprima sobre cualquiera de las especies para expandir su imagen. Cuando la imagen está expandida, desplácese más abajo y oprima la cejilla información  i.  La pantalla muestra los atributos que contiene la información para cada especie, desplácese hacia la izquierda para más.  La opción descripción muestra la información general para cada especie, desplácese hacia la izquierda para más.  La opción imágenes le facilita otras imágenes para cada especie, oprima la imagen para ver detalles, desplácese hacia la derecha para más.  La opción referencias le permite ubicar las páginas donde aparece la especie en los libros de referencia, desplácese hacia la derecha para más.  La opción manejo citado para cada especie, le brinda información sobre el manejo cultural, mecánico o físico y químico de la especie, según esta sea hoja ancha u hoja angosta. Oprima en cultural para ver información sobre el manejo cultural de la especie, oprima atrás para regresar al manejo citado, desplácese hacia abajo para más. Oprima en mecánico o físico para ver información sobre el manejo mecánico o físico, oprima atrás para regresar al manejo citado, desplácese hacia abajo para más. Oprima en químico para ver información sobre el manejo químico, oprima atrás para regresar al manejo citado.</Text>
                <Text style = {styles.genericTitle}>Taxonomía</Text>
                <Text style = {[styles.genericText, {fontWeight: 'bold'}]}>¡Recuerde que cuando cambie de hoja ancha a hoja angosta debe limpiar las marcas!</Text>
                <Text style = {styles.genericText}>Use esta columna para identificar una arvense deconocida. De los atributos que se despliegan, recuerde que no tiene que seleccionarlos TODOS, sólo los que usted requiera. Si mantiene oprimido un ícono de menú o submenú, aparecerán las definiciones correspondientes. Si se equivoca, oprima de nuevo el atributo escogido y, la casilla se limpiará.  Conforme se marcan los atributos, puede corroborar el porcentaje de especies que todavía los cumplen, en la cejilla de coincidencias, en la parte inferior de la pantalla. Si el siguiente atributo aumenta la coincidencia, quiere decir que no corresponde con la secuencia adecuada que se traía.   En el ícono + en la parte inferior de la pantalla, puede revisar los ítems seleccionados, o limpiar las marcas, e iniciar de nuevo.</Text>
                <Text style = {styles.genericTitle}>Manejo citado</Text>
                <Text style = {styles.genericText}>Use esta columna para seleccionar un manejo de arvenses. {'\n\n\u2022'} Si oprime el ícono "Definiciones" se despliegan mayores detalles descriptivos de los atributos. Debe oprimir las opciones del menú para ver mayores detalles. {'\n\n\u2022'} Oprima atrás en su dispositivo para regresar al menú principal de "manejo citado". {'\n\n\u2022'} Al seleccionar esta pestaña se despliegan menús a partir de los cuales el usuario puede seleccionar un atributo para consultar el manejo requerido. {'\n\n\u2022'} Al oprimir un ícono de menú se abre el mismo, se despliegan los detalles completos para cada especie.</Text>
                <Text style = {styles.genericTitle}>Para instalar en otros dispositivos androide</Text>
                <Text style = {styles.genericText}>Debe descargar o copiar el archivo app-release.apk en el dispositivo deseado. La app se descargará en poco tiempo, debe abrirla desde el dispositivo donde se descargó y oprimir instalar</Text>
                <Text style = {styles.genericTitle}>Opción de coincidencias</Text>
                <Text style = {[styles.genericText, {marginBottom: '5%'}]}>Si los atributos que usted ha escogido reducen el número de especies remanentes a un número pequeño, y su arvense desconocida no está entre ellas, hay tres posibles razones: {'\n\n'} 1. La especie no está en la base de datos. Se ha hecho un importante esfuerzo para incluir tantas arvenses de pastos como fue posible, pero con los años será necesario seguir añadiendo especies. {'\n\n'} 2. Hay un error en los datos. Esto es posible, si descubre algún error, por favor contactar a mary.portuguez@ucr.ac.cr {'\n\n'} 3. Usted escogió un atributo incorrecto. Por favor vaya a menú "ítem seleccionados", para revisar las marcas que ha hecho. Puede revisar, eliminar o cambiar cualquiera de las marcas que ha hecho, directamente en esa pantalla.</Text>
            </ScrollView>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SearchMenu')}>
                <Text style = {{color: 'white'}}>ACEPTAR</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default Help;