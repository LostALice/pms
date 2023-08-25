<template>
    <div class="container-fluid fixed-top bg-white w-100 h-100">
        <div class="text-center mt-5">
            <div class="error mx-auto" data-text="403">
                <p class="m-0">403</p>
            </div>
            <p class="text-dark mb-5 lead">Forbidden</p><router-link to="/" replace>← Back to Dashboard</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                page_name: "404"
            }
        },
        name: "Not_found"
    }
</script>