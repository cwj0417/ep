<script setup>
import { reactive, ref, onMounted } from 'vue'
import Record from './components/Record.vue'
import renderStrategy, { stratMap, defaultStrat } from './renderer.js'

import data from './data.json'

const to10 = num => num < 10 ? `0${num}` : num
const formatTs = (ts) => {
  const date = new Date(+ts)
  return `${date.getFullYear()}-${to10(date.getMonth() + 1)}-${to10(date.getDate())}`
}

const datasource = Object.fromEntries(Object.entries(data).map(([k, v]) => ([new Date(k).valueOf(), v])))

const dateRange = ['2024-01-27', formatTs(Date.now() + 86400000 * 7)]
const days = (new Date(dateRange[1]) - new Date(dateRange[0])) / 86400000
const firstDate = new Date(dateRange[0]).valueOf()

const scrollTs = ref(new Date(dateRange[0]).valueOf() + 86400000 * 4)

const strategy = reactive(defaultStrat)

let detailRefs = {}

const jumpTo = (ts) => {
  detailRefs[ts]?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
}

let currentScroll = 0
let scrollThrottleHandler = null
const isShowFilter = ref(true)

const onMainScroll = (event) => {
  if (!scrollThrottleHandler) {
    const target = event.target
    isShowFilter.value = currentScroll > target.scrollTop
    currentScroll = target.scrollTop
    const scrollDate = new Date(dateRange[0]).valueOf() + (new Date(dateRange[1]) - new Date(dateRange[0])) / target.scrollHeight * (target.scrollTop + target.clientHeight / 2)
    scrollTs.value = scrollDate
    scrollThrottleHandler = setTimeout(() => {
      scrollThrottleHandler = null
    }, 350)
  }
}

let detailScrollThrottleHandler = null

const onDetailScroll = (event) => {
  if (!detailScrollThrottleHandler) {
    isShowFilter.value = false
    detailScrollThrottleHandler = setTimeout(() => {
      detailScrollThrottleHandler = null
    }, 350)
  }
}

const setAll = (isDefault) => {
  for (const key in defaultStrat) {
    if (['coner', 'memo', 'detail'].includes(key)) {
      continue
    }
    strategy[key] = isDefault ? 0 : -1
  }
}

onMounted(() => {
  const body = document.querySelector('#calander-body')
  body.scroll(0, body.scrollHeight * (new Date() - new Date(dateRange[0])) / (new Date(dateRange[1]) - new Date(dateRange[0])) - body.clientHeight)
})
</script>

<template>
  <div id="cont-wrap">
    <div id="calender-wrap">
      <div id="calender-head">
        <div class="calender-year">
          {{ new Date(scrollTs).getFullYear() }}年{{ new Date(scrollTs).getMonth() + 1 }}月
        </div>
        <div class="calender-item">周日</div>
        <div class="calender-item">周一</div>
        <div class="calender-item">周二</div>
        <div class="calender-item">周三</div>
        <div class="calender-item">周四</div>
        <div class="calender-item">周五</div>
        <div class="calender-item">周六</div>
      </div>
      <div id="calander-body" @scroll="onMainScroll">
        <div class="calender-item card"
          :class="{ active: firstDate + index * 86400000 - scrollTs < 86400000 * 31 && (new Date(firstDate + index * 86400000).getMonth() === new Date(scrollTs).getMonth()) }"
          v-for="index in days" @click="jumpTo(firstDate + index * 86400000)" :key="index">
          <div class="date">
            {{ new Date(firstDate + index * 86400000).getDate() }}
          </div>
          <Record :strategy="strategy" :record="datasource[firstDate + index * 86400000]" />
        </div>
      </div>
      <div id="strategy-select" :style="`transform: translateY(${isShowFilter ? 0 : '100%'})`">
        <div class="strat" v-for="entry in Object.entries(renderStrategy)" :key="entry[0]">
          <div class="opt-head">
            {{ stratMap[entry[0]] }}
          </div>
          <div class="option" @click="strategy[entry[0]] = index" v-for="(option, index) in entry[1]"
            :class="{ active: index === strategy[entry[0]] }" :key="option.name">
            {{ option.name }}
          </div>
          <div class="option" @click="strategy[entry[0]] = -1" :class="{ active: -1 === strategy[entry[0]] }">
            不渲染
          </div>
        </div>
        <div class="strat setall">
          <div class="action" @click="setAll(true)">恢复默认</div>
          <div class="action" @click="setAll(false)">关闭渲染</div>
        </div>
      </div>
    </div>
  </div>
  <div id="detail" @scroll="onDetailScroll">
    <div class="detail-card" v-for="[datets, item] in Object.entries(datasource)" :ref="ref => detailRefs[datets] = ref"
      :key="datets">
      {{ formatTs(datets) }} <span class="tag s3" v-if="item.s3">小发 {{ item.s3 }}</span><span class="tag s4"
        v-if="item.s4">轻微 {{ item.s4
        }}</span><span class="tag hh" v-if="item.hh">恍惚 {{ item.hh }}</span>
      <pre v-if="item.memo" style="font-weight: 900;font-size:16px;padding: 10px 20px">{{ item.memo }}</pre>
      <pre v-if="item.coner" style="font-weight: 900;font-size:16px;padding: 10px 20px">{{ item.coner[1] }}</pre>
      <pre>{{ item.detail }}

      </pre>
    </div>
  </div>
</template>

<style>
#cont-wrap {
  width: 70%;
  height: 100%;
}

#calender-wrap {
  width: 100%;
  height: 100%;
}

#detail {
  width: 30%;
  height: 100%;
  overflow: auto;
  border: 1px solid #b6b6b6;
}

#calender-head {
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: 1px solid #b6b6b6;
  box-sizing: border-box;
}

#calander-body {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}

.calender-year {
  width: 100%;
}

.calender-item {
  width: 14.25%;
}

.card {
  height: 8.3125vw;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  position: relative;
}

.card.active {
  background-color: #c9fff9
}

.date {
  opacity: 0.4;
  font-size: 1.2rem;
  line-height: 1.2rem;
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
}

.record {
  width: 100%;
  height: 100%;
}

#strategy-select {
  font-size: 0.8rem;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  transition: transform 1s linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)
}

.strat {
  width: 11%;
  border: 1px dotted #ddd;
  box-sizing: border-box;
}

.strat>.action {
  height: 50%;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  box-shadow: 1px 1px 2px #bbb;
  font-weight: 500;
}

.opt-head {
  font-weight: 600;
}

.option.active {
  background-color: #8f8d8d;
  color: white;
  font-weight: 500;
}

.option {
  background-color: #f2f2f2;
}

canvas {
  height: 100%;
  width: 100%;
}

.tag {
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 5px;
  margin-left: 8px;
}

.s3 {
  background-color: hsl(200, 40%, 25%);
  color: hsl(200 100% 70%);
}

.s4 {
  background-color: hsl(310, 40%, 25%);
  color: hsl(310 100% 70%);
}

.hh {
  background-color: hsl(127 40% 25%);
  color: hsl(127 100% 70%);
}

pre {
  text-align: left;
  margin: 0;
  padding: 0 10px;
  white-space: break-spaces;
}


@media screen and (max-width: 600px) {
  .strat {
    width: 25%;
  }

  #app {
    flex-direction: column;
  }

  #cont-wrap {
    width: 100%;
    height: 40%;
  }

  #detail {
    width: 100%;
    height: 60%;
  }

  .setall {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .action {
    width: 100%;
    height: 100% !important;
  }
}
</style>
