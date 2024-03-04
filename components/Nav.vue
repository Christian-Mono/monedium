<script setup lang="ts">


</script>
<template>
    <nav class="bg-[#E8E8E8] flex border-b-[1px] border-b-slate-400">
        <div class="flex w-1/2 pl-6 lg:w-5/6 gap-x-2 ">

            <!-- LOGO -->
            <NuxtLink to="/" class="flex items-center h-14">
                <img src="/img/Logo-white.png" alt="monedium logo" class="object-cover bg-[#E8E8E8] h-8" />
            </NuxtLink>
            <!-- SEARCHBAR -->
            <SearchProvider />
        </div>
        <div class="flex w-1/6 pr-6 gap-x-7">
            <button class="items-center h-6 lg:flex gap-x-1 md:h-14 group">
                <img src="/icons/navWrite.png" alt="write-post" class="h-5 text-[#a8a8a8] group-hover:text-black">
                <p class="text-[#858585] h-4 mb-1  align-middle font-thin group-hover:text-black">Write</p>
            </button>
            <button class="items-center hidden lg:flex md:h-14">
                <img src="/icons/navBell.png" alt="Notification">
            </button>
            <button class="flex items-center md:h-14">
                <img src="/icons/navUser.png" alt="user-photo" class="object-cover h-10 rounded-full ">
            </button>
        </div>
    </nav>
</template>


