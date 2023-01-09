import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ResultBar from '../components/molecules/ResultBar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#174c72',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        flex: 3,
        width: '100%',
        backgroundColor: '#41ade7',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    mainContent: {
        flex: 37,
        backgroundColor: 'white',
        width: '100%'
    },

    generalDefinition: {
        backgroundColor: '#ffdd00',
        color: '#68665c',
        fontSize: 14,
        margin: '3%'
    },

    title: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1%'
    },

    titleIcon: {
        color: '#68665c',
        marginHorizontal: '2%'
    },

    titleText: {
        color: '#174c72',
        fontSize: 18
    },

    text : {
        color: '#68665c',
        fontSize: 12,
        marginTop: '2%',
        marginHorizontal: '2%',
        textAlign: 'justify'
    }
});

const Definitions = ({navigation}) => {
    return(
        <SafeAreaView style = {styles.container}>
            <ResultBar containerStyle = {styles.header} name = {'Definiciones'} navigation = {navigation} />
            <View style = {styles.mainContent}>
                <Text style = {styles.generalDefinition}>Esta es una recopilación de información disponible en diferentes fuentes como libros, publicaciones científicas, comunicación oral de investigadores del área y revistas de carácter científico. Recuerde que debe utilizar una estrategia integral para manejar las arvenses en pasturas, combinando diferentes prácticas de manejo preventivas, culturales, físicas y químicas para reducir la presencia de arvenses en pasturas. Sin embargo, no hay “recetas” para un manejo integrado de arvenses. Debe definirse un manejo de acuerdo a cada pastura.</Text>
                <ScrollView>
                    <TouchableOpacity style = {styles.title}>
                        <FontAwesomeIcon icon = {faChevronDown} size = {14} style = {styles.titleIcon} />
                        <Text style = {styles.titleText}>Control Químico</Text>
                    </TouchableOpacity>
                    <Text style = {styles.text}>Uso de herbicidas con equipo y metodología adecuada. Se mencionan los nombres de los ingredientes activos registrados en el Servicio Fitosanitario del Estado (SFE) para uso en arvenses de pastos. Se incluye el nombre de herbicidas promisorios, pero no registrados por el SFE. Siempre verificar la dosis y el método de aplicación en la etiqueta del producto.</Text>

                    <TouchableOpacity style = {styles.title}>
                        <FontAwesomeIcon icon = {faChevronDown} size = {14} style = {styles.titleIcon} />
                        <Text style = {styles.titleText}>Control Físico</Text>
                    </TouchableOpacity>
                    <Text style = {styles.text}>Son todas las prácticas que incluyen métodos físicos o mecánicos que interrumpen el crecimiento y desarrollo de las arvenses, se utiliza equipo como rotativas, cuchillos, desmontas, corte para el toconeo.</Text>

                    <TouchableOpacity style = {styles.title}>
                        <FontAwesomeIcon icon = {faChevronDown} size = {14} style = {styles.titleIcon} />
                        <Text style = {styles.titleText}>Control Cultural</Text>
                    </TouchableOpacity>
                    <Text style = {styles.text}>Se refiere a las prácticas que se realizan para favorecer los pastos y no al crecimiento de las arvenses. Entre ellas la selección de especie (pre-siembra), la preparación del terreno, la calidad de semilla, el uso de pastos adaptados y preferiblemente mejorados, altura del pastoreo, rotación del potrero, diseño de potreros en cuarentena, utilizar la carga animal adecuada y ciclos de rotación, aplicar materia orgánica, corregir problemas de acidez, favorecer condiciones para que los pastos sea más competitivo, resiembras en espacios libres para evitar que las arvenses ocupen esos espacios.</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
} 

export default Definitions;