<template>
    <nav class="bg-[#E8E8E8] flex border-b-[1px] border-b-slate-400">
        <!-- Logo + Searchbar -->
        <div class="flex w-5/6 pl-6 gap-x-2 ">

            <!-- LOGO -->
            <div class="flex items-center h-14">
                <img src="/img/Logo-white.png" alt="monedium logo" class=" bg-[#E8E8E8] h-8" />
                <!-- <p class="flex items-center text-2xl font-black">Monedium</p> -->
            </div>
            <!-- SEARCHBAR -->
            <div class=" hidden sm:flex items-center h-10 px-2 my-2 font-semibold bg-[#F9F9F9] rounded-3xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"
                    class="fill-current text-[#a8a8a8]">
                    <path fill="#currentColor"
                        d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527" />
                </svg>
                <input
                    class="w-full h-6 font-bold bg-[#F9F9F9] border border-none  focus:outline-none text-[#171717] placeholder:text-[#a8a8a8] placeholder:font-thin"
                    placeholder="Search" />

            </div>
        </div>
        <div class="flex w-1/6 pr-6 gap-x-7">
            <button class="flex items-center gap-x-1 h-14 group">
                <!-- forse da ricaricare come svg per l'hover effect -->
                <img src="../public/icons/navWrite.png" alt="write-post" class="h-5 text-[#a8a8a8]group-hover:text-black">
                <p class="text-[#858585] h-4 mb-1 align-middle font-thin group-hover:text-black">Write</p>
            </button>
            <button class="flex items-center h-14">
                <img src="../public/icons/navBell.png" alt="Notification">
            </button>
            <button class="flex items-center h-14">
                <img src="../public/icons/navUser.png" alt="user-photo" class="h-10 rounded-full">
            </button>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>
