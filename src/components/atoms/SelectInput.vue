<template>
    <div class="select-input">
        <label v-if="label">Budget</label><br>
    <select
    v-model="selectedValue"
    :placeholder="label"
    :value="modelValue"
    class="field"
    v-bind="{
        ...$attrs,
        onChange: ($event) => {
            $emit('update:modelValue', $event.target.value)
        }
    }">
    <option value="" disabled selected>Select Your Budget</option>
        <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue">
            {{ option }}
        </option>
    </select>
   </div>
</template>

<script setup>
import {defineProps, defineModel} from 'vue'

    const props = defineProps( {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        options: {
            type: Array,
            required: true
        }
    })
    const selectedValue = defineModel();

</script>

<style scoped>
select {
    margin: auto x;
    padding: 5% 5%;
    width: 98%;
    margin-left: 5%;
    border-radius: 8px;
    border: 2px solid #000;
    appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  font-size: 13px;
  cursor: pointer;
  font-family: "Azeret Mono", serif;
  /* Adjust the arrow position */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='black'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E"); 
  background-repeat: no-repeat;
  background-size: 14px; 
  background-position: right 15px center; /* Adjust this value */
}

.select-input option:disabled {
    color: #000;
}

label {
    text-align:left;
    margin-left: 14px;
    font-size: 12px;
    float: left;
    padding-bottom: 8px;
    padding-left: 8px;
    color: #fff;
}
</style>