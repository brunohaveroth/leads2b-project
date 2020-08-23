<template>
  <div class="home">
    <h1 class="text-primary">Bem-vindo ao desafio Fullstack!</h1>
    <h5>Pera ai!!, antes de qualquer coisa eu vou explicar um pouco sobre o projeto...</h5>

    <h2 class="text-primary mt-4">O que foi feito?</h2>
    <h5>O projeto permite fazer o cadastro de
      <router-link class="text-primary" to="/employee">COLABORADORES</router-link> e
      <router-link class="text-primary" to="/projects">PROJETOS</router-link>.
    </h5>

    <h2 class="text-primary mt-4">As competências</h2>
    <h5>Ao cadastrar um colaborador é possível informar todas as competências profissionais ex: (Node.js, Vue.js etc), e
       uma pontuação de 1 até 10.</h5>
    <h5>Ao cadastrar um projeto, é possível informar quais competências os profissionais participantes devem possuir.</h5>

    <h5>Então quando chegar a hora de adicionar os participantes, o sistema vai sugerir os colaboradores ideais para o seu projeto.</h5>
  </div>
</template>
