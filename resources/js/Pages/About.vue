<script setup>
import { Link } from "@inertiajs/inertia-vue3";
defineProps({
    about_us: String,
});
</script>
<template>
    <div class="">
        <h1>Inertiajs is {{ about_us }}</h1>

        <Link href="/">Go to Home</Link>
    </div>
</template>
