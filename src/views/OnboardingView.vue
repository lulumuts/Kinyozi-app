<script setup>
import BaseInput from '@/components/atoms/TextInput.vue'
import BaseSelect from '@/components/atoms/SelectInput.vue'
import OnboardingForm from '@/components/organisms/OnboardingForm.vue'
import Browse from '@/components/templates/Browse.vue'
import axios from 'axios'
import { ref, computed } from 'vue'


const currentStep =ref(0)

const backgroundColor = computed(() => {
  if(currentStep.value <= 3 && currentStep.value !== 0) {
    return '#099251';
  } else if (currentStep.value === 4){
    return '#F5AE20';
  }else {
    return '#F15235';
  }  
})

  
    ref({
    categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    })

    
    // function sendForm(e) {
    //   console.log('formData', formData.value)
    //   try {
    //     axios.post('https://my-json-server.typicode.com/lulumuts/Kinyozi-app/events/', formData.value.event)
    //     .then((response) => {
    //       console.log('Response', response.data)
    //     })
    //   } catch(error) {
    //     console.log('error', error.message)
    //   }
    // }
</script>


<template>
  <div class="container" :style="{backgroundColor: backgroundColor}">
    <OnboardingForm @updateStep="currentStep = $event"/>
    <Browse />

    <!-- <form @submit.prevent="sendForm"> 
      <fieldset>
        <legend> Login to your account </legend>
          <BaseInput
    v-bind="$attrs"
    v-model="formData.event.title"
    label="Title"
    type="text"
    error="This input has an error!"
    ></BaseInput>
    
    <BaseInput
    v-bind="$attrs"
    v-model="formData.event.description"
    label="Description"
    type="text"
    error="This input has an error!"
    ></BaseInput>

      
      </fieldset>

    <BaseSelect 
    :options="formData.categories"
    v-model="formData.event.category"
    label="Select a category"
    />
    <button type="submit">Submit</button>
    </form>
    <pre> {{ formData.event }}</pre> -->
  </div>


</template>

<style scoped>
  .container {
    border-radius: 24px;
    border: 4px solid #FFE2A7;
    margin:auto;
    display: inline-flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    height: 92vh;
    overflow:hidden;
  }
@media (min-width: 1024px) {

  .container {
    margin:auto;
    display: inline-flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    background-color: #099251;
  }
}

fieldset {
  border: 0;
  margin:0;
  padding:0;
}

legend {
  font-size: 28px;
  font-weight:700;
  margin-top:20px;
}

button {
  padding: 10px;
  border-radius: 16px;
  width: 50%;
}
</style>
