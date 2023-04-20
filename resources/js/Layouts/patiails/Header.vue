<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Icons from "../../Components/Icons.vue";
import Menu from "../../Components/Menu.vue";
</script>
<template>
    <header class="sticky top-0 bg-base-100/90 w-full shadow-lg z-10 lg:z-50">
        <div class="container flex items-center justify-between h-24">
            <div class="flex items-center space-x-4 lg:space-x-0">
                <button class="lg:hidden" @click="$emit('open')">
                    <Icons name="menu" class="w-5 h-5" />
                </button>
                <Link
                    class="text-primary-800 hover:text-primary-700 transition-colors duration-200 text-2xl lg:text-3xl font-bold"
                    href="/"
                    >Graduação FF</Link
                >
            </div>
            <nav class="flex items-center space-x-4">
                <button>
                    <Icons name="moon" class="w-5 h-5" />
                </button>
                <button>
                    <Icons name="search" class="w-5 h-5" />
                </button>
                <Menu />
            </nav>
        </div>
    </header>
</template>
