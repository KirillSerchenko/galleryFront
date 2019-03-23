const INITIAL_STATE = {
    text:'',
    changed:false,
    images:[],
    searchValue:'',
    val:{},
    arr:[true,false,false]
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'setValue':
            return {
                ...state,
                text:action.payload
            }
        case 'changeInput':
            return {
                ...state,
                changed:action.payload.changed,
                val:action.payload.val
            }
        case 'setSrc':
            return {
                ...state,
                src:action.payload
            }
        case 'setImages':
            return {
                ...state,
                images:[...action.payload]
            }
        case 'setSearchValue':
            return {
                ...state,
                searchValue:action.payload
            }
        case 'clearForm':
            return {
                ...state,
                text:action.payload.text,
                changed:action.payload.changed           
            }
        case 'setNav':
            return {
                ...state,
                arr:action.payload           
            }
        default: return state;
    }
}