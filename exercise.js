var exercise = {};
/*
    exercise declared as a js value ie an object
    functions are added as key value pairs
    ie funcName : function
**/



exercise.showRecords = function(data){
    return data;
};

//--------------------------------------------------------------------------------------

exercise.countRecords = function(data){
    return data.length;
};

exercise.countDistrictCrimes = function(data,district){
    /*-------------------------------------------
    |    table column_object  = chicago.meta.view.columns
    |
    | --------------------------------------------------------------
    |               super long method
    |    FETCHING THE PARTICULAR DISTRICT IN QUESTION:
    |    identifying the position of the column called district:
    |        in the JSON file the key "fieldName" gives the column content
    |        the column title label is identified by the key "name"
    |            district_posn_index = Object.keys(column_object).indexof("fieldname")
    |        if the crime_record[district_posn_index] == district
    |            add it to the running sum
    |
    |              ------      OR        -----
    |        loop through all the records and check if the particular district is in the record
    |            record.includes(district)
    |            add to the running sum
    | 
    -------------------------------------------**/

    var total_district_crimes = 0;

    data.forEach(function(record){
        if (record.includes(district)){
            total_district_crimes++;
        }
    });
        
    return total_district_crimes; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------

    var count_pri_type = 0;

    data.forEach(function(record){
        if (record.includes(primaryType)){
            count_pri_type++;
        }
    });

    return count_pri_type;
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------

    var total_location_crimes = 0;

    data.forEach(function(record){
        if (record.includes(location)){
            total_location_crimes++;
        }
    });

    return total_location_crimes;
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------
    

    var point = {};

    /* 
    defining crime:
        this refers to the object it belongs to
            the object onto which the function is acting on
        in this case it's the current crime record from the chicago.data array
        the crime record is an array of objects with the crime attribute
            crime =[{prop1:val1},{fieldName:latitude}]
        remember a mapping function is acting on every chicago.data element ie every individual crime
    */
    this.crime = crime;

    point.latitude = crime[26];
    point.longitude = crime[28];
    
    return point

    //return 'Error: buildLatLngPoint not implemented';
};

/*
COLUMN FIELD NAMES:
    0  field name = :sid
    1  field name = :id
    2  field name = :position
    3  field name = :created_at
    4  field name = :created_meta
    5  field name = :updated_at
    6  field name = :updated_meta
    7  field name = :meta
    8  field name = case_number
    9  field name = id
    10 field name = date
    11 field name = block
    12 field name = iucr
    13 field name = primary_type
    14 field name = description
    15 field name = location_description
    16 field name = arrest
    17 field name = domestic
    18 field name = beat
    19 field name = district
    20 field name = ward
    21 field name = fbi_code
    22 field name = x_coordinate
    23 field name = community_area
    24 field name = y_coordinate
    25 field name = year
    26 field name = latitude
    27 field name = updated_on
    28 field name = longitude
    29 field name = location

**/
