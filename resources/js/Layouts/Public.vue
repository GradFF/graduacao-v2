<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const navIsOpen = ref(false);
</script>
<template>
    <div
        class="min-h-screen bg-base-100 text-base-900 dark:bg-base-900 dark:text-base-100"
    >
        <div class="relative overflow-auto">
            <div class="relative lg:flex lg:items-start">
                <div
                    class="fixed inset-0 bg-base-950/30"
                    @click.prevent="navIsOpen = !navIsOpen"
                    :class="navIsOpen ? 'translate-x-0' : '-translate-x-full'"
                ></div>
                <aside
                    :class="
                        navIsOpen
                            ? 'translate-x-0'
                            : '-translate-x-full lg:translate-x-0'
                    "
                    class="fixed top-0 bottom-0 left-0 z-20 h-screen w-80 bg-gradient-to-b from-base-200 to-base-100 dark:from-base-950 dark:to-base-900 transition-all duration-300 overflow-hidden lg:sticky lg:w-80 lg:shrink-0 lg:flex lg:flex-col lg:justify-end lg:items-end 2xl:max-w-lg 2xl:w-full"
                >
                    <div class="relative min-h-0 flex-1 flex flex-col w-80">
                        <Link href="/" class="py-8 px-4">
                            <div class="text-3xl">Graduação</div>
                            <span>Faculdade de Farmacia | UFRJ</span>
                        </Link>
                        <div class="overflow-y-auto overflow-x-hidden px-4">
                            <nav class="block mt-8">
                                <div>
                                    <p
                                        class="w-full pb-2 mb-4 ml-2 font-normal text-base-500 border-b-2 border-base-300 dark:border-base-700 text-md"
                                    >
                                        MA BOUTIQUE
                                    </p>
                                    <Link
                                        class="block px-4 py-2 font-medium text-base-600 hover:text-primary-500"
                                        href="/"
                                        >Home</Link
                                    >
                                    <Link
                                        class="block px-4 py-2 font-medium text-base-600 hover:text-primary-500"
                                        href="/about-us"
                                        >About</Link
                                    >
                                </div>
                            </nav>
                        </div>
                    </div>
                </aside>
                <header
                    class="lg:hidden shadow-lg z-10 bg-base-100 text-base-900 dark:bg-base-950 dark:text-base-100"
                >
                    <div
                        class="relative mx-auto w-full transition duration-200\"
                    >
                        <div
                            class="h-16 mx-auto px-8 sm:px-16 flex items-center justify-between"
                        >
                            <Link href="/" class="">
                                <div class="text-xl font-bold">Graduação</div>
                                <span
                                    class="block text-sm -mt-1 text-base-700 dark:text-base-300"
                                    >Faculdade de Farmacia | UFRJ</span
                                ></Link
                            >
                            <div class="flex-1 flex items-center justify-end">
                                <button
                                    class="ml-2 relative w-10 h-10 p-2 lg:hidden focus:outline-none focus:shadow-outline"
                                    aria-label="Menu"
                                    @click.prevent="navIsOpen = !navIsOpen"
                                >
                                    <svg
                                        x-show="! navIsOpen"
                                        x-transition.opacity=""
                                        class="absolute inset-0 mt-2 ml-2 w-6 h-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line
                                            x1="3"
                                            y1="12"
                                            x2="21"
                                            y2="12"
                                        ></line>
                                        <line
                                            x1="3"
                                            y1="6"
                                            x2="21"
                                            y2="6"
                                        ></line>
                                        <line
                                            x1="3"
                                            y1="18"
                                            x2="21"
                                            y2="18"
                                        ></line>
                                    </svg>
                                    <svg
                                        x-show="navIsOpen"
                                        x-transition.opacity=""
                                        class="absolute inset-0 mt-2 ml-2 w-6 h-6"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        style="display: none"
                                    >
                                        <line
                                            x1="18"
                                            y1="6"
                                            x2="6"
                                            y2="18"
                                        ></line>
                                        <line
                                            x1="6"
                                            y1="6"
                                            x2="18"
                                            y2="18"
                                        ></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main class="flex-1">
                    <div class="max-w-screen-lg px-8 sm:px-16 lg:px-24">
                        <section class="mt-8 md:mt-16">
                            <slot />
                        </section>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
