<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand text-uppercase mx-3" href="/">samuel vivier</a>
        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">Accueil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Portfolio">Portfolio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/Contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer>
    <div class="container">
      <div class="row">
        <address class="col-md-4 col-lg-4 py-3 px-3">
          <p class="name">Samuel VIVIER</p>
          <p class="footer-para">14Bis Quai Pierre Scize </p>
          <p class="footer-para"> 69009 Lyon, France </p>
          <p class="footer-para"> Téléphone : 06 78 06 92 61 </p>
          <div class="icons">
            <a href="https://codesandbox.io/p/sandbox/github-johndoe-dt6zq2?file=%2Fsrc%2Fstyles.css%3A11%2C24"
              target="_blank">
              <i class="fa-brands fa-github icon-48"></i>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <i class="fa-brands fa-square-twitter icon-48"></i>
            </a>
            <a href="https://fr.linkedin.com/" target="_blank">
              <i class="fa-brands fa-linkedin icon-48"></i>
            </a>
          </div>
        </address>

        <div class="liens_utiles col-md-4 col-lg-4 px-3 py-3">
          <h5>Liens utiles</h5>
          <div class="lien_accueil">
            <a class="icon-link " to="/">
              <i class="fa-solid fa-chevron-right "></i>Accueil
            </a>
          </div>

          <div class="lien_apropos">
            <a class="icon-link " to="/#apropos">
              <i class="fa-solid fa-chevron-right "></i>À propos
            </a>
          </div>

          <div class="lien_contact">
            <a class="icon-link " to="/Contact">
              <i class="fa-solid fa-chevron-right "></i>Me contacter
            </a>
          </div>

          <div class="lien_mentions">
            <a class="icon-link " to="/Mentions">
              <i class="fa-solid fa-chevron-right "></i>Mentions légales
            </a>
          </div>
        </div>

        <div class="footer_realisation col-md-4 col-lg-4 py-3 px-3">
          <h5>Mes dernières réalisations</h5>
          <div class="lien_mentions">
            <a class="icon-link " to="/realisation#realisation1">
              <i class="fa-solid fa-chevron-right "></i>Fresh food
            </a>
          </div>

          <div class="lien_mentions">
            <a class="icon-link " to="/realisation#realisation2">
              <i class="fa-solid fa-chevron-right "></i>Restaurant Akira
            </a>
          </div>

          <div class="lien_mentions">
            <a class="icon-link " to="/realisation#realisation3">
              <i class="fa-solid fa-chevron-right "></i>Espace bien-être
            </a>
          </div>
        </div>
      </div>
    </div>



    <div class="copyright">
      <p class="copy text-white text-center p-2">
        <small>
          <i class="fa-regular fa-copyright"></i> Designed by Samuel VIVIER
        </small>
      </p>
    </div>
  </footer>
</template>

<style scoped></style>
