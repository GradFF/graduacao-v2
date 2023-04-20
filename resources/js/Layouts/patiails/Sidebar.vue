<script setup>
defineProps({
    show: Boolean,
});
</script>
<template>
    <div>
        <div
            class="fixed inset-0 bg-base-950/30 lg:hidden cursor-pointer z-20"
            @click.prevent="$emit('close')"
            :class="show ? 'translate-x-0' : '-translate-x-full'"
        ></div>
        <aside
            class="fixed top-0 left-0 z-30 lg:z-0 shadow-lg overflow-y-hidden bg-base-100 lg:shadow-none lg:translate-x-0 lg:static w-80 h-full py-16 px-6 transform transition duration-300 ease-linear"
            :class="[show ? 'translate-x-0' : '-translate-x-full']"
        >
            <nav class="">
                <slot />
            </nav>
        </aside>
    </div>
</template>
