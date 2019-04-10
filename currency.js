const API_KEY = ''

function httpGet(theUrl){
    var xmlHttp = null
    xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", theUrl, false)
    xmlHttp.send(null)
    return xmlHttp.responseText
}

function currencyConverter(currency_from, currency_to){
    var from_currency_encoded = encodeURIComponent(currency_from)
    var to_currency_encoded = encodeURIComponent(currency_to)
    var query = from_currency_encoded + '_' + to_currency_encoded

    var url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
        + query + '&compact=ultra&apiKey=' + API_KEY

    var http_response = httpGet(url)
    var http_response_json = JSON.parse(http_response)

    return http_response_json[query]
}

function usdfunc(){
    var currency_from = "USD" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("USD").value

    var rate = currencyConverter(currency_from, "GBP")
    gbValue = rate * baseValue
    document.getElementById("GBP").value = gbValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function gbpfunc(){
    var currency_from = "GBP" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("GBP").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function audfunc(){
    var currency_from = "AUD" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("AUD").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function cadfunc(){
    var currency_from = "CAD" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("CAD").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function eurfunc(){
    var currency_from = "EUR" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("EUR").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "JPY")
    jpyValue = rate * baseValue
    document.getElementById("JPY").value = jpyValue
}

function jpyfunc(){
    var currency_from = "JPY" //currency codes: http://en.wikipedia.org/wiki/ISO_4217
    baseValue = document.getElementById("JPY").value

    var rate = currencyConverter(currency_from, "USD")
    usValue = rate * baseValue
    document.getElementById("USD").value = usValue

    var rate = currencyConverter(currency_from, "CAD")
    cadValue = rate * baseValue
    document.getElementById("CAD").value = cadValue

    var rate = currencyConverter(currency_from, "GBP")
    gbpValue = rate * baseValue
    document.getElementById("GBP").value = gbpValue

    var rate = currencyConverter(currency_from, "AUD")
    audValue = rate * baseValue
    document.getElementById("AUD").value = audValue

    var rate = currencyConverter(currency_from, "EUR")
    eurValue = rate * baseValue
    document.getElementById("EUR").value = eurValue
}