<template>
    <div class="popup-modal rounded-3 alert-danger" v-if="showModal" @click="showModal = !showModal">
        <div class="alert-danger align-item-center">
            <span>{{ props.Message }}</span>
        </div>
    </div>
</template>

<script setup>
    import { ref, defineProps } from "vue"
    const showModal = ref(false)
    const props = defineProps({
        Message: String
    })

    setTimeout(() => {
      showModal.value = false; // Automatically hide the modal after a certain time
    }, 3000);
</script>

<style>
    .popup-modal {
        position: fixed;
        bottom: 20px;
        right: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
    }
</style>