<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
            </div>
            <div class="card-body mh-100">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col col-4">
                                    <p style="font-size: 24px;">作業名稱</p>
                                </div>
                                <div class="col"><input class="form-control w-100 shadow-none" type="text" v-model="name"></div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    <p style="font-size: 24px;">權重</p>
                                </div>
                                <div class="col"><input class="form-control w-100 shadow-none" type="number" v-model="weight"></div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    <p style="font-size: 24px;">提交審核要求時間</p>
                                </div>
                                <div class="col"><input class="form-control w-100 shadow-none" type="date" v-model="date"></div>
                            </div>
                            <div class="row">
                                <div class="col col-4">
                                    <p style="font-size: 24px;">教授審核通過時間<br></p>
                                </div>
                                <div class="col"><input class="form-control w-100 shadow-none" type="date" v-model="passing_date"></div>
                            </div>
                        </div>
                    </div>
                <div class="row">
                    <div class="col" style="text-align: right;">
                        <button class="btn btn-primary" type="button">
                            <i class="fa fa-save"></i>&nbsp;Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    import { ref, onMounted } from "vue"

    const name = ref("")
    const weight = ref(0)
    const date = ref("")
    const passing_date = ref("")

    const router = useRouter()
    const projectUUID = router.currentRoute.value.params.projectID
    console.log(projectUUID);
    onMounted(async () => {

    })
</script>