<template>

    <header>
        <img src="../assets/icon-above-font.png">
    </header>

    <Form class="identification" @onclick="btn__signup">

        <div class="form-group">
            <label for="first_name">Nom</label>
            <input name="first_name" type="text" class="form-control" placeholder="Entrez votre nom" />
        </div>
        <div class="form-group">
            <label for="last_name">Prénom</label>
            <input name="last_name" type="text" class="form-control" placeholder="Entrez votre prénom" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input name="email" type="email" class="form-control" placeholder="Entrez votre email" />
        </div>
        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input name="password" type="password" class="form-control" placeholder="Entrez votre mot de passe" />
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

    margin: 5px 0px;
}

.form-group {

    display: flex;
    flex-direction: column;
    justify-content: center;

}

.form-group,
input {

    border-radius: 30px;
    max-width: 400px;
}

.btn__signup {

    margin: 10px 0px;
}

header {

    display: flex;
    justify-content: center;
}
</style>