<template>
  <div class="home">
    <h1 class="text-primary">Bem-vindo ao desafio Fullstack!</h1>
    <h5>Pera aí, antes de qualquer coisa eu vou explicar um pouco sobre o projeto!</h5>

    <h2 class="text-primary mt-4">O que foi feito?</h2>
    <h5>Este sistema permite realizar o cadastro de
      <router-link class="text-primary" to="/employee">COLABORADORES</router-link> e
      <router-link class="text-primary" to="/projects">PROJETOS</router-link>.
    </h5>

    <h2 class="text-primary mt-4">As competências</h2>
    <h5>
      Ao cadastrar um colaborador é possível informar todas as competências profissionais do mesmo, como por exemplo o nível de conhecimento em node.js, vue.js, Photoshop e etc.
    </h5>
    <h5>
      Durante as etapas de cadastro também é possível adicionar uma   escala de 1 até 10 ao nível de conhecimento do colaborador em cada competência profissional informada.
    </h5>
    <h5>
      No cadastro de projetos também é possível informar quais competências os profissionais participantes devem possuir. Desta forma, o sistema dará sugestões de colaboradores ideais na hora de adicionar participantes no projeto.
    </h5>
  </div>
</template>
