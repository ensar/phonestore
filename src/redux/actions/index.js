import axios from 'axios'
import * as types from '../types'

export const getProducts = () => dispatch =>{
    dispatch({type:types.PRODUCT_PENDING,})
    axios.get('https://my-json-server.typicode.com/ensar/phonestore/phones')
    .then(response=>dispatch({type:types.PRODUCT_FULFILLED,payload:response.data}))
    .catch(err=>dispatch({type:types.PRODUCT_FAIL,payload:err}))
}

export const getDetails = (id)=>(dispatch)=>{
    dispatch({type:types.PRODUCT_PENDING,})
    axios.get(`https://my-json-server.typicode.com/ensar/phonestore/phones/${id}`)
    .then(response=>dispatch({type:types.GET_DETAIL,payload:response.data}))
    .catch(err=>dispatch({type:types.PRODUCT_FAIL,payload:err}))
}
export const addToCart = (id) =>{
    return{
        type:types.ADD_TO_CART,
        payload:id
    }
}

export const removeFromCart = (id) =>{
    return{
        type:types.REMOVE_FROM_CART,
        payload:id
    }
}

export const changeCount = (id,e) =>{
    return{
        type:types.CHANGE_COUNT,
        payload:{id:id,e:e}
    }
}

export const sortedList = (e) =>{
    return{
        type:types.SORTED_LIST,
        payload:e
    }
}