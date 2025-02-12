<template>
    <div class="base-radio-group">
        <div
    v-for="option in options"
    :key="option.value">
        <BaseRadio 
            :label="option.label"
            :value="option.value"
            :modelValue="modelValue"
            :name="name"
            @update:modelValue="updateValue"
        />

    </div>
    </div>

</template>


<script>
import BaseRadio from '../atoms/BaseRadio.vue'

export default {
    components: {
            BaseRadio
        },
    props: {
        options: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        modelValue:  {
            type: Number,
            requried: true
        }
    },
    methods: {
        updateValue(newValue) {
            this.$emit('update:modelValue', newValue)
        }
    }
}
</script>

<style scoped>
.base-radio-group{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
