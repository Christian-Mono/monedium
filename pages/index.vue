<template>
    <div class="px-12 mx-auto">
        <div class="flex">
            <!-- Main feed -->
            <div class="w-3/4 pr-4 overflow-auto">
                <!-- <div v-for=" post in posts" :key="post.id">
        </div> -->

            </div>

            <!-- Staff pick -->
            <div class="sticky top-0 w-1/4 px-2">
                <!--  <div v-for="pick in staffPicks" :key="pick.id">
                </div> -->
                <div class="items-center py-8 text-center">
                    <button class="w-11/12 p-2 text-white bg-black rounded-2xl">Get unlimited access </button>
                </div>
                <h2 class="py-4 font-bold">
                    Staff pick
                </h2>
                <!-- staff post -->
                <div class="py-2">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img src="../public/img/staffUser1.png" alt="Picasso propic" class="h-6 rounded-full" />
                        <p>Pablo Picasso</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        Shattering conventions: why I paint the unseen
                    </p>
                </div>
                <!-- 2nd -->
                <div class="">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img src="../public/img/staffUser2.png" alt="Basquiat propic" class="h-6 rounded-full" />
                        <p>Jean-Michel Basquiat</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        Unmasking power structures, a street art perspective.
                    </p>
                </div>
                <!-- 3rd -->
                <div class="py-2">
                    <!-- header -->
                    <div class="flex gap-x-1">
                        <img src="../public/img/staffUser3.png" alt="Warhol propic" class="h-6 rounded-full" />
                        <p>Andy Warhol</p>
                    </div>
                    <!-- Title of post -->
                    <p class="font-bold text-md">
                        From soup cans to stardom, exploring art in everyday objects
                    </p>
                </div>
                <!-- see full staff page -->
                <button class="py-4 text-sm text-green-600 ">See the full list</button>
                <!-- recommended topics -->
                <h2 class="pt-8 pb-2 font-bold text-md">Recommended topics</h2>
                <!-- tags -->
                <div class="flex-wrap -ml-4 space-x-4 space-y-2 ">
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Data Science
                    </button>
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Technology
                    </button>
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Self Improvement
                    </button>
                    <button class="p-2 ml-4 bg-gray-400 rounded-3xl">
                        Writing
                    </button>
                    <button class="p-2 bg-gray-400 rounded-3xl">
                        Relationship
                    </button>
                </div>
                <button class="py-4 text-sm text-green-600">See more topics</button>
                <!-- Follow suggestions -->
                <h2 class="pt-8 pb-2 font-bold text-md">Who to follow</h2>
                <!-- profiles -->

                <div class="grid grid-flow-col grid-rows-3 gap-1">
                    <div class="row-span-3">
                        <img src="../public/img/suggestedUser.png" alt="monet" class="h-8 mr-4 rounded-full">
                    </div>
                    <div class="col-span-2 font-semibold text-md ">Claude Monet</div>
                    <div class="col-span-2 row-span-2 text-xs font-thin "> Impressionist/Social media manager</div>
                    <div class="col-span-2 row-span-2">
                        <button class="bg-white border-black rounded-full border-[1px] w-20 p-1">follow</button>
                    </div>

                </div>
                <div class="grid grid-flow-col grid-rows-3 gap-1">
                    <div class="row-span-3">
                        <img src="../public/img/suggestedUser1.png" alt="monet" class="h-8 mr-4 rounded-full">
                    </div>
                    <div class="col-span-2 font-semibold text-md ">Francisco Goya</div>
                    <div class="col-span-2 row-span-2 text-xs font-thin "> Romanticism/Crysis manager</div>
                    <div class="col-span-2 row-span-2">
                        <button class="bg-white border-black rounded-full border-[1px] w-20 p-1">follow</button>
                    </div>

                </div>
                <div class="grid grid-flow-col grid-rows-2 gap-1">
                    <div class="row-span-2">
                        <img src="../public/img/suggestedUser2.png" alt="monet"
                            class="justify-center h-8 mr-4 rounded-full">
                    </div>
                    <div class="col-span-2 font-semibold text-md ">Pierre-Auguste Renoir</div>
                    <div class="col-span-2 row-span-1 text-xs font-thin ">Impressionist/Video maker</div>
                    <div class="col-span-2 row-span-2">
                        <button class="bg-white border-black rounded-full border-[1px] w-20 p-1">follow</button>
                    </div>
                </div>
                <button class="py-4 text-sm text-green-600 ">See more suggestions</button>
                <h2 class="pt-8 pb-2 font-bold text-md">Reading list</h2>
                <!-- bookmark -->
                <div class="flex flex-wrap m-0 text-sm">
                    <span>Click the <img src="/icons/bookmark.png" alt="bookmark icon" class="inline-block h-6">
                        on any story to easily add it to your reading list or a custom list that you can share</span>
                </div>
                <!-- Links -->
            </div>
        </div>
    </div>
</template>
  