<script setup>
import { watch, ref, onMounted } from 'vue'
import renderStrategy from '../renderer.js'
const props = defineProps({
    record: Object,
    strategy: Object,
})

let canvas, ctx, width, height

onMounted(() => {
    ctx = canvas.getContext('2d')
    width = canvas.width
    height = canvas.height
    // console.log(ctx, width, height)
    watch(props, () => {
        if (props.record && props.strategy && ctx) {
            // console.log(props.record, props.strategy)
            ctx.clearRect(0, 0, width, height)
            for (let key in props.record) {
                if (props.strategy[key] !== -1 && renderStrategy[key][props.strategy[key]].strategy) {
                    renderStrategy[key][props.strategy[key]].strategy(ctx, width, height, props.record[key], props.strategy)
                }
            }
        }
    }, { deep: true, immediate: true })
})



</script>
<template>
    <div class="record">
        <canvas :ref="el => canvas = el" width="240" height="148.32" />
    </div>
</template>