
<script setup>
import BaseRadioGroup from '@/components/molecules/BaseRadioGroup.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import SelectInput from '@/components/atoms/SelectInput.vue'
import SuccessCard from '@/components/atoms/SuccessCard.vue'
import ImageRadio from '@/components/atoms/ImageRadio.vue'
import Button from '@/components/atoms/Button.vue'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { ref, reactive, watch } from 'vue'

const props = defineProps({
    backgroundColor: {
        type: String,
        default: ''
    }
})
const currentStep = ref(0)
const selectedValue = ref(0)
const selectedBudget=ref("")
const showLoader = ref(false)

const emit = defineEmits(['updateStep'])

watch(currentStep, (newStep) => {
    emit('updateStep', newStep)
})

watch(currentStep, (value)  => {
    if(value === 4) {
        setInterval(() => {
            return showLoader.value = true
        }, 1500)
        clearInterval()
    }

})


watch(selectedValue, (value)  => {
    if(value === 2) {
        nextStep()
    }
})
            const budgetCost = reactive([
            '($) 1500 kshs - 2500 kshs',
            '($$) 2500 kshs - 4500 kshs',
            '($$$) 4500 kshs - 6500 kshs',
            ])
            const steps = reactive([
                { level: 1, state: true},
                { level: 2, state: false},
                { level: 3, state: false},
                { level: 4, state: false},
                { level: 5, state: false},
            ])

        const userDetails = ref({
                name: '',
                phoneNumber: '',
                email: '',
                address: '',
            })

            
            const styleOptions = [
                { label: 'I already have a hair stylist in mind', value: 1},
                { label: 'I am looking for a new stylist/salon', value: 2},
                { label: 'I am here for your Haircare Assistant', value: 3},
                { label: 'I want to explore your selection first', value: 4}
            ]

            function nextStep() {
                if(currentStep.value <= 4) {
                    currentStep.value++ 
                    for(let i=0; i < steps.length; i++) {
                        if (currentStep.value === steps[i].level) {
                            console.log('currentStep', steps[i])
                            const currentStep = steps[i].state = false;
                            const next = steps[i + 1] ? steps[i + 1].state = true : false;
                        return currentStep && next;
                    }

                }    
            }
        }

</script>

    
<template >
    <div class="multi-select">
        <div class="step-one" v-if="steps[0].state">
            <img src="@/assets/img/Splashscreenlogo.svg"/>
            <h1>Welcome to <br><img class="title" src="@/assets/img/Kinyozi-vector.svg"/></h1>
            <p>We’re a specialised Hair assistant to help you get the best out of your haircare.</p>
            <ul>
                <li>Book an appointment with your existing hair dresser using our services</li>
                <li>Discover new hairstylists in new areas and different styles</li>
                <li>Use our Assistant AI to track and suggest best care practices</li>
            </ul>
        </div>
        <div class="step-two"
        v-if="steps[1].state"
        >
            <BaseRadioGroup 
                name="styleOptions"
                v-model="selectedValue"
                :label="styleOptions.label"
                :options="styleOptions"
                v-if="steps[1].state"
                 />
        </div>

        <div 
        class="step-three"
        v-if="steps[2].state"
        >
        <h1>Looking for a new stylist?</h1>
        <p class="subtitle">We have a variety of stylists and salons on our platform we would love to link you with.</p>
        <svg class="separator" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>circle-small</title><path d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" /></svg>
        <p class="captions">Create an account and we will use these details curate your experience</p>   
        <TextInput
           v-bind="$attrs"
           v-model="userDetails.name"
           label="Name"
           type="text"
           error="This input has an error!"
           />
           <TextInput
           v-bind="$attrs"
           v-model="userDetails.phonenumber"
           label="PhoneNumber"
           type="text"
           error="This input has an error!"
           />
           <TextInput
           v-bind="$attrs"
           v-model="userDetails.email"
           label="Email"
           type="text"
           error="This input has an error!"
           />
           <TextInput
           v-bind="$attrs"
           v-model="userDetails.address"
           label="Address"
           type="text"
           error="This input has an error!"
           />
           <SelectInput 
            :options="budgetCost"
            v-model="selectedBudget"
            label="budget"
            />
        </div>

        <div class="step-four" v-if="steps[3].state">
            <h1>Select your Hairstyles</h1>
            <p>With this selection we will recommend the best stylist/salons for you.</p>
            <ImageRadio />
        </div>

        <div class="step-five" v-if="steps[4].state">

            <SuccessCard v-if="!showLoader"/>
              <DotLottieVue v-if="showLoader" class="lottie" style="height: 250px; width: 250px" autoplay loop src="https://lottie.host/d28b66f1-376f-45cb-bb19-bf18a400aaf7/WjUG6rlsWk.lottie" />

        </div>
        <Button @click="nextStep" v-if="!steps[1].state && !steps[4].state">Next</Button>
    </div>
</template>


<style scoped>
.multi-select{
    margin: 20%;
    font-family: "Azeret Mono", serif;
    font-size: 16px;
    
}

.step-one .title {
    width: 70%;
    padding: 16px 0 
}

.step-one h1{
    color: #FFE2A7;
}

.step-one p, .step-one ul{
text-align: justify;
color: #FFE2A7;
font-size: 16px;
line-height: 24px;

}

.step-one{
    padding: 0 10%;
}
li {
    padding: 16px;
}
.step-two{
    width: 30vw;
}
.step-two h1, .step-three h1, .step-four h1{
    padding: 0 16%;
    line-height: 48px;
    text-transform: capitalize;
    color: #FFE2A7;
}

.step-three p, .step-four p {
    line-height: 24px;
    padding: 0 16%;
    color: #FFE2A7;
}

.step-three .text-input{
    padding: 0 16%;
}
.step-three .separator {
    width: 40px;
    text-align: center;
    fill: #FFE2A7!important;
}
.step-three .select-input{
    padding: 0 12%;
    margin: auto;
}
.step-three p {
    text-align: justify;
    padding: 0 16%;
    color: #FFE2A7;
}
.step-three .subtitle{
    font-size: 16px;
    line-height: 25px;
    color: #FFE2A7;
}
.step-three .captions{
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 14px;
    color: #FFE2A7;
}

.step-five{
    margin:auto;
    display:flex;
    align-items:center;
    justify-content:center;
}

</style>
