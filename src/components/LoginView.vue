<template>
    <section id="login-page" class="login-dark fixed-top bg-white" style="backdrop-filter: blur(5px);background-size:auto;" >
        <form method="post" style="background: rgba(15,25,35,0.9);">
            <h2 class="visually-hidden">Login Form</h2>
            <div class="illustration">
                <i class="icon ion-ios-locked-outline"></i>
            </div>

            <div class="mb-3">
                <input v-model="nid" @keyup.enter="login_func" id="nid" class="form-control" type="text" name="nid" placeholder="NID" style="border-bottom-color: rgb(112,128,146);">
            </div>

            <div class="mb-3">
                <input v-model="password" @keyup.enter="login_func" id="login_password" autocomplete class="form-control" type="password" name="password" placeholder="Password">
            </div>

            <div class="mb-3">
                <button @click="login_func" class="btn btn-primary d-block w-100" type="button">Login</button>
            </div>
        </form>
    </section>
</template>

<script>
    import { getJWTToken } from '@/assets/js/helper.js';
    import axios from 'axios';

    export default {
        name: "LoginPage",
        data() {
            return{
                nid: "",
                password: "",
            }
        },
        mounted() {
            axios.defaults.headers = {"Content-Type":"application/json","accept":"application/json"}
            let self = this;

            const token = getJWTToken()
            if (token) {
                axios.post("/JWTValidation", null, {params: {"nid": localStorage["nid"], token: localStorage["token"]}}).then(
                    function(response){
                        if (response.data.access){
                            self.$router.push("/dashboard")
                        }
                        else {
                            localStorage["nid"] = null
                            localStorage["token"] = null
                            self.$router.push("/")
                        }
                    }
                )
            }
        },
        methods: {
            async login_func() {
                if (this.nid == "") {
                    alert("Please enter NID");
                    return
                }
                if (this.password == ""){
                    alert("Please enter Password");
                    return
                }
                let self = this;

                const password = this.password;
                const encoder = new TextEncoder();
                const data = encoder.encode(password);
                const hash = await crypto.subtle.digest("SHA-256", data);
                const hash_array = Array.from(new Uint8Array(hash));
                const hash_hex = hash_array.map((b) => b.toString(16).padStart(2, "0")).join("");
                this.hash_password = hash_hex;

                axios.post("/login", null, {params: {"nid": this.nid.toUpperCase(),"password": this.hash_password}}).then(
                    function(response){
                        if (response.status != 200){
                           alert("internal server error: " + response.status);
                        }

                        // store jwt token to localStorage for future use
                        let nid = self.nid.toUpperCase()
                        if (response.data.access){
                            localStorage["nid"] = nid.toLocaleUpperCase()
                            localStorage["token"] = response.data.token["x-access-token"]
                            self.$router.go(-1)
                        }
                        else {
                            // chinese
                            alert("Username or password incorrect")
                        }

                    }
                )
            },
        }
    }
</script>