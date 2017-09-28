import {LOAD_MARKETS, LOAD_CHART, LOAD_ORDERS, LOAD_TRADE_HISTORY, SELECT_MARKET, SORT_MARKETS, UPDATE_TRADE_FORM} from '../constants'

export function loadAllMarkets() {
    return {
        type: LOAD_MARKETS,
        service: 'marketslist',
        getAPI: 'public?command=returnTicker'

    }
}

export function loadChart(pair='BTC_XRP', end = new Date().getTime()/1000, start = 1405699200, period=86400) {
    return {
        type: LOAD_CHART,
        service: 'charts',
        getAPI: `public?command=returnChartData&currencyPair=${pair}&start=${start}&end=${end}&period=${period}`,
        pair: pair,
        start: start,
        period: period
    }
}

export function loadOrders(pair, depth=30) {
    return {
        type: LOAD_ORDERS,
        service: 'orders',
        getAPI: `public?command=returnOrderBook&currencyPair=${pair}&depth=${depth}`,
        pair: pair
    }
}

export function loadTradeHistory(pair, end = new Date().getTime()/1000, start = end - 900) {
    return {
        type: LOAD_TRADE_HISTORY,
        service: 'trade-history',
        getAPI: `public?command=returnTradeHistory&currencyPair=${pair}&start=${start}&end=${end}`,
        pair: pair
    }
}

export function updateTradeForm(data) {
    return {
        type: UPDATE_TRADE_FORM,
        payload: data
    }
}

export function selectMarket(market) {
    return {
        type: SELECT_MARKET,
        payload: market
    }
}

export function sortMarkets(column, sortOrder) {
    return {
        type: SORT_MARKETS,
        payload: {column, sortOrder}
    }
}
