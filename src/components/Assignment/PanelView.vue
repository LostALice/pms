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
                                <input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">

                    <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table" show-index>
                        <template #item-title="item">
                            <router-link :to="`${$route.path}/info/${item.assignmentUUID}`">{{ item.title }} </router-link>
                        </template>

                        <template #item-operation="item">
                            <div class="btn-group" role="group">
                                <button class="btn btn-primary shadow-none" style="background: #23de7a;width: 42px;" @click="submitAssignment(item)">
                                    <i class="icon ion-android-upload"></i>
                                </button>
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
    import { getAssignment, deleteAssignment } from "@/assets/js/helper.js"
    import { useRouter } from "vue-router"
    import { ref, onMounted } from "vue"
    import "vue3-easy-data-table";

    const router = useRouter()
    const projectUUID = router.currentRoute.value.params.projectID

    const headers = [
        {
            text: "標題",
            value: "title",
            sortable: true
        },
        {
            text: "小組",
            value: "group",
            sortable: true
        },
        {
            text: "上傳者",
            value: "uploader",
            sortable: true
        },
        {
            text: "日期",
            value: "date",
            sortable: true
        },
        {
            text: "狀態",
            value: "status",
            sortable: true
        },
        {
            text: "選項",
            value: "operation",
            sortable: true
        },
    ];

    const items = ref([])

    onMounted(async () => {
        const data = await getAssignment(projectUUID)
        if (!Array.isArray(data)) {
            return
        }
        for (const i of data) {
            items.value.push(i)
        }
    });

    function editItem(item) {
        if (!confirm("確定刪除項目？")) {
            return
        }
        items.value.splice(item.index-1, 1)
        deleteAssignment(item.assignmentUUID, projectUUID)
    }

    function submitAssignment(item) {
        console.log(item);
    }
</script>