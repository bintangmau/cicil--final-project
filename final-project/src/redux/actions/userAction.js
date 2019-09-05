import Axios from 'axios'
import {urlApi} from '../../helper/database'
import swal from 'sweetalert'

export const userLogin = (userObj) => { // FUNCTION LOGIN
    return(dispatch) => {

    Axios.get(urlApi + 'users',{ //axios, dimintai tolong ada gak yang namanya(inputan),passnya(inputan)
        params : {
            username : userObj.username,
            password : userObj.password  
        }
    })
    .then((res) => {  //then untuk pengkondisian if,,
        if(res.data.length > 0){   //jika dalam database ada maka ia melakukan then
            dispatch({
                type : 'LOGIN', // sama dgn di user global
                payload : {
                    username : res.data[0].username, // yg kanan hrus sama dengan db.json
                    role : res.data[0].role,
                    id : res.data[0].id,
                }
            })
            var contentLogin = document.createElement('div');
            contentLogin.innerHTML = 'Selamat datang,' + res.data[0].username
            swal({
                title: 'Login Success!',
                content: contentLogin,
                icon:'success'
            })
        }
        else {
            swal ('Error', 'Username/Password is wrong!', 'error')
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
}


export const resetUser = () => { //FUNCTION LOGOUT
    return(dispatch) => {
        dispatch({
            type : 'RESET_USER'
        })
    }
}


export const registerUser = (registerObj) => { //parameter dr function ini adalah inputan = registerObj
    return (dispatch) => {

        Axios.get(urlApi + 'users', {
             params : {
                 username : registerObj.username
             } 
        })
        .then((res) => {
            if(res.data.length > 0){  //jika ada yg sama,maka alert gagal
               // swal ('Notification', 'Username/Password is used!', 'warning')
               dispatch({
                   
                   type : 'USER_UDA_ADA',
                   hasil : 'Username Taken'
               })
               swal ('Notification', 'Username/Password is used!', 'warning')
            }
             else{   // jika tidak ada maka axios nge post
                Axios.post(urlApi + 'users', registerObj) //registerObj berisi inputan
                .then((res) => {
                    dispatch ({
                        type : 'LOGIN',
                        payload : {
                            username : res.data.username, //dari inputan register
                            password : res.data.password, 
                            role : res.data.role  
                        }
                    })
                    swal ('Yeah', 'Register success!', 'success')
                })
                .catch((err) => {
                    swal ('Error', 'Something is wrong!', 'error')
                })
            }
        })
        .catch((err) => {
            swal ('Error', 'Something is wrong!', 'error')
        })

    }
}

export const keepLogin = (cookieData) => {
    return(dispatch) => {
        Axios.get(urlApi + 'users',{
            params : {
                username : cookieData
            }
            })
            .then((res) => {
                dispatch({
                    type : 'KEEP_LOGIN',
                    payload : {
                        username : res.data[0].username,
                        role : res.data[0].role,
                        id : res.data[0].id
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}