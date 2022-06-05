<template>
    <div class="page-sign-up">
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h1 class="title">Regristro</h1>

                <form @submit.prevent="submitForm">
                    <div class="field">
                        <label>Usuario</label>
                        <div class="control">
                            <input type="text" class="input" v-model="username">
                        </div>
                    </div>

                    <div class="field">
                        <label>Contraseña</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        <label>Repite la contraseña</label>
                        <div class="control">
                            <input type="password" class="input" v-model="password2">
                        </div>
                    </div>

                    <div class="notification is-danger" v-if="errors.length">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <button class="button is-dark">Registrar</button>
                        </div>
                    </div>

                    <hr>

                    O <router-link to="/log-in">click aqui</router-link> para iniciar sesion!
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { toast } from 'bulma-toast'

export default {
    name: 'SignUp',
    data() {
        return {
            username: '',
            password: '',
            password2: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Registro | Alley Videojuegos'
    },
    methods: {
        submitForm() {
            this.errors = []
            if (this.username === '') {
                this.errors.push('Falta agregar usuario')
            }
            if (this.password === '') {
                this.errors.push('La contraseña es muy corta')
            }
            if (this.password !== this.password2) {
                this.errors.push('Las contraseñas no coinciden')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }
                axios
                    .post("/api/v1/users/", formData)
                    .then(response => {
                        toast({
                            message: 'Cuenta creada, por favor inicie sesion!',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2000,
                            position: 'bottom-right',
                        })
                        this.$router.push('/log-in')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Algo salio mal. Intente de nuevo')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    },
}
</script>