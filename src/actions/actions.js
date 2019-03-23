export const setValue=(val)=>({type:'setValue',payload:val})

export const changedHandler=(val)=>{
    return {type:'changeInput',payload:{changed:true,val:val}}
}

export const setSrc=(src)=>({type:'setSrc',payload:src})

export const setImages=(arrImg)=>({type:'setImages',payload:arrImg})

export const setSearchValue=(val)=>({type:'setSearchValue',payload:val})

export const clearForm=()=>({type:'clearForm',payload:{text:"",changed:false}})

export const setNav=(arr)=>({type:'setNav',payload:arr})