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
                            <router-link :to="`/project/${item.projectUUID}`">{{ item.name }}</router-link>
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
        { text: "專案名稱", value: "name" },
        { text: "年度", value: "year" },
        { text: "開始日期", value: "startDate" },
        { text: "結束日期", value: "endDate" },
        { text: "結算開始日期", value: "settlementStartDate" },
        { text: "結算結束日期", value: "settlementEndDate" },
        { text: "選項", value: "operation" },
    ];

    const items = [
        {
            name: "test",
            year: "111",
            startDate: "11-11-2023",
            endDate: "21-11-2023",
            settlementStartDate: "11-11-2023",
            settlementEndDate: "21-11-2023",
            projectUUID: "c60cdbe4-5ecb-4845-ad85-fd6b5adc3682",
            subjectUUID: "c60cdbe4-5ecb-4845-ad85-fd6b5adc3682",
        },
    ];

    function editItem(item) {
        console.log(item);
    }
</script>