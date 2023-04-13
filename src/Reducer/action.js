export function getTableData() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_TABLEDATA'  
        });  
    }  
}; 

export function addTableData(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'ADD_TABLEDATA',  
            payload: data  
        });  
    }  
};

export function editTableData(data) {  
    console.log(data)
    return dispatch => {  
        return dispatch({  
            type: 'EDIT_TABLEDATA',  
            payload: data  
        });  
    }  
}; 
