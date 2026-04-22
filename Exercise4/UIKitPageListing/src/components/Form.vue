<script setup>
</script>

<template>
    <div class="flex flex-col p-10 gap-2 hover:border-1 m-10 rounded-xl border-gray-400 bg-white">
       <h1 class="font-bold text-xl">4. Form Controls</h1>
       <p class="text-sm text-gray-500">Consistent form patterns with labels, helper text, and validation style.</p>
       <div class="flex justify-between pt-3">
            <div class="flex flex-col gap-3">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Enter your full name" class="border-1 rounded-lg border-gray-400 p-2 w-150">
                <p class="text-sm text-gray-500">Use a clear and complete student name.</p>
            </div>
            <div class="flex flex-col gap-3">
                <label for="email">Email Address</label>
                <input type="text" id="email" placeholder="Enter your email" class="border-1 rounded-lg border-gray-400 p-2 w-150">
                <p class="text-sm text-gray-500">Example: student@mail.kmutt.ac.th</p>
            </div>
       </div>
       <div class="pt-2">
            <div class="flex flex-col gap-3">
                <label for="role">Role</label>
                <input type="text" id="role" placeholder="Selet your role" class="border-1 rounded-lg border-gray-400 p-2 w-full">
            </div>
            <div class="flex flex-col gap-3 pt-3">
                <label for="message">Message</label>
                <textarea id="message" placeholder="Write your message here" class="border-1 rounded-lg border-gray-400 p-2 w-full h-50 resize-none align-top"></textarea>
                <p class="text-sm text-red-600">This is a an example of validation/helper text styling.</p>
            </div>
       </div>
       <button class="border-1 rounded-lg bg-blue-700 text-white py-3 px-6 self-start">Submit Form</button>
    </div>
</template>

<style scoped></style>