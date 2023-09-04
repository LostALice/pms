<template>
    <div>
        <div class="card shadow">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">Teacher&nbsp;Info</p>
            </div>
            <div class="card-body">
                <div class="col">
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 30px;padding-left: 10px;">NID</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 30px;color: rgb(38,38,38);">{{ $route.params.TeacherID }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 30px;padding-left: 10px;">Name</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 30px;color: rgb(38,38,38);">{{ name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
    import { getTeacherInfo } from "@/assets/js/helper.js"


    export default {
        data() {
            return {
                nid: "",
                name: ""
            }
        },
        async mounted() {

            this.nid = this.$route.params.TeacherID

            const name = getTeacherInfo(this.nid)
            this.name = await name
            // console.log(this.$route.params.TeacherID)
        }
    }
</script> -->


<script setup>
    import { getTeacherInfo } from "@/assets/js/helper.js"
    import { useRouter } from "vue-router"
    import { ref, onMounted } from "vue"

    const nid = useRouter().params.TeacherID
    const name = ref("")

    onMounted(async () => {
        const info = await getTeacherInfo(nid)
        name.value = info
    })

</script>