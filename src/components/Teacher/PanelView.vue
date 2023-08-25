<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 text-nowrap">
                    </div>
                    <div class="col-md-6">
                        <div class="text-md-end dataTables_filter">
                            <label class="form-label">
                                <input v-model="searchValue" type="search" class="form-control form-control-sm shadow-none" aria-controls="dataTable" placeholder="Search">
                            </label>
                        </div>
                    </div>
                </div>

                <EasyDataTable :headers="headers" :items="items" :search-value="searchValue" show-index>
                    <template #item-nid="item">
                        <router-link :to="`/teacher/${item.nid}`">{{ item.nid }}</router-link>
                        <a href="/"></a>
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
</template>

<script setup>
    import { getSubjectData } from "@/assets/js/helper.js";
    import "vue3-easy-data-table";
    import { ref } from "vue";

    getSubjectData()

    const searchValue = ref("");

    const headers = [
        { text: "NID", value: "nid",sortable: true},
        { text: "姓名", value: "Name" },
        { text: "選項", value: "operation" },
    ];

    const items = [
        {
            nid: "D1111111",
            Name: "TyrantRex",
        },
    ];

    function editItem(item) {
        console.log(item);
    }
</script>