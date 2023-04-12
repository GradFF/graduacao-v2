<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import PublicLayout from "../Layouts/Public.vue";
defineProps({
    test: String,
});
</script>
<template>
    <PublicLayout class="">
        <h1 class="text-3xl font-bold underline">Inertiajs is {{ test }}</h1>

        <Link href="/about-us">Go to about us</Link>
    </PublicLayout>
</template>
