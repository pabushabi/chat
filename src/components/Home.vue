<template>
    <div>
        <h1>Чат на WebSocket</h1>

        <div id="wrapper">
            <div v-if="!logged" id="loginForm">
                <label>Имя пользователя
                    <input type="text" v-model="username" v-on:keydown.enter="auth" ref="nameInput">
                </label>
                <button @click="auth">Присоединиться</button>
            </div>
            <div v-if="logged">
                <div id="chat" ref="chat">
                    <message v-for="item in messages" :from="item.from" :msg="item.msg" :you="item.from === username"/>
                </div>
                <input v-model="msg" v-on:keydown.enter="send" autofocus maxlength="50">
                <button @click="send">Отправить</button>
            </div>
        </div>
    </div>
</template>

<script>
    import message from "@/components/message";
    import io from 'socket.io-client'

    export default {
        name: 'home',
        components: {
            message,
        },
        data() {
            return {
                logged: false,
                username: "",
                msg: "",
                messages: [
                    {from: "bot", msg: "Начните общение!"},
                ],
                socket: io('0ed66cd1.ngrok.io'),
            }
        },
        methods: {
            auth() {
                if (this.username === "") return;
                this.logged = true;
                this.socket.emit('new', {user: this.username});
            },
            send() {
                if (this.msg === "") return;
                this.socket.emit('message', {from: this.username, msg: this.msg});
                this.msg = "";
            }
        },
        mounted() {
            this.socket.on('smessage', (msg) => {
                this.messages = msg;
                setTimeout(() => {
                    this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight;
                }, 50)
            });
            this.$refs.nameInput.focus();
        }
    }
</script>

<style>
    #wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #loginForm {
        width: 15%;
        height: 20%;
        box-shadow: 3px 3px 12px rgba(27, 21, 35, .3);
        padding: 20px;
        margin: 20px;
        min-width: 200px;
    }

    input {
        margin: 10px;
        display: block;
        width: 85%;
        height: 30px;
        padding: 0 7px 0 7px;
        border-radius: 3px;
        border: 1px solid rgba(21, 27, 35, .6);
        outline: none;
    }

    input:focus {
        border: 1px solid rgba(21, 145, 235, .9);
    }

    button {
        width: 180px;
        height: 30px;
        background: rgba(21, 145, 235, .6);
        border-radius: 3px;
        border: 0;
        cursor: pointer;
        color: white;
    }

    #chat {
        max-height: 500px;
        overflow: auto;
        scroll-behavior: smooth;
    }
</style>
