<template>
    <section id="login-page" class="login-dark fixed-top bg-white" style="backdrop-filter: blur(5px)background-size:auto" >
        <form method="post" style="background: rgba(15,25,35,0.9)">
            <h2 class="visually-hidden">Login Form</h2>
            <div class="illustration">
                <i class="icon ion-ios-locked-outline"></i>
            </div>

            <div class="mb-3">
                <input v-model="nid" @keyup.enter="login_func" id="nid" class="form-control" type="text" name="nid" placeholder="NID" style="border-bottom-color: rgb(112,128,146)">
            </div>

            <div class="mb-3">
                <input v-model="password" @keyup.enter="login_func" id="login_password" autocomplete class="form-control" type="password" name="password" placeholder="Password">
            </div>

            <div class="mb-3">
                <button @click="login_func" class="btn btn-primary d-block w-100" type="button">Login</button>
            </div>
        </form>
        <AlertBlock :message="message" />
    </section>
</template>

<script setup>
    import { getJWTToken } from "@/assets/js/helper.js"
    import { ref, onMounted } from "vue"
    import { useRouter } from "vue-router"
    import axios from "axios"

    const hashPassword = ref("")
    const password = ref("")
    const nid = ref("")
    const message = ref("")

    const router = useRouter()

    const login_func = async () => {
        if (nid.value === "") {
            message.value = "請輸入NID"
            return
        }
        if (password.value === "") {
            message.value = "Please enter Password"
            return
        }

        nid.value = nid.value.toUpperCase()
        const encoder = new TextEncoder()
        const data = encoder.encode(password.value)
        const hash = await crypto.subtle.digest("SHA-256", data)
        const hash_array = Array.from(new Uint8Array(hash))
        const hash_hex = hash_array.map((b) => b.toString(16).padStart(2, "0")).join("")
        hashPassword.value = hash_hex

        axios.post("/login", null, {
            params: {
                nid: nid.value.toUpperCase(),
                password: hashPassword.value,
            },
        }).then((response) => {
            if (response.status !== 200) {
                message.value = "伺服器內部錯誤：" + response.status
            }

            // Store jwt token to localStorage for future use
            if (response.data.access) {
                localStorage["nid"] = nid.value.toLocaleUpperCase()
                localStorage["token"] = response.data.token["x-access-token"]
                router.replace("/dashboard")
            } else {
                message.value = "用戶名或密碼不正確"
            }
        })
    }

    onMounted(() => {
        axios.defaults.headers = { "Content-Type": "application/json", accept: "application/json" }

        const token = getJWTToken()
        if (token) {
            axios.post("/JWTValidation", null, {
                    params: { nid: localStorage["nid"], token: localStorage["token"] },
                }).then((response) => {
                    if (response.data.access) {
                        router.replace("/dashboard")
                    } else {
                        localStorage["nid"] = null
                        localStorage["token"] = null
                        router.replace("/")
                    }
                })
        }
    })
</script>
