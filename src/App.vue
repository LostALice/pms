<!-- #Code by AkinoAlice@Tyrant_Rex -->
<template>
    <div id="wrapper">
        <nav class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div class="container-fluid d-flex flex-column p-0">
                <router-link class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to="/dashboard">
                    <div class="sidebar-brand-text mx-3">
                        <span style="font-size: 15px;">
                            <strong>逢甲大學專題管理系統</strong><br>
                        </span>
                    </div>
                </router-link>

                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboard">
                            <i class="fas fa-tachometer-alt" style="font-size: 20px;"></i>
                            <span style="font-size: 14px;">儀表板</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/subject">
                            <i class="fas fa-table" style="font-size: 20px;"></i>
                            <span style="font-size: 14px;">專案</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">
                            <i class="fas fa-user" style="font-size: 20px;"></i>
                            <span style="font-size: 14px;">個人資料</span>
                        </router-link>
                    </li>
                </ul>
                <hr class="sidebar-divider my-0">

            </div>
        </nav>

        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content" class="scrollbar scrollbar-primary">
                <nav class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div class="container-fluid">
                        <ul class="navbar-nav flex-nowrap ms-auto">
                            <li class="nav-item dropdown no-arrow">
                                <div class="nav-item dropdown no-arrow">
                                    <a class="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">
                                        {{ nid }}&nbsp;&nbsp;
                                    <img class="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"></a>
                                    <div class="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                                        <router-link class="dropdown-item" to="/profile">
                                            <i class="fas fa-user fa-sm fa-fw me-2 text-gray-400">
                                            </i>&nbsp;個人資料
                                        </router-link>

                                        <div class="dropdown-divider">
                                        </div>

                                        <a class="dropdown-item" @click="logout">
                                            <i class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                                            &nbsp;登出
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="container-fluid">
                    <div>
                        <div class="d-sm-flex justify-content-between align-items-center mb-4">
                            <h3 class="text-dark mb-0" style="font-size: 36px;">{{ $route.name }}<br></h3>
                        </div>
                        <div class="col" v-if="navBTN">
                            <div class="row">
                                <div class="col">
                                    <a class="btn btn-primary shadow-none btn-link text-decoration-none" role="button" style="margin-right: 5px;background: #36b9cc;" href="../../announcements/announcements-panel.html">Announcements&nbsp;
                                        <span class="badge bg-primary badge-counter">12</span><br></a>
                                        <a class="btn btn-primary shadow-none btn-link text-decoration-none" role="button" style="margin-right: 5px;background: #36b9cc;" href="../../student/student-panel.html">Student&nbsp;<br></a>
                                        <a class="btn btn-primary shadow-none btn-link text-decoration-none" role="button" style="margin-right: 5px;background: #36b9cc;" href="../../teacher/teacher-panel.html">Teacher&nbsp;<br></a>
                                        <a class="btn btn-primary shadow-none btn-link text-decoration-none" role="button" style="margin-right: 5px;background: #36b9cc;" href="../../group/group-panel.html">Group&nbsp;<br></a>
                                        <a class="btn btn-primary shadow-none btn-link text-decoration-none" role="button" style="margin-right: 5px;background: #36b9cc;" href="../../assignment/assignment-panel.html">Assignments&nbsp;<br></a>
                                        <a class="btn btn-primary shadow-none btn-link text-decoration-none" role="button" style="margin-right: 5px;background: #36b9cc;" href="../../assignment/submitted/submitted-panel.html">Submitted Assignments&nbsp;<br></a></div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div v-if="!FixedTop">
                        <router-view v-slot="{ Component }">
                            <transition name="fade" mode="out-in">
                                <component :is="Component" />
                            </transition>
                        </router-view>
                    </div>
                </div>
            </div>
            <footer class="bg-white sticky-footer" style="height: 45px;">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright">
                        <span style="font-style: italic;">Copyright © Aki.no.Alice@TyrantRey 2023</span>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blank_page",
        data() {
            return {
                navBTN: false,
                FixedTop: false,
                nid: localStorage["nid"],
            }
        },
        methods: {
            async logout() {
                let self = this;
                localStorage.clear()
                self.$router.replace("/login")
            }
        },
    }
</script>

<script setup>
    import { verifyLoginTimeout } from "@/assets/js/helper.js"
    import { useRouter } from "vue-router"
    import { watch, ref } from "vue"

    // let newButton = ref(true)
    // let exportButton = ref(true)

    const router = useRouter()
    watch(() => router.currentRoute.value.path, async (path) => {
        if (path == "/" || path == "/login"){
            return
        }
        let timeout = verifyLoginTimeout().then(function (value) {
            return value
        })
        timeout = await timeout

        if (timeout == false) {
            router.replace("/")
            alert("Timeout: Token Expired")
        }

        const sp_page = ["/", "/login", "/404", "/403"]

        if (sp_page.includes(path)) {
            let FixedTop = ref(false)
        }

    },{
        immediate: true, deep: true
    },)
</script>

<style>
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.1s ease-out ;
    }

    .customize-table {
        --easy-table-header-font-size: 24px;
        --easy-table-body-row-font-size: 18px;
    }
</style>