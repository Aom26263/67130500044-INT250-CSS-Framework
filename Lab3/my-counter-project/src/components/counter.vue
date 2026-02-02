<script setup>
import { ref } from 'vue';

const count = ref(0);
const Step = ref(1);
const previousCount = ref(null);
const max = 100;
const min = 0;

function increment() {
    previousCount.value = count.value;
    count.value = Math.min(count.value + Step.value, max);
}

function decrement() {
    previousCount.value = count.value;
    count.value = Math.max(count.value - Step.value, min);
}

function reset() {
    previousCount.value = count.value;
    count.value = 0;
}

function undo() {
    if (previousCount.value !== null) {
        count.value = previousCount.value;
        previousCount.value = null;
    }
}
</script>

<template>
    <div class="card">
        <h1>Counter App</h1>
        <p>Click buttons to change the numbers.</p>

        <div class="count">{{ count }}</div>

        <div class="row">
            <button class="btn inc" @click="increment">+ Increase</button>
            <button class="btn dec" @click="decrement" :disabled="count <= 0">- Decrease</button>
        </div>

        <div class="row">
            <button class="btn reset" @click="reset">Reset</button>
            <button class="btn undo" @click="undo" :disabled="previousCount === null">Undo</button>
        </div>

        <div class="hint">
            Step: <input type="number" min="1" v-model.number="Step"/>
        </div>
    </div>
</template>

<style scoped>
.card {
    max-width: 450px;
    margin: 50px auto;
    padding: 24px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    margin: 0 0 6px;
    color: #333;
    font-size: 36px;
}

p {
    margin: 0 0 20px 0;
    color: #666;
    font-size: 14px;
}

.count {
    font-size: 64px;
    font-weight: bold;
    color: #2c3e50;
    margin: 30px 0;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.row {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 15px;
}

.btn {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 120px;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn {
    transform: translateY(0);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn.inc {
    background: #4CAF50;
    color: white;
}

.btn.inc:hover {
    background: #45a049;
}

.btn.dec {
    background: #f44336;
    color: white;
}

.btn.dec:hover {
    background: #da190b;
}

.btn.reset {
    background: #ff9800;
    color: white;
}

.btn.reset:hover {
    background: #e68900;
}

.btn.undo {
    background: #2196F3;
    color: white;
}

.btn.undo:hover {
    background: #0b7dda;
}

.hint {
    margin-top: 20px;
    padding: 15px;
    background: white;
    border-radius: 6px;
    display: inline-block;
}

.hint input {
    width: 80px;
    padding: 8px 12px;
    margin-left: 10px;
    border: 2px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
}

.hint input:focus {
    outline: none;
    border-color: #2196F3;
}

.limits {
    margin-top: 15px;
    padding: 10px;
    color: #666;
    font-size: 14px;
    background: white;
    border-radius: 6px;
}
</style>