<template>
    <div>
        <div class="card shadow mb-3">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">{{ $route.name }}</p>
            </div>
            <div class="card-body">
                <div class="col">
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">名稱</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ name }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">小組</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ group }}<br></p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">分數</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ mark }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">權重</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ weight }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-4 justify-content-center">
                            <p style="font-size: 24px;padding-left: 10px;">繳交日期</p>
                        </div>
                        <div class="col">
                            <p style="font-size: 24px;color: rgb(38,38,38);">{{ date }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold" style="font-size: 28px;">作業文件</p>
            </div>
            <div class="card-body">
                <div class="col">
                    <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table" show-index>
                        <template #item-title="item">
                            <!-- <a :href="`/download/${item.taskID}/${item.fileID}/${item.filename}`" :download="item.filename">{{ item.filename }} </a> -->
                            <a :href="`/download/${item.taskID}/${item.fileID}/${item.filename}`" @click="download(item)" @click.prevent="" :download="item.filename">{{ item.filename }} </a>
                        </template>

                        <template #item-operation="item">
                            <div class="btn-group" role="group">
                                <button class="btn btn-primary shadow-none" @click="markScore(item)">
                                    <i class="la la-edit"></i>
                                </button>
                            </div>
                        </template>
                    </EasyDataTable>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { getAssignmentInfo, markAssignmentScore } from "@/assets/js/helper.js";
    import { downloadAssignment } from "@/assets/js/helper.js";
    import { useRouter } from "vue-router"
    import { ref, onMounted } from "vue"
    import "vue3-easy-data-table";

    const name = ref("")
    const group = ref("")
    const uploader = ref("")
    const mark = ref("")
    const weight = ref("")
    const date = ref("")

    const router = useRouter()
    const projectUUID = router.currentRoute.value.params.projectID
    const assignmentUUID = router.currentRoute.value.params.assignmentID

    const items = ref([])
    const headers = [
        {
            text: "檔案名稱",
            value: "title",
            sortable: true,
        },
        {
            text: "上傳者",
            value: "author",
            sortable: true,
        },
        {
            text: "上載日期",
            value: "date",
            sortable: true,
        },
        {
            text: "選項",
            value: "operation",
        },
    ]

    onMounted(async () => {
        console.log(name.value, group.value, uploader.value, mark.value, weight.value);
        const info = await getAssignmentInfo(projectUUID, assignmentUUID)
        if (info.status_code == 403) {
            return
        }
        console.log(info)
        name.value = info.assignment_name
        group.value = info.group_name
        mark.value = info.mark
        weight.value = info.weight
        date.value = info.date
        items.value = info.assignment_file
    })

    function markScore(item) {
        console.log(item)
        const marks = parseInt(prompt("分數","1-100"))
        if (marks <= 0 || marks > 100) {
            alert("輸入錯誤")
            return
        }
        console.log(marks)
        markAssignmentScore(item.taskUUID, assignmentUUID, marks)
    }

    async function download(item) {
        console.log(item.taskID, item.fileID, item.filename)
        const fileExtension = item.filename.split(".").pop();

        let fileData = await downloadAssignment(item.taskID, item.fileID, item.filename)
        const resultUrl = URL.createObjectURL(new Blob([fileData], {type: `application/${fileExtension}`}));

        const a = document.createElement("a");
        a.href = resultUrl;
        a.download = item.filename;
        a.style.display = "none";
        document.body.appendChild(a);

        a.click();
        a.remove();
    }
</script>