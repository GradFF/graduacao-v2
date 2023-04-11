<script setup>
import { Link } from "@inertiajs/inertia-vue3";
defineProps({
    test: String,
});
</script>
<template>
    <div class="">
        <h1>Inertiajs is {{ test }}</h1>

        <Link href="/about-us">Go to about us</Link>
    </div>
</template>
