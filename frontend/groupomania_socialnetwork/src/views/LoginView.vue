<template>

    <headerComponent>

    </headerComponent>

    <form class="identification" @onclick="btn__login">
        <div class="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" class="form-control" placeholder="Entrez votre email" />
        </div>

        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input name="password" type="password" class="form-control" placeholder="Entrez votre mot de passe" />
        </div>

        <div class="form-group">
            <button class="btn__login">
                <span>Se connecter</span>
            </button>
        </div>

    </form>

    <p>Pas de compte ? <a href="http://localhost:8080/register"> S'inscrire</a></p>

</template>

<script>

import headerComponent from '../components/headerComponent.vue'
export default {

    name: "LoginView",
    components: { headerComponent }
}

</script>

<style scoped>
.identification {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 600px;
    background-color: darkgrey;
    text-align: center;
}

label {

    margin: 8px 0px;
}

.form-group {

    display: flex;
    flex-direction: column;
    justify-content: center;

}

input {

    border-radius: 30px;
    max-width: 400px;
}

p {
    max-width: 600px;
    margin: auto;
    padding: 10px 0px;
}

.btn__login {

    margin: 10px 0px;
}

header {

    display: flex;
    justify-content: center;
}
</style>