<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import PublicLayout from "../Layouts/Public.vue";
defineProps({
    about_us: String,
});
</script>
<template>
    <PublicLayout class="">
        <h1>Inertiajs is {{ about_us }}</h1>

        <Link href="/">Go to Home</Link>
    </PublicLayout>
</template>
