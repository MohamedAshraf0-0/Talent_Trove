<template >
<div class="full-bod">
    <HeaderComponent/>
    <div class="login-body">
        <div class="login-form">

            <h2>Login Your Account</h2>
            <form @submit.prevent="loginMethod">
                <ul v-for="err in errors" class="">
                    <li class="alert alert-warning" role="alert">{{ err }}</li>
                </ul>
                <div class="form-field">
                    <label for="username">Username</label>
                    <input v-model="loginForm.username" required type="text" name="" id="" placeholder="Enter your username">
                </div>
                <div class="form-field">
                    <label for="Password">Password</label>
                    <input v-model="loginForm.password" type="password" name="" id="" placeholder="Enter your password">
                </div>
                <div class="form-field">
                    <input type="submit" value="Login">
                </div>
                <div class="more">
                    <p>- OR -</p>
                    <p>don't have an account? <router-link to="/register" class="selected-route">Sign up</router-link></p>
                </div>
            </form>
        </div>
        <div class="img">
            <img src="../assets/Finance, e-commerce, startup, workflow _ account, information, user, profile, data.jpg" alt="">
        </div>
    </div>

    <FooterComponent/>
</div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import router from '@/router';
import axios from 'axios';

export default {
    components:{
        HeaderComponent,
        FooterComponent
    },
    mounted(){
        document.title = 'Login'
    },
    data(){
        return {
            loginForm:{
                'username' : '',
                'password' : '',
            },
            errors:[]
        }
    },
    methods:{
        loginMethod(){
            axios.post('http://127.0.0.1:8000/accounts/token/', this.loginForm)
            .then(response =>  {
                this.loginForm.username = '';
                this.loginForm.password = '';
                localStorage.setItem('token', response.data.access)
                router.push({name:'home'});
            })
            .catch(err=>{
                console.error('Error: ', err.response);
                this.errors.push(err.response.data.detail);
            });
        }
    }
}
</script>
<style>
    .full-bod{
        height: 100%;
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
        height: 100%;
        justify-content: center;
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
        
    }
    .login-body .login-form h2{
        display: flex;
        flex-direction: column;
        height: 30%;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        justify-content: end;
        align-items: end;
        font-size: 20px;
    }
    .login-body .login-form form{
        height: 70%;
        display: flex;
        flex-direction: column;
        width: 60%;
        gap: 25px;
        align-items: center;
        justify-content: center;

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
    .login-body .login-form form .form-field input[type='username'], input[type='password']{
        height: 40px;
        border: solid 0px !important ;
        background-color: #b0bac37c;
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
    form ul li{
        list-style-type: none;
    }
</style>