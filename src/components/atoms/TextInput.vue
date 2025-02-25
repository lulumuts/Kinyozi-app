<template>
    <div class="text-input">
        <!-- <label :for="uuid" :label="label">{{ label }}</label><br> -->
        <input 
        :placeholder="label" 
        class="field" 
        :value="modelValue"
        @input="$emit(
            'update:modelValue', 
            $event.target.value)"
        :id="uuid"
        :aria-describedby="error ? `${uuid}-error`: null"
        :aria-invalid="error ? true : null"
            >
        <p 
        v-if="error"
        class="errorMessage"
        :id="`${uuid}-error`"
        aria-live="assertive"
        >
        </p>
    </div>
    
</template>

<script setup>
import UniqueID from '@/services/UniqueID'

    const props= defineProps({
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        error: {
            type: String,
            default: ''
        },
    })


    const uuid = UniqueID().getID()
    

</script>

<style scoped>
input, select {
    margin: auto;
    padding: 16px;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #000;
    font-family: "Azeret Mono", serif;
}

input::placeholder {
    color: #000;
}

label {
    text-align:left;
    font-size: 12px;
    float: left;
    padding-bottom: 8px;
    padding-left: 8px;
    color: #fff;
}

.errorMessage {
    color:red;
}
</style>