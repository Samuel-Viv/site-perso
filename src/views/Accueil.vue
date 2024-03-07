<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />

    <section class="container py-3">
      <div class="carte row my-3 mx-2 p-5">
        <div class="apropos_presentation col-md-6 ">
          <div class="apropos" id="apropos">
            <h3>À propos</h3>
          </div>
          <div class="paragraphe">
            <p>
              Passionné par l'informatique et des nouvelles technologie, je suit actuellement
              une fomation de <strong>développeur web</strong> au seins du centre européen de
              formation (CEF). J'ai acquis depuis le debut de cette formation de nombreuses
              bases solides afin de pouvoir travailler dans le domaine du <strong>développement</strong>.
            </p>
            <p>
              Basé à Lyon, je suis à la recherche d'un stage de <strong>10 semaines minimum</strong> au sein d'une
              entreprise pour validier mon
              diplome et approfondir mes connaissance dans le domaine du <strong>développement web et web
                mobile</strong>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que j'écris et je
              respecte les bonnes pratiques du web.
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <img src="" alt="Samuel VIVIER">
          <div class="hard-skills">
            <h3>Hard Skills</h3>

            <div class="logo">
              <img src="../assets/image/html-5.png" alt="Html5">
              <img src="../assets/image/css-3.png" alt="CSS3">
              <img src="../assets/image/js.png" alt="JavaScript">
              <img src="../assets/image/git.png" alt="git">
              <img src="../assets/image/github.png" alt="github">
              <img src="../assets/image/vue.jpg" alt="vue.js">
              <img src="../assets/image/react.jpg" alt="">
              <img src="../assets/image/angular.jpg" alt="angular">
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</template>
