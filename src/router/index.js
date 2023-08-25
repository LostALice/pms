import { createRouter, createWebHashHistory } from "vue-router"

import Not_found from "@/components/404.vue"

// using dynamic routes
const routes = [
    // login page
    {
        path: "/",
        name: "LoginView-none",
        component: () => import("@/components/LoginView.vue")
    },
    {
        path: "/login",
        name: "登入",
        component: () => import("@/components/LoginView.vue")
    },
    // Dashboard page
    {
        path: "/dashboard",
        name: "儀表板",
        component: () => import("@/components/DashboardView.vue"),
    },
    // Profile page
    {
        path: "/profile",
        name: "個人資料",
        component: () => import("@/components/ProfileView.vue"),
    },
    // Teacher page
    {
        path: "/teacher",
        name: "教授",
        component: () => import("@/components/Teacher/PanelView.vue"),
    },
    {
        path: "/teacher/import",
        name: "導入教授",
        component: () => import("@/components/Teacher/ImportView.vue"),
    },
    {
        path: "/teacher/:TeacherID",
        name: "教授資訊",
        component: () => import("@/components/Teacher/InfoView.vue"),
    },
    {
        path: "/teacher/new",
        name: "新增教授",
        component: () => import("@/components/Teacher/NewView.vue"),
    },
    // Subject page
    {
        path: "/subject",
        name: "專案",
        component: () => import("@/components/Subject/PanelView.vue"),
    },
    // Group page
    {
        path: "/group",
        name: "小組",
        component: () => import("@/components/Group/PanelView.vue"),
    },
    {
        path: "/group/new",
        name: "新增小組",
        component: () => import("@/components/Group/NewView.vue"),
    },
    {
        path: "/group/info/:groupID",
        name: "小組資訊",
        component: () => import("@/components/Group/InfoView.vue"),
    },
    // Announcements page
    {
        path: "/announcement",
        name: "公告",
        component: () => import("@/components/Announcements/PanelView.vue"),
    },
    {
        path: "/announcement/new",
        name: "新增公告",
        component: () => import("@/components/Announcements/NewView.vue"),
    },
    {
        path: "/announcement/info/:announcementID",
        name: "公告內容",
        component: () => import("@/components/Announcements/InfoView.vue"),
    },
    // Assignment page
    {
        path: "/assignment",
        name: "作業",
        component: () => import("@/components/Assignment/PanelView.vue"),
    },
    {
        path: "/assignment/new",
        name: "新增作業",
        component: () => import("@/components/Assignment/NewView.vue"),
    },
    {
        path: "/assignment/info/:assignmentID",
        name: "作業資訊",
        component: () => import("@/components/Assignment/InfoView.vue"),
    },
    {
        path: "/assignment/submitted",
        name: "己提交作業",
        component: () => import("@/components/Assignment/Submitted/PanelView.vue"),
    },
    {
        path: "/assignment/submitted/:AssignmentID",
        name: "己提交作業內容",
        component: () => import("@/components/Assignment/Submitted/InfoView.vue"),
    },
    // project page
    {
        path: "/project/:projectID",
        name: "項目",
        component: () => import("@/components/Subject/Project/PanelView.vue"),
    },
    // {
    //     path: "/project/new",
    //     name: "新增項目",
    //     component: () => import("@/components/Subject/Project/NewView.vue"),
    // },
    {
            path: "/project/info/:projectID",
            name: "項目內容",
            component: () => import("@/components/Subject/Project/InfoView.vue"),
    },
    // Student page
    {
        path: "/student",
        name: "學生",
        component: () => import("@/components/Student/PanelView.vue"),
    },
    {
        path: "/student/info/:StudentID",
        name: "學生資訊",
        component: () => import("@/components/Student/InfoView.vue"),
    },
    {
        path: "/student/import",
        name: "導入學生",
        component: () => import("@/components/Student/ImportView.vue"),
    },
    {
        path: "/student/new",
        name: "新增學生",
        component: () => import("@/components/Student/NewView.vue"),
    },
    // 404 page
    {
        path: "/404",
        name: "404 Not Found",
        component: () => import("@/components/403.vue"),
    },
    // 403 page
    {
        path: "/403",
        name: "403 Forbidden",
        component: () => import("@/components/403.vue"),
    },
    // 404
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
        name: "Error",
        component: Not_found,
        prompt: {

        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
