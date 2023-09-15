<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
            </div>
            <div class="card-body">
                <div class="col">
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">NID</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ nid }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">Name</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ name }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">Permission</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">Lv.{{ permission }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { getTeacherInfo } from "@/assets/js/helper.js"
    import { useRouter } from "vue-router";
    import { ref, onMounted } from "vue"

    const router = useRouter()
    const nid = router.currentRoute.value.params.teacherID
    const name = ref("")
    const permission = ref("")

    onMounted(async () => {
        const info = await getTeacherInfo(nid)
        name.value = info.name
        permission.value = info.permission
  })
</script>