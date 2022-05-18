<template>

    <form @submit="handleLogin">

        <div class="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" class="form-control" />
        </div>

        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input name="password" type="password" class="form-control" />
        </div>

        <div class="form-group">
            <button class="btn__login">
                <span>Se connecter</span>
            </button>
        </div>

    </form>

</template>
<script>


export default {

    name: 'LoginView'
}

</script>