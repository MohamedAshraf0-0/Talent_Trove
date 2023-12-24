<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/Vector.png">
            <h2>alentTrove</h2>
        </div>
        <div class="nav">
            <router-link to="/" :class="{'selected-route': currentRoute === '/', 'not-selected-route': currentRoute !== '/'}">Home</router-link>
            <router-link to="/dashboard" :class="{'selected-route': currentRoute === '/dashboard', 'not-selected-route': currentRoute !== '/dashboard'}">Dashboard</router-link>
            <router-link v-if="!haveToken" to="/login" :class="{'selected-route': currentRoute === '/login', 'not-selected-route': currentRoute !== '/login'}">Login</router-link>
            <button @click="logout" class="logout" v-else :class="{'selected-route': currentRoute === '/logout', 'not-selected-route': currentRoute !== '/logout'}">Logout</button>

            <router-link to="/portfolios" :class="{'selected-route': currentRoute === '/portfolios', 'not-selected-route': currentRoute !== '/portfolios'}">Portfolios</router-link>
            <router-link to="/projects" :class="{'selected-route': currentRoute === '/projects', 'not-selected-route': currentRoute !== '/projects'}">Projects</router-link>
        </div>
    </div>
    <router-view/>
</template>
<script>
import router from '@/router';
export default {

    data(){
        return{
            currentRoute : this.$route.path,
            haveToken : localStorage.getItem('token') !== null,
        }
    },
    mounted(){
        
    },
    methods:{
        logout(){
            localStorage.removeItem('token');
            router.push({name:'login'});
        }
    }
}
</script>
<style>
    .header{
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: start;
        box-shadow: 0 0 8px 0 rgb(136, 136, 136);
        height: 50px;
        padding-left: 5px;
        font-family: "Inter" sans-serif;
    }
    .logo{
        display: flex;
        flex-direction: row;
        line-height: 0;
        width: 50%;
        align-self: center;
    }
    .logo img{
        width: 30px;
        height: 40px;
        padding-top: 5px;
    }
    .logo h2{
        margin-left: -6px;
    }
    .nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
        justify-items: flex-start;
        width: 50%;
        gap: 22px;
    }
    .selected-route{
        color: #2990F1;
        text-decoration: none;
    }
    .not-selected-route{
        color: black;
        text-decoration: none;
    }
    .logout{
        background-color: white;
        border: solid 0 !important;
        cursor: pointer;
        font-size: 16px;
        padding: 0;
        /* margin-top: -1px; */
    }
</style>