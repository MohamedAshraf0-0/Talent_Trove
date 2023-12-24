<template>
    <div class="full-bod-">
        <HeaderComponent/>
        <div class="login-body">
        <div class="img">
            <img src="../assets/Login page img.png" alt="">
        </div>
        <div class="login-form">
            <h2>Create an account</h2>
            <form @submit.prevent="register">
                <div class="form-field">
                    <label for="username">Username</label>
                    <input v-model="registerData.username" required type="text" name="" id="" placeholder="mia">
                </div>
                <div class="form-field">
                    <label for="email">Email Address</label>
                    <input v-model="registerData.email" required type="email" name="" id="" placeholder="mia@gmail.com">
                </div>
                <div class="form-field">
                    <label for="email">Password</label>
                    <input v-model="registerData.password" type="password" name="" id="" placeholder="************">
                </div>
                <div class="form-field">
                    <label for="confirm_password">confirm password</label>
                    <input v-model="registerData.confirm_password" required type="password" name="" id="" placeholder="************">
                </div>
                <div class="names">
                    <div class="form-field">
                        <label for="fname">first name</label>
                        <input v-model="registerData.first_name" required type="text" name="" id="" placeholder="enter first name">
                    </div>
                    <div class="form-field">
                        <label for="fname">last name</label>
                        <input v-model="registerData.last_name" required type="text" name="" id="" placeholder="enter last name">
                    </div>
                </div>
                <div class="form-field">
                    <input type="submit" value="create account">
                </div>
            </form>
            
        </div>
    </div>
    
    </div>
    <FooterComponent/>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios';
import router from '@/router';

export default {
    components:{
        HeaderComponent,
        FooterComponent
    },
    data(){
        return {
            registerData:{
                'username' : '',
                'email' : '',
                'password' : '',
                'confirm_password' : '',
                'first_name' : '',
                'last_name' : ''
            }
        }
    },

    methods:{
        register(){
            axios.post('http://127.0.0.1:8000/accounts/', this.registerData)
                .then(res=>{
                    router.push({name : 'login'});
                    console.log(res)
                })
                .catch(err=>{
                    console.error(err.data.detail)
                })
        },
    },
    mounted(){
        document.title = 'Register'
    },
}
</script>
<style>
    .full-bod-{
        height: 100%;
        margin-bottom: 150px;
    }
    .login-body{
        display: flex;
        flex-direction: row;
        height: 100%;
        flex-wrap: wrap;
    }

    .login-body .login-form{
        display: flex;
        flex-direction: column;
        width: 50%;
        justify-content: space-around;
        align-items: center;
        
        
    }
    .login-body .img{
        width: 50%;
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .login-body .img img{
        width: 500px;
        height: 400px;
        align-self: center;
        
    }
    .login-body .login-form h2{
        display: flex;
        flex-direction: column;
        height: 10%;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        justify-content: center;
        font-size: 20px;
    }
    .login-body .login-form form{
        height: 90%;
        display: flex;
        flex-direction: column;
        width: 60%;
        gap: 25px;
        align-items: center;

    }
    .login-body .login-form form .form-field{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
    }
    .login-body .login-form form .form-field label{
        color: #7C838A;
    }
    .login-body .login-form form .form-field input[type='email'], input[type='password'], input[type='text']{
        height: 40px;
        border: solid 1px !important ;
        background-color: white;
        border-radius: 10px;
        padding-left: 25px;
        color: #0000007c;

    }
    .login-body .login-form form .form-field input[type='submit']{
        height: 35px;
        background-color: #2990F1;
        color: white;
        border: solid 0px !important;
        border-radius: 8px;
        cursor: pointer;
    }
    .login-form form .more{
        color: #B0BAC3;
        width: 100%;
        text-align: center;
        font-size: 15px;
    }
    .selected-route{
        color: #2990F1;
        text-decoration: none;
    }
    .names{
        display: flex;
        flex-direction: row;
        gap: 5px;
    }
</style>