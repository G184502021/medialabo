let b1 = document.querySelector('button#kirikae')
b1.addEventListener('click',kirikae)
let k = 0;
let c = 0;
let s1 = ["晴れている場所", "曇っている場所", "雨が降っている場所"];
let s2 = ["日本(東京)", "ロシア(モスクワ)", "南アフリカ(ヨハネスブルク)", "中国(北京)", "シンガポール",
            "オーストラリア(シドニー)", "イギリス(ロンドン)", "フランス(パリ)", "ブラジル(リオデジャネイロ)",
            "アメリカ(ニューヨーク)", "アメリカ(ロサンゼルス)", "エジプト(カイロ)"];
let j = ["1850147", "524901", "993800", "1816670", "1880252", "2147714", "2643743", "2968815",
            "3451189", "5128581", "5368361", "360630"];


function kirikae() {
    k = k + 1;
    let options = document.querySelectorAll('option');
    for (let o of options) {
        o.remove();
    }
    if (k%2==1) {
        
        for (let i = 0; i < s1.length; i++) {
            let option ;
            let select = document.querySelector('select#timei-select')
            option = document.createElement('option');
            option.value = '' + i;
            option.textContent = s1[i];
            select.insertAdjacentElement('beforeend', option);
        }
    }
    else {
        
        for (let i = 0; i < s2.length; i++) {
            let option ;
            let select = document.querySelector('select#timei-select')
            option = document.createElement('option');
            option.value = j[i];
            option.textContent = s2[i];
            select.insertAdjacentElement('beforeend', option);
        }
    }
}

let b2 = document.querySelector('button#kensaku');
b2.addEventListener('click',weather);

function weather() {
    let t = document.querySelector('select[id="timei-select"]');
    let timei = Number.parseInt(t.value);
    
    if(timei>10) {
        let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + timei + '.json';
        axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish)

    }



}

function showResult(resp) {
    let data = resp.data;
}