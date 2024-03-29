import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ATTRIBUTES } from './../../Constants';
import { database } from './../../database-service';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    dataField: {
        margin: '2%',
        padding: '5%',
        borderColor: '#41ade7',
        borderWidth: 2,
        borderRadius: 5
    },

    attributeCategory: {
        color: '#174c72',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '1%'
    },

    label: {
        color: '#174c72',
        fontWeight: 'bold'
    },

    value: {

    },

    plant: {
        fontStyle: 'italic'
    }
});

const ResultAttributes = (initialParams) => {
    const [itemData, setItemData] = useState(initialParams.route.params);
    const [dataAttributes, setDataAttributes] = useState({});

    useEffect(() => {
        async function fetchData(){
            /* En esta consulta se traen todos los atributos correspondientes al arvense. 
               Se decidio hacer en dos consultas por separado por dos razones. La primera es que la base
               no es tan grande, por lo que hacer dos consultas no comprende un costo computacional excesivo.
               La segunda razón es que de esta manera podemos concentrarnos en los joins correspondientes a los
               atributos en esta segunda consulta sin hacer duplicados ineccesarios de las columnas de la primera
               consulta.*/
            database.transaction((query) => {
                query.executeSql(
                    `SELECT a.attribute_name AS attribute, ac.category_value AS value, ac2.category_value AS value2
                    FROM specie AS s 
                    INNER JOIN specie_attribute_mid AS sam 
                    ON s._id = sam.specie_id 
                    INNER JOIN attribute AS a 
                    ON sam.attribute_id = a._id 
                    INNER JOIN attribute_category AS ac 
                    ON a.attribute_category_id = ac._id 
                    LEFT JOIN attribute_category AS ac2 
                    ON ac.category_main_id = ac2._id 
                    WHERE ? = s._id`, [itemData.id],
                    (query, resultSet) => {
                        let attributes = groupObject(resultSet.rows._array) 
                        attributes = sortObject(attributes);
                        setDataAttributes({...attributes});
                    },
                    (query, error) => {console.log(error)}
                )
            });
        } 
        fetchData();
    }, [itemData.id]);

    // Esta función se encarga de agrupar los atributos en la jerarquía correspondiente.
    const groupObject = (object) => {
        let groupedObject = object.reduce((accumulator, item) => {
            accumulator[item.value2] = accumulator[item.value2] || {};

            // Si el atributo no cuenta con valores, se inicializa el array de estos.
            if(accumulator[item.value2][item.value] == undefined){ 
                accumulator[item.value2][item.value] = [];
            }
            
            accumulator[item.value2][item.value].push(item.attribute);
            return accumulator;
        }, {});

        return groupedObject;
    }

    // Ordena cada una de las categorías de manera alfabética.
    const sortObject = (object) => {
        let objectSorted = Object.keys(object).sort().reduce((item, key) => {
            item[key] = object[key];
            return item;
        }, {});

        return objectSorted;
    }
   
    return(
        <ScrollView style = {styles.container}>
            {/* El mapeo de el objeto itemData no se hizo de manera programática pues hay un caso importante a tomar 
                en cuenta, y ese es que el autor junto al nombre del arvense se presentan juntos, no por separado. */}
            <View style = {styles.dataField}>
                <Text>
                    <Text style = {styles.label}>{ATTRIBUTES.CATEGORY}</Text>
                    <Text style = {styles.value}>{itemData.category}</Text>
                </Text>
            </View>
            <View style = {styles.dataField}>
                <Text>
                    <Text style = {styles.label}>{ATTRIBUTES.FAMILY}</Text>
                    <Text style = {styles.value}>{itemData.family}</Text>
                </Text>
            </View>
            <View style = {styles.dataField}>
                <Text>
                    <Text style = {styles.label}>{ATTRIBUTES.SCIENTIFIC_NAME}</Text>
                    <Text style = {styles.value}>
                        <Text style = {styles.plant}>{itemData.scientificName + ' '}</Text>
                        <Text>{itemData.authors}</Text>
                    </Text>
                </Text>
            </View>
            <View style = {styles.dataField}>
                <Text>
                    <Text style = {styles.label}>{ATTRIBUTES.GENDER}</Text>
                    <Text style = {styles.value}>{itemData.gender}</Text>
                </Text>
            </View>

            { 
                /* Mapeo correspondiente a los atributos del arvense. */
                Object.keys(dataAttributes).map(category => {
                    return (
                        <View key = {category} style = {styles.dataField}>
                            <Text style = {styles.attributeCategory}>{category}</Text>
                            {
                                Object.keys(dataAttributes[category]).map(attribute => {
                                    return (
                                        <Text key = {attribute}>
                                            <Text style = {styles.label}>{attribute + ': '}</Text>
                                            <Text style = {styles.value}>{dataAttributes[category][attribute].toString()}</Text>
                                        </Text>
                                    )
                                })
                            }
                        </View> 
                    );
                })
            }
        </ScrollView>
    );
} 

export default ResultAttributes;