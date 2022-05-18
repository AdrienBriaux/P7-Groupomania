<template>

    <Form @submit="handleRegister">

        <div class="form-group">
            <label for="first_name">Nom</label>
            <input name="first_name" type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label for="last_name">Prénom</label>
            <input name="last_name" type="text" class="form-control" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" class="form-control" />
        </div>
        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input name="password" type="password" class="form-control" />
        </div>

        <div class="form-group">
            <button class="btn__signup">
                <span>S'enregistrer</span>
            </button>
        </div>

    </Form>

</template>

<script>

export default {

    name: 'RegisterView',
}

</script>