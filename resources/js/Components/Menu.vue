<script setup>
import { ref } from "vue";

const show = ref(false);
</script>
<template>
    <div class="relative flex items-center">
        <button class="" @click="show = !show">
            <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                ></path>
            </svg>
        </button>
        <div
            class="fixed inset-0 z-20"
            @click.prevent="show = false"
            :class="show ? 'translate-x-0' : '-translate-x-full'"
        ></div>
        <div
            v-show="show"
            class="absolute top-16 right-0 z-30 bg-base-100 rounded-md shadow-xl transform transition duration-300 ease-linear w-44 divide-y divide-base-300"
        >
            <ul class="py-2 text-sm">
                <li>
                    <a
                        class="block px-4 py-2 hover:bg-base-200 hover:text-primary-500 focus:bg-base-200 mb-1"
                        href="#"
                        >Settings</a
                    >
                </li>
                <li>
                    <a
                        class="block px-4 py-2 hover:bg-base-200 hover:text-primary-500 focus:bg-base-200 mb-1"
                        href="#"
                        >Profile</a
                    >
                </li>
            </ul>
            <ul class="py-2 text-sm">
                <li>
                    <a
                        class="block px-4 py-2 hover:bg-base-200 hover:text-primary-500 focus:bg-base-200 mb-1"
                        href="#"
                        >Menu</a
                    >
                </li>
                <li>
                    <a
                        class="block px-4 py-2 hover:bg-base-200 hover:text-primary-500 focus:bg-base-200 mb-1"
                        href="#"
                        >Pages</a
                    >
                </li>
                <li>
                    <a
                        class="block px-4 py-2 hover:bg-base-200 hover:text-primary-500 focus:bg-base-200 mb-1"
                        href="#"
                        >Users</a
                    >
                </li>
            </ul>
            <div>
                <a
                    type="button"
                    class="block px-4 py-2 hover:bg-base-200 hover:text-primary-500 focus:bg-base-200 mb-1 text-sm"
                    href="#"
                    >Sair</a
                >
            </div>
        </div>
    </div>
</template>
