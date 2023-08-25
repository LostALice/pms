<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col-md-6 text-nowrap">
                        <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
                    </div>
                    <div class="col-md-6 text-md-end dataTables_filter mt-1">
                        <div class="btn-group" role="group">
                            <router-link :to="`${$route.path}/new`" class="btn btn-primary btn-sm d-none d-sm-inline-block shadow-none" role="button">
                                <i class="fas fa-plus-circle fa-sm text-white-50"></i>
                                新增
                            </router-link>
                            <button @click="exportPage" class="btn btn-primary btn-sm d-none d-sm-inline-block shadow-none" role="button">
                                <i class="fas fa-download fa-sm text-white-50"></i>
                                匯出
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 text-nowrap">
                    </div>
                    <div class="col-md-6">
                        <div class="text-md-end dataTables_filter" id="dataTable_filter">
                            <label class="form-label">
                                <input type="search" class="form-control form-control-sm shadow-none" aria-controls="dataTable" placeholder="Search" v-model="searchValue">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">

                    <EasyDataTable :headers="headers" :items="items" :search-value="searchValue" show-index>
                        <template #item-name="item">
                            <router-link :to="`/project/info/${item.projectUUID}`">{{ item.name }}</router-link>
                        </template>
                        <template #item-announcement="item">
                            <router-link to="/announcement">{{ item.announcement }}</router-link>
                        </template>
                        <template #item-student="item">
                            <router-link to="/student">{{ item.student }}</router-link>
                        </template>
                        <template #item-teacher="item">
                            <router-link to="/teacher">{{ item.teacher }}</router-link>
                        </template>
                        <template #item-group="item">
                            <router-link to="/group">{{ item.group }}</router-link>
                        </template>
                        <template #item-assignment="item">
                            <router-link to="/assignment">{{ item.assignments }}</router-link>
                        </template>

                        <template #item-operation="item">
                            <div class="btn-group" role="group">
                                <button class="btn btn-primary shadow-none" @click="editItem(item)">
                                    <i class="la la-edit"></i>
                                </button>
                                <button class="btn btn-primary shadow-none" style="background: #e74a3b;width: 42px;" @click="editItem(item)">
                                    <i class="icon ion-android-delete"></i>
                                </button>
                            </div>
                        </template>
                    </EasyDataTable>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            exportPage() {
                console.log("exported")
            }
        }
    }
</script>

<script setup>
    import "vue3-easy-data-table";
    import { ref } from "vue";

    const searchValue = ref("");
    const headers = [
        { text: "項目名稱", value: "name" },
        { text: "公告", value: "announcement" },
        { text: "學生", value: "student" },
        { text: "教授", value: "teacher" },
        { text: "小組", value: "group" },
        { text: "作業", value: "assignment" },
        { text: "選項", value: "operation" },
    ];

    const items = [
        {
            name: "test",
            year: "111",
            announcement: "1",
            student: "1",
            teacher: "1",
            group: "1",
            assignments: "1",
            projectUUID: "c60cdbe4-5ecb-4845-ad85-fd6b5adc3682",
            operation: [],
        },
    ];

    function editItem(item) {
        console.log(item);
    }
</script>