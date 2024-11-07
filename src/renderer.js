const renderStrategy = {
    s1: [
        {
            name: '红色背景',
            strategy: (ctx, w, h, val, strat) => {
                ctx.globalCompositeOperation = 'destination-over'
                ctx.fillStyle = '#c14949'
                ctx.fillRect(0, 0, w, h)
            }
        },
        {
            name: '红色长条',
            strategy: (ctx, w, h, val, strat) => {
                ctx.fillStyle = 'red'
                ctx.globalCompositeOperation = 'destination-over'
                val.forEach(time => {
                    ctx.fillRect(time / 24 * w, 0, w / 24, h)
                })
            }
        }
    ],
    s2: [
        {
            name: '紫色背景',
            id: 's21',
            strategy: (ctx, w, h, val, strat) => {
                ctx.globalCompositeOperation = 'destination-over'
                ctx.fillStyle = '#d58585'
                ctx.fillRect(0, 0, w, h)
            }
        }
    ],
    s3: [
        {
            name: '蓝色进度条',
            id: 's31',
            strategy: (ctx, w, h, val, strat) => {
                ctx.globalCompositeOperation = 'destination-over'
                ctx.fillStyle = '#8fb3f7'
                ctx.fillRect(0, 0, w/5*val, h/3)
            }
        }
    ],
    s4: [
        {
            name: '粉红进度条',
            id: 's41',
            strategy: (ctx, w, h, val, strat) => {
                ctx.globalCompositeOperation = 'destination-over'
                ctx.fillStyle = '#ffbbfe'
                ctx.fillRect(0, h/3, w/15*val, h/3)
            }
        }
    ],
    hh: [
        {
            name: '绿色进度条',
            id: 'hh1',
            strategy: (ctx, w, h, val, strat) => {
                ctx.globalCompositeOperation = 'destination-over'
                ctx.fillStyle = '#88ff8a'
                ctx.fillRect(0, h/3*2, w/15*val, h/3)
            }
        }
    ],
    coner: [
        {
            name: '左上角大字',
            id: 'coner1',
            strategy: (ctx, w, h, val, strat) => {
                ctx.font = '50px gray'
                ctx.fillStyle = '#2c2c2c'
                ctx.textBaseline = 'top'
                ctx.fillText(val[0], 10, 10)
            }
        }
    ],
    memo: [
        {
            name: '左下角展示',
            id: 'memo1',
            strategy: (ctx, w, h, val, strat) => {
                ctx.font = '20px gray'
                ctx.fillStyle = 'black'
                ctx.textBaseline = 'bottom'
                ctx.fillText(val, 10, h - 10)
            }
        }
    ],
    detail: [
        {
            name: '粉红badge',
            id: 'detail1',
            strategy: (ctx, w, h, val, strat) => {

            }
        }
    ],
}

export const stratMap = {
    s1: '大发',
    s2: '大发不抽',
    s3: '小发',
    s4: '轻微发',
    hh: '恍惚',
    coner: '事件',
    memo: '备注',
    detail: '详情',
}

export const defaultStrat = {
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    hh: 0,
    coner: 0,
    memo: 0,
    detail: 0,
}

export default renderStrategy
