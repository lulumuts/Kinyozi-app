<template>
    <div 
      class="radio-button" 
      :class="{ 'selected': modelValue === value }"
      @click="selectRadio"
    >
      <label v-if="label">{{ label }}</label>
      <input
        type="radio"
        :checked="modelValue === value"
        :value="value"
        v-bind="$attrs"
        @change="selectRadio"
      />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number],
        default: 0
      },
      value: {
        type: [String, Number],
        required: true
      },
      backgroundImage: {
        type: String,
        default: ''
      }
    })

    const emit = defineEmits()

    function selectRadio() {
            if(props.modelValue !== props.value) {
                emit('update:modelValue', props.value)
            }
        }

  </script>
  
  <style scoped>
  .radio-button {
    padding: 24px;
    margin: 16px;;
    width: 240px;
    border-radius: 16px;
    border: 2px solid #000;
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  
  .radio-button input[type="radio"] {
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .radio-button:hover {
    background-color: #F5AE20;
  }
  
  .radio-button label{
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
  }
  
  .radio-button.selected {
    background-color: #F5AE20;
    border: 2px solid #000;
  }
  </style>
  