<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import DefaultLayout from "../Layouts/Default.vue";
defineProps({
    test: String,
});
</script>
<template>
    <DefaultLayout>
        <section class="">
            <!-- ALERT -->
            <div
                class="flex gap-4 bg-danger-50 text-danger-800 p-2 rounded-md border-l-2 border-danger-700"
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-12 h-12"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                    </svg>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mt-1">Atenção!</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium labore similique voluptatum placeat voluptate
                        quia
                    </p>
                </div>
            </div>

            <p class="mt-8 lg:mt-16">
                Seja bem-vindo(a) ao site da Graduação da Faculdade de Farmácia!
                Para ajudá-lo durante esta etapa da sua vida, desenvolvemos este
                site com todas as informações básicas necessárias sobre os atos
                acadêmicos do curso e seus procedimentos.
            </p>

            <h2 class="mt-8 lg:mt-16 text-2xl font-semibold">Destaques</h2>
            <div class="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div
                    class="text-center border-2 border-base-300 p-4 rounded-lg shadow"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8 mx-auto"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                    </svg>

                    <h3 class="mt-4 text-xl font-medium">
                        Regularização de Inscrição em Disciplina
                    </h3>
                </div>
                <div
                    class="text-center border-2 border-base-300 p-4 rounded-lg shadow"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-8 h-8 mx-auto"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                        />
                    </svg>

                    <h3 class="mt-4 text-xl font-medium">Colação de Grau</h3>
                </div>
            </div>
            <h2 class="mt-8 lg:mt-16 text-2xl font-semibold">
                Tópicos mais procurados
            </h2>
        </section>
    </DefaultLayout>
</template>
