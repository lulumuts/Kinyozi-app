<template>
    <div class="splash-screen">
        <div class="container">
            <DotLottieVue class="lottie" style="height: 120px; width: 120px" autoplay loop src="https://lottie.host/ca82881b-bf39-4752-afbd-6a53917cd963/TsitQSurH5.lottie" />
            <img src="@/assets/img/Kinyozi-vector.svg">

        </div>
    </div>
</template>

<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
</script>


<style scoped>
.splash-screen {
    height: 92vh;
    width: 45vw;
    margin: auto;
    background-image: url('@/assets/img/pexels-splash-screen.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 24px;
    border: 4px solid #FFE2A7;
    display: flex;
    justify-content:center;
    align-items:center;
}
img {
    width: 32vw;
    mix-blend-mode: luminosity;
}
h1{
    margin: auto;
}

.lottie{
    margin:auto;
}


</style>