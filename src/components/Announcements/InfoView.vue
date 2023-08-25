<template>
    <div>
        <div class="card shadow my-3">
            <div class="card-header py-3">
                <div class="row">
                    <div class="col">
                        <p class="text-primary m-0 fw-bold" style="font-size: 28px;">May be this is a announcement</p>
                    </div>
                    <div class="col">
                        <p class="text-end text-secondary m-0 fw-bold">2023-1-1</p>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <pre>Text here
                remember to use pre tag
                a tag <a href="https://youtube.com" target="_blank">youtube</a>
                <!-- image tag <img src="../assets/img/avatars/avatar1.jpeg"> -->
                <!-- video tag <video src="https://www.w3schools.com/html/mov_bbb.mp4"></video> cant play video -->
                </pre>
                </div>
            <footer class="card-footer">
                <div class="row">
                    <div class="col text-end">
                        <p class="text-end text-secondary m-0 fw-bold">TyrantRey</p>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>

</script>

<script>
    export default {
        onMounted()  {
            console.log("Asd");
        }
    }
</script>