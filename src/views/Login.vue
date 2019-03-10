<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link to="/register">Need an account</router-link>
          </p>

          <!-- <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>-->
          <form>
            <!-- <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name">
            </fieldset>-->
            <fieldset class="form-group">
              <input
                v-model="email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              >
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              >
            </fieldset>
            <button @click.stop.prevent="login" class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
//tslint:disable
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  email = "";
  password = "";

  login() {
    console.log(
      `login email is: ${this.email} & password is: ${this.password}`
    );
  }
}
</script>
