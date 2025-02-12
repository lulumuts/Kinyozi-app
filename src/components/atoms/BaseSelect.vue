<template>
    <div>
        <label v-if="label">Select a category</label><br>
    <select
    :value="modelValue"
    class="field"
    v-bind="{
        ...$attrs,
        onChange: ($event) => {
            $emit('update:modelValue', $event.target.value)
        }
    }">
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

<script>
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
        options: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
select {
    margin: 10px 20px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc
}
</style>