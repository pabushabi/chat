<template>
    <div :class="you ? 'your' : ''">
        <span id="from">{{from}}</span>
        <span id="msg">{{msg}}</span>
    </div>
</template>

<script>
    export default {
        name: "message",
        props: {"from": "" , "msg": "", "you": false},
        data() {
            return {}
        }
    }
</script>

<style scoped>
    div {
        width: 205px;
        height: 40px;
        border-radius: 3px;
        border: 1px solid rgba(21, 27, 35, .1);
        background: rgba(21, 27, 35, .05);
        margin: 5px;
    }
    .your {
        background: rgba(21, 145, 235, .2);
    }
    #from {
        font-size: small;
        width: 160px;
        position: relative;
        top: 0;
        right: 10px;
    }
    #msg {
        width: 160px;
        position: relative;
        top: 17px;
        right: 20px;
    }
</style>
