<template>
    <div :class="msgClass">
        <span id="from">{{from}}</span> <br>
        <span id="msg">{{msg}}</span>
    </div>
</template>

<script>
    export default {
        name: "message",
        props: {"from": "", "msg": "", "you": false},
        data() {
            return {
                msgClass: "",
            }
        },
        mounted() {
            if (this.you) this.msgClass += "your ";
            if (this.msg.length > 20 && this.msg.length <= 40) this.msgClass += "large";
            if (this.msg.length > 40) this.msgClass += "largest"
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
        word-break: break-word;
    }

    .large {
        height: 60px;
    }

    .largest {
        height: 80px;
    }

    .your {
        background: rgba(21, 145, 235, .2);
    }

    #from {
        font-size: small;
        width: 160px;
        font-weight: bold;
    }
</style>
