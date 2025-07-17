<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import Record from './components/Record.vue'
import renderStrategy, { stratMap, defaultStrat } from './renderer.js'

import data from './data.json'

const to10 = num => num < 10 ? `0${num}` : num
const formatTs = (ts) => {
  const date = new Date(+ts)
  return `${date.getFullYear()}-${to10(date.getMonth() + 1)}-${to10(date.getDate())}`
}

const datasource = Object.fromEntries(Object.entries(data).map(([k, v]) => ([new Date(k).valueOf(), v])))

const dateRange = ['2024-01-27', formatTs(Date.now() + 86400000 * 21)]
const days = (new Date(dateRange[1]) - new Date(dateRange[0])) / 86400000
const firstDate = new Date(dateRange[0]).valueOf()

const scrollTs = ref(new Date(dateRange[0]).valueOf() + 86400000 * 4)

const strategy = reactive(defaultStrat)

const currentDetail = ref(0)

let detailRefs = {}

const jumpTo = (ts) => {
  currentDetail.value = ts.toString();
  scrollTs.value = +ts;
  // 只在详情容器内滚动，避免影响整个页面
  const detailElement = detailRefs[ts];
  const detailContainer = document.querySelector('#detail');
  if (detailElement && detailContainer) {
    const elementRect = detailElement.getBoundingClientRect();
    const containerRect = detailContainer.getBoundingClientRect();
    
    if (elementRect.top < containerRect.top || elementRect.bottom > containerRect.bottom) {
      const elementOffsetTop = detailElement.offsetTop;
      const containerHeight = detailContainer.clientHeight;
      const elementHeight = detailElement.offsetHeight;
      
      // 计算滚动位置，让元素在容器中央
      const scrollTop = elementOffsetTop - (containerHeight - elementHeight) / 2;
      detailContainer.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  }
}

const jumpToCalendar = (ts) => {
  currentDetail.value = ts.toString();
  scrollTs.value = +ts;
  setTimeout(() => {
    const card = document.querySelector(`.card[data-ts="${ts}"]`);
    const calendarBody = document.querySelector('#calander-body');
    if (card && calendarBody) {
      // 只在日历容器内滚动，避免影响整个页面
      const cardRect = card.getBoundingClientRect();
      const containerRect = calendarBody.getBoundingClientRect();
      
      if (cardRect.top < containerRect.top || cardRect.bottom > containerRect.bottom) {
        const cardOffsetTop = card.offsetTop;
        const containerHeight = calendarBody.clientHeight;
        const cardHeight = card.offsetHeight;
        
        // 计算滚动位置，让卡片在容器中央
        const scrollTop = cardOffsetTop - (containerHeight - cardHeight) / 2;
        calendarBody.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }
  }, 0);
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

const summary = reactive({
  s3: { days: 0, count: 0 },
  s4: { days: 0, count: 0 },
  hh: { days: 0, count: 0 },
})

watch(scrollTs, () => {
  const currentMonth = new Date(scrollTs.value).getMonth()
  const currentYear = new Date(scrollTs.value).getFullYear()

  summary.s3.days = 0
  summary.s3.count = 0
  summary.s4.days = 0
  summary.s4.count = 0
  summary.hh.days = 0
  summary.hh.count = 0

  for (const [date, record] of Object.entries(datasource)) {
    const recordDate = new Date(+date)
    if (recordDate.getMonth() === currentMonth && recordDate.getFullYear() === currentYear) {
      if (record.s3) {
        summary.s3.days++
        summary.s3.count += record.s3
      }
      if (record.s4) {
        summary.s4.days++
        summary.s4.count += record.s4
      }
      if (record.hh) {
        summary.hh.days++
        summary.hh.count += record.hh
      }
    }
  }
})

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

const isStrategyVisible = ref(false)

const toggleStrategy = () => {
  isStrategyVisible.value = !isStrategyVisible.value
}

onMounted(() => {
  const body = document.querySelector('#calander-body')
  body.scroll(0, body.scrollHeight * (new Date() - new Date(dateRange[0])) / (new Date(dateRange[1]) - new Date(dateRange[0])) - body.clientHeight)

  document.addEventListener('click', (e) => {
    const strategySelect = document.querySelector('#strategy-select')
    const strategyTrigger = document.querySelector('.strategy-trigger')
    if (!strategySelect?.contains(e.target) && !strategyTrigger?.contains(e.target)) {
      isStrategyVisible.value = false
    }
  })
})
</script>

<template>
  <div id="cont-wrap">
    <div id="calender-wrap">
      <div id="calender-head">
        <div class="calender-year">
          {{ new Date(scrollTs).getFullYear() }}年{{ new Date(scrollTs).getMonth() + 1 }}月
          <span class="tag s3">{{ summary.s3.days }}天, {{ summary.s3.count }}次</span>
          <span class="tag s4">{{ summary.s4.days }}天, {{ summary.s4.count }}次</span>
          <span class="tag hh">{{ summary.hh.days }}天, {{ summary.hh.count }}次</span>
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
        <div class="calender-item card" :class="[{
          'current-month': (new Date(firstDate + index * 86400000).getMonth() === new Date(scrollTs).getMonth()),
          'active': currentDetail == firstDate + index * 86400000
        }]
          " :data-ts="firstDate + index * 86400000" v-for="index in days" @click="jumpTo(firstDate + index * 86400000)"
          :key="index">
          <div class="date">
            {{ new Date(firstDate + index * 86400000).getDate() }}
          </div>
          <Record :strategy="strategy" :record="datasource[firstDate + index * 86400000]" />
        </div>
      </div>
      <div class="strategy-trigger" @click="toggleStrategy">
        <span style="font-size: 1.2rem;">⚙️</span>
      </div>
      <div id="strategy-select" :class="{ visible: isStrategyVisible }">
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
    <div :class="['detail-card', currentDetail == datets ? 'active' : '']"
      v-for="[datets, item] in Object.entries(datasource)" :ref="ref => detailRefs[datets] = ref" :key="datets"
      @click="jumpToCalendar(datets)">
      <div class="detail-header">
        <span class="detail-date">{{ formatTs(datets) }}</span>
        <span class="detail-tags">
          <span class="tag s3" v-if="item.s3">小发 {{ item.s3 }}</span>
          <span class="tag s4" v-if="item.s4">轻微 {{ item.s4 }}</span>
          <span class="tag hh" v-if="item.hh">恍惚 {{ item.hh }}</span>
        </span>
      </div>
      <hr class="detail-divider" />
      <pre v-if="item.memo" class="detail-memo">{{ item.memo }}</pre>
      <pre v-if="item.coner" class="detail-coner">{{ item.coner[1] }}</pre>
      <pre class="detail-detail">{{ item.detail }}</pre>
    </div>
  </div>
</template>

<style>
/* 确保在小屏幕上不会出现横向滚动 */
* {
  box-sizing: border-box;
}

:root {
  --theme-primary: #9966cc;
  --theme-primary-light: #f8f5ff;
  --theme-primary-dark: #7a4fb5;
  --theme-accent: #e0b3ff;
}

body,
#app {
  background: #f7f8fa;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  /* 禁用双击缩放，改善移动端体验 */
  touch-action: manipulation;
}

/* 改善移动端滚动性能 */
#calander-body,
#detail {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

/* 移动端友好的点击区域 */
.card,
.detail-card,
.strategy-trigger,
.option,
.action {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

#cont-wrap {
  width: 70%;
  height: 100%;
}

#calender-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}

#detail {
  width: 30%;
  height: 100%;
  background: #f6f7fa;
  border-radius: 18px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.04);
  overflow-y: auto;
}

.detail-card {
  margin: 10px 10px 10px 10px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(153, 102, 204, 0.07);
  padding: 10px 12px 8px 12px;
  font-size: 0.88rem;
  color: #222;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s, color 0.2s;
  border: 1.5px solid #e3e8ee;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-card.active {
  background: var(--theme-primary);
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(153, 102, 204, 0.13);
  border-color: var(--theme-primary);
}

.detail-card.active .detail-header,
.detail-card.active .detail-memo,
.detail-card.active .detail-detail {
  color: #fff;
}

.detail-card.active .detail-coner {
  color: #ffd700;
}

.detail-card:hover {
  box-shadow: 0 6px 24px 0 rgba(153, 102, 204, 0.13);
  background: #eaf7fa;
  color: #222;
}

.detail-card.active:hover {
  background: var(--theme-primary);
  color: #fff;
  box-shadow: 0 4px 16px 0 rgba(153, 102, 204, 0.13);
}

.detail-card.active:hover .detail-header,
.detail-card.active:hover .detail-memo,
.detail-card.active:hover .detail-detail {
  color: #fff;
}

.detail-card.active:hover .detail-coner {
  color: #ffd700;
}

.detail-card .detail-header {
  font-size: 0.92rem;
  font-weight: 600;
  margin-bottom: 2px;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  gap: 6px;
}

.detail-card .detail-date {
  font-size: 0.88rem;
  color: #222;
  font-weight: 400;
  margin-right: 8px;
}

.detail-card.active .detail-date {
  color: #fff;
}

.detail-card .detail-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.detail-card .detail-divider {
  height: 1px;
  background: #e3e8ee;
  margin: 8px 0 4px 0;
  border: none;
}

.detail-card.active .detail-divider {
  background: #b2e6f0;
}

.detail-card .detail-memo,
.detail-card .detail-coner,
.detail-card .detail-detail {
  font-size: 0.88rem;
  font-weight: 400;
  padding: 2px 0 2px 0;
  color: inherit;
  background: none;
  border: none;
  margin: 0;
  white-space: break-spaces;
}

.detail-card .detail-memo {
  font-weight: 700;
  color: var(--theme-primary);
}

.detail-card .detail-coner {
  font-weight: 700;
  color: #b12bc7;
}

.detail-card .detail-detail {
  color: #444;
}

#calender-head {
  width: 100%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 12px 12px 0 0;
  position: relative;
  z-index: 2;
}

.calender-year {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--theme-primary);
  letter-spacing: 0.02em;
}

.calender-year .tag {
  font-size: 0.85rem;
  padding: 2px 8px;
  border-radius: 6px;
  margin-left: 12px;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.calender-year .tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.calender-item {
  width: 14.25%;
  min-width: 0;
  text-align: center;
  font-weight: 500;
  color: #666;
  font-size: 0.9rem;
  padding: 8px 0;
  transition: all 0.2s ease;
  user-select: none;
  position: relative;
  border-right: 1px solid #f0f0f0;
  flex-shrink: 0;
}

.calender-item:last-child {
  border-right: none;
}

.calender-item:not(.card):hover {
  color: var(--theme-primary);
}

.calender-item:not(.card):after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--theme-primary);
  transition: all 0.2s ease;
  transform: translateX(-50%);
}

.calender-item:not(.card):hover:after {
  width: 70%;
}

#calander-body {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}

.card {
  height: 6.16455vw;
  box-sizing: border-box;
  border-radius: 0;
  background: #ffffff;
  box-shadow: none;
  margin: 0;
  padding: 4px;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.card.current-month {
  background: #f3f0ff;
  border-color: #e8e8e8;
}

.card.active {
  background: var(--theme-primary);
  color: #fff;
  box-shadow: 0 2px 10px rgba(153, 102, 204, 0.3);
  border-color: var(--theme-primary);
  border-width: 1px;
  transform: none;
  z-index: 10;
}

.card.active .date {
  color: #fff;
  background: var(--theme-primary);
}

.card:hover {
  background: #f8f5ff;
  z-index: 2;
  color: #222;
}

.card.active:hover {
  background: var(--theme-primary);
  color: #fff;
  box-shadow: 0 4px 16px rgba(153, 102, 204, 0.4);
  transform: none;
}

.card:not(.current-month) {
  background: #f8f8f8;
  color: #ccc;
}

.card .date {
  opacity: 1;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  background: none;
  border-radius: 0;
  width: auto;
  height: auto;
  display: block;
  text-align: right;
  transition: color 0.2s;
  position: absolute;
  right: 8px;
  top: 6px;
  z-index: 1;
}

.card.current-month .date {
  color: #333;
  background: none;
  font-weight: 600;
}

.card.active .date {
  color: #fff;
  background: none;
  font-weight: 600;
}

.card:not(.current-month) .date {
  color: #ccc;
  background: none;
}

.card .card-content,
.card .card-tags {
  display: none !important;
}

#strategy-select {
  font-size: 0.85rem;
  width: 100vw;
  display: flex;
  align-items: stretch;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0 -4px 20px rgba(153, 102, 204, 0.08);
  border-top: 1px solid #e3e8ee;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px;
  gap: 10px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100%);
  pointer-events: none;
  overflow-x: auto;
}

#strategy-select.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  pointer-events: auto;
}

.strategy-trigger {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  border-radius: 0;
  background: #f6fafd;
  color: var(--theme-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1000;
  border: 1px solid #e3e8ee;
  border-top: none;
  border-left: none;
}

.strategy-trigger:hover {
  background: #eaf7fa;
  color: #32c5dd;
}

.strat {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e3e8ee;
  overflow: hidden;
  flex-shrink: 0;
}

.opt-head {
  font-weight: 600;
  color: var(--theme-primary);
  padding: 10px 12px;
  background: #f6fafd;
  border-bottom: 1px solid #e3e8ee;
  font-size: 0.88rem;
  white-space: nowrap;
}

.option {
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #6a7a8c;
  font-size: 0.85rem;
  border-bottom: 1px solid #f0f3f6;
  white-space: nowrap;
}

.option:last-child {
  border-bottom: none;
}

.option:hover {
  background: #eaf7fa;
  color: var(--theme-primary);
  padding-left: 16px;
}

.option.active {
  background: var(--theme-primary);
  color: white;
  font-weight: 500;
}

.option.active:hover {
  background: #32c5dd;
  padding-left: 12px;
}

.strat.setall {
  margin-left: auto;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  border-radius: 8px;
  overflow: hidden;
}

.strat.setall .action {
  flex: 1;
  padding: 12px;
  background: #ffffff;
  color: var(--theme-primary);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  white-space: nowrap;
  border-bottom: 1px solid #f0f3f6;
}

.strat.setall .action:last-child {
  border-bottom: none;
}

.strat.setall .action:hover {
  background: #eaf7fa;
  color: #32c5dd;
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

@media screen and (max-width: 768px) {
  body,
  #app {
    flex-direction: column;
  }
  
  #cont-wrap {
    width: 100%;
    height: 65%;
    order: 1;
  }
  
  #detail {
    width: 100%;
    height: 35%;
    border-radius: 12px 12px 0 0;
    order: 2;
    margin-top: 4px;
    box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.08);
  }
  
  .card {
    height: 8.5vw;
    padding: 2px;
  }
  
  .card .date {
    font-size: 0.85rem;
    right: 4px;
    top: 4px;
  }
  
  #calender-head {
    height: 60px;
  }
  
  .calender-year {
    font-size: 1rem;
    padding: 2px 0;
    flex-wrap: wrap;
    gap: 4px;
  }
  
  .calender-year .tag {
    font-size: 0.75rem;
    padding: 1px 6px;
    margin-left: 4px;
  }
  
  .calender-item {
    font-size: 0.8rem;
    padding: 6px 0;
  }
  
  .detail-card {
    margin: 8px;
    padding: 8px 10px 6px 10px;
    font-size: 0.82rem;
  }
  
  .detail-card .detail-header {
    font-size: 0.85rem;
    margin-bottom: 1px;
  }
  
  .detail-card .detail-date {
    font-size: 0.8rem;
    margin-right: 6px;
  }
  
  .detail-card .detail-tags {
    gap: 4px;
  }
  
  .detail-card .detail-tags .tag {
    font-size: 10px;
    padding: 1px 4px;
  }
  
  .strategy-trigger {
    width: 36px;
    height: 36px;
  }
  
  .strategy-trigger span {
    font-size: 1.3rem !important;
  }
}

@media screen and (max-width: 600px) {
  #strategy-select {
    padding: 8px;
    gap: 6px;
    height: 50vh;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    max-height: 400px;
  }

  .strat {
    min-width: 100px;
    flex: 1 1 calc(50% - 3px);
    max-width: calc(50% - 3px);
  }

  .strat.setall {
    min-width: 100px;
    flex: 1 1 100%;
    max-width: 100%;
  }
  
  .opt-head {
    padding: 8px 10px;
    font-size: 0.82rem;
  }
  
  .option {
    padding: 6px 10px;
    font-size: 0.8rem;
  }
  
  .strat.setall .action {
    padding: 10px;
    font-size: 0.8rem;
  }
  
  .card {
    height: 10vw;
  }
  
  .card .date {
    font-size: 0.8rem;
    right: 3px;
    top: 3px;
  }
  
  .calender-year {
    font-size: 0.9rem;
  }
  
  .calender-year .tag {
    font-size: 0.7rem;
    padding: 1px 4px;
    margin-left: 2px;
  }
  
  .calender-item {
    font-size: 0.75rem;
    padding: 4px 0;
  }
  
  .detail-card {
    margin: 6px;
    padding: 6px 8px 4px 8px;
    font-size: 0.8rem;
  }
  
  .detail-card .detail-header {
    font-size: 0.8rem;
  }
  
  .detail-card .detail-date {
    font-size: 0.75rem;
    margin-right: 4px;
  }
}

@media screen and (max-width: 480px) {
  .card {
    height: 12vw;
  }
  
  .card .date {
    font-size: 0.75rem;
    right: 2px;
    top: 2px;
  }
  
  .calender-year {
    font-size: 0.85rem;
    padding: 1px 0;
  }
  
  .calender-year .tag {
    font-size: 0.65rem;
    padding: 1px 3px;
    margin-left: 1px;
  }
  
  .calender-item {
    font-size: 0.7rem;
    padding: 3px 0;
  }
  
  #calender-head {
    height: 50px;
  }
  
  #strategy-select {
    height: 60vh;
    max-height: 450px;
  }
  
  .strat {
    flex: 1 1 100%;
    max-width: 100%;
    margin-bottom: 4px;
  }
  
  .detail-card {
    margin: 4px;
    padding: 4px 6px 3px 6px;
    font-size: 0.75rem;
  }
  
  .detail-card .detail-header {
    font-size: 0.75rem;
  }
  
  .detail-card .detail-date {
    font-size: 0.7rem;
    margin-right: 3px;
  }
  
  .detail-card .detail-tags .tag {
    font-size: 9px;
    padding: 1px 3px;
  }
  
  .strategy-trigger {
    width: 32px;
    height: 32px;
  }
  
  .strategy-trigger span {
    font-size: 1.1rem !important;
  }
}
</style>
