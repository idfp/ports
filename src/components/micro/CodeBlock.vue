<script setup lang="ts">
import { reactive } from 'vue'
/**
 * Component Properties:
 * code: string 
 * a newline separated code that will be dynamicly typed into console.
 * Example: 
 * `# This is a bash command to print text 
 * echo Message`
 * the code will use bash color-scheme by default
 */
interface codeline{
    type:"comment" | "command",
    text:string,
}
const props = defineProps({
    code: {
        type:String,
        required: true 
    },
    line: {
        type:Number,
        default: 4
    },
    interactive:{
        type: Boolean,
        default:false
    },
    title:{
        type: String,
        default: "Shell"
    }
})
const style = {
    maxHeight: (30 * props.line) + "px"
}
const emit = defineEmits(['execute'])
const state = reactive({ input:"" })
let codelines:Array<codeline> = reactive([])
const codes = props.code.split("\n")
codes.forEach(code=>{
    // Low effort color scheming LOL
    if(code.startsWith("#")){
        code = `<span style="color:#ffffff99">${code}</span>`
        return codelines.push({
            type: 'comment',
            text: code
        })
    }
    const x = code.split(" ")
    x[0] = `<span style="color:var(--arctic-prim)">${x[0]}</span>` // bad practice but easier
    codelines.push({
        type:'command',
        text: x.join(" ")
    })
    
})
function executeCommand(event:Event){
    emit('execute', state.input)
    codelines.push({
        type:'command',
        text: state.input
    })
    state.input = ""
}
</script>
<template>
    <section class="codeblock">
        <div class="codeblock-heading">{{ title }}</div>
        <div class="codeblock-commands" :style="style">
            <pre v-for="codeline in codelines"><span v-html="codeline.text"></span></pre>
            <div v-if="interactive">
                ><input autofocus class="codeblock-input" type="text" v-model="state.input" @keyup.enter="executeCommand"/>
            </div>
        </div>
    </section>
</template>
<style>
.codeblock{
    font-family: 'Roboto Mono', monospace;
    font-size:15px;
    padding:20px;
    padding-right:0px;
    max-width: 400px;
    padding-top:10px;
    background-color: var(--arctic-bg);
    color:var(--text);
}
.codeblock-heading{
    border-bottom: 1px solid var(--arctic-prim);
    margin-bottom: 10px;
    padding-bottom:10px;
    margin-left: -20px;
    margin-right: 0px;
    padding-left: 10px;
    font-size: 12px;
    color:var(--text)
}
.codeblock-input{
    border: none;
    background-color: #00000000;
    color: var(--text);
    outline: none;
    font-family: 'Roboto Mono', monospace;
    font-size:15px;
    margin-left:5px;
    width: 90%;
}
.codeblock-input:focus{
    outline: none;
}
 
@media screen and (max-width:768px) {
    .codeblock{
        max-width: 250px;

    }
}
.codeblock-commands{
    overflow-y:scroll;
}
pre{
    margin:0;
    padding:0;
}
span{
    margin:0;
    white-space: break-spaces;
}
</style>