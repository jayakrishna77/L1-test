const initialstate = {
  cities: [
    { id: 1, tableName: "interview.geography_columns", columnName: "city_name", distinctValue: "che" },
    { id: 2, tableName: "interview.geography_columns", columnName: "city_name", distinctValue: "mum" },
    { id: 3, tableName: "interview.geography_columns", columnName: "city_name", distinctValue: "bang" },
  ],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_TABLEDATA":
      return {
        ...state,
      };
    case "ADD_TABLEDATA":
      return {
        ...state,
        cities: state.cities.concat(action.payload),
      };
    case "EDIT_TABLEDATA":
      return {
        ...state,
        cities: state.cities.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                tableName: action.payload.tableName,
                columnName: action.payload.columnName,
                distinctValue: action.payload.distinctValue,
              }
            : content
        ),
      };
    default:
      return state;
  }
};

export default reducer;
