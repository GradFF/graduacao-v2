<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Icons from "../../Components/Icons.vue";

defineProps({
    data: Object,
});
</script>
<template>
    <div class="mb-4">
        <b
            class="px-2 border-l-2 border-primary-500 text-primary-800 font-semibold text-lg"
        >
            {{ data.name }}
        </b>

        <div class="flex flex-col mt-4 ml-4 divide-y divide-base-300">
            <Link
                v-for="item in data.items"
                :key="item.id"
                :href="item.href"
                class="inline-flex items-center hover:text-primary-500 transition-colors duration-200 py-2"
            >
                <Icons class="w-4 h-4" name="chevron-right" />
                <span class="ml-2">{{ item.name }}</span>
            </Link>
        </div>
    </div>
</template>
