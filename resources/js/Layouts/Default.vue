<script setup>
import { reactive, ref } from "vue";

import Sidebar from "./partiails/Sidebar.vue";
import SidebarLink from "./partiails/SidebarLink.vue";
import Footer from "./partiails/Footer.vue";
import Header from "./partiails/Header.vue";

const showSidebar = ref(false);

const menu = reactive([
    {
        id: 1,
        name: "Pages",
        items: [
            { id: 1, name: "Home", href: "/" },
            { id: 2, name: "About", href: "/about" },
            { id: 3, name: "Login", href: "#" },
        ],
    },
    {
        id: 2,
        name: "Categories",
        items: [
            { id: 4, name: "Architecture", href: "#" },
            { id: 5, name: "Building", href: "#" },
            { id: 3, name: "Construction", href: "#" },
        ],
    },
]);
</script>
<template>
    <div
        class="flex flex-col h-screen overflow-hidden bg-base-900 text-base-200"
    >
        <Header @open="showSidebar = true" />
        <main class="flex flex-1 container py-4">
            <!-- SIDEBAR -->
            <Sidebar :show="showSidebar" @close="showSidebar = false">
                <template v-for="item in menu" :key="item.id">
                    <SidebarLink :data="item" />
                </template>
            </Sidebar>

            <!-- CONTENT -->
            <div class="flex-1">
                <div class="container-md my-16">
                    <slot />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<style>
.container {
    @apply max-w-screen-xl mx-auto px-4 lg:px-8;
}
.container-md {
    @apply max-w-screen-lg px-8 lg:px-16 xl:px-24;
}
</style>
