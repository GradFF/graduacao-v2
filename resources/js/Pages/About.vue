<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import PublicLayout from "../Layouts/Public.vue";
import { ref } from "vue";
defineProps({
    about_us: String,
});

const text = ref(
    "<h2>Lorem ipsum dolor sit amet</h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque maiores aspernatur eligendi, deserunt dolore reiciendis, laboriosam labore distinctio, dolor in ratione quaerat assumenda unde incidunt adipisci iste sed fugit.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque maiores aspernatur eligendi, deserunt dolore reiciendis, laboriosam labore distinctio, dolor in ratione quaerat assumenda unde incidunt adipisci iste sed fugit.</p>"
);
</script>
<template>
    <PublicLayout>
        <section class="prose md:prose-lg">
            <h1>About</h1>

            <span v-html="text"></span>
        </section>
    </PublicLayout>
</template>
