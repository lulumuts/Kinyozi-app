<template>
    <div class="text-input">
        <label :for="uuid" :label="label">{{ label }}</label><br>
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
            <!-- {{ error }} -->
        </p>
    </div>
    
</template>

<script>
import UniqueID from '@/services/UniqueID'

export default {
    props: {
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
        }
    },
    setup () {
        const uuid = UniqueID().getID()
        return {
            uuid
        }
    }
}
</script>

<style scoped>
input, select {
    margin: auto;
    padding: 6% 4%;
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