export function getTableData() {  
    return dispatch => {  
        return dispatch({  
            type: 'GET_EMPLOYEE'  
        });  
    }  
}; 

export function addTableData(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'ADD_EMPLOYEE',  
            payload: data  
        });  
    }  
};

export function editTableData(data) {  
    console.log(data)
    return dispatch => {  
        return dispatch({  
            type: 'EDIT_EMPLOYEE',  
            payload: data  
        });  
    }  
}; 
