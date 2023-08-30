<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" href="#">Products</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" href="#"
              >Home <span class="sr-only">Mostrar</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link" href="#"
              >Crear</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <router-view />
  </div>
</template>
