let b1 = document.querySelector('button#kirikae')
b1.addEventListener('click',kirikae)
let k = 0;
let c = 0;
let count = -1;
let s1 = ["晴れている場所", "曇っている場所", "雨が降っている場所","霧が出ている場所"];
let s2 = ["日本(東京)", "ロシア(モスクワ)", "南アフリカ(ヨハネスブルク)", "中国(北京)", "シンガポール",
            "オーストラリア(シドニー)", "イギリス(ロンドン)", "フランス(パリ)", "ブラジル(リオデジャネイロ)",
            "アメリカ(ニューヨーク)", "アメリカ(ロサンゼルス)", "エジプト(カイロ)"];
let s3 = ["最高気温", "最低気温", "湿度", "風速"];
let j = ["1850147", "524901", "993800", "1816670", "1880252", "2147714", "2643743", "2968815",
            "3451189", "5128581", "5368361", "360630"];
let s4 = ['地名', ''];

let n = Array(12);
let nd = Array(12);

function kirikae() {
    k = k + 1;
    let options = document.querySelectorAll('option');
    for (let o of options) {
        o.remove();
    }
    if (k%3==2) {
        for (let i = 0; i < s3.length; i++) {
            let option;
            let select = document.querySelector('select#timei-select');
            option = document.createElement('option');
            option.value = '' + (i + 10);
            option.textContent = s3[i];
            select.insertAdjacentElement('beforeend', option);

        }
    }

    else if (k%3==1) {
        
        for (let i = 0; i < s1.length; i++) {
            let option ;
            let select = document.querySelector('select#timei-select');
            option = document.createElement('option');
            option.value = '' + i;
            option.textContent = s1[i];
            select.insertAdjacentElement('beforeend', option);
        }
    }
    else {
        
        for (let i = 0; i < s2.length; i++) {
            let option ;
            let select = document.querySelector('select#timei-select');
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
    

    c= c+1;
    
    if (c >= 2) {
        let tableAll = document.querySelectorAll('table');
        for (let ta of tableAll) {
            ta.remove();
        }
    }
    let p = document.querySelector('p#aida');
    let table = document.createElement('table');
    p.insertAdjacentElement('afterend', table);

    let tbody = document.createElement('tbody');
    table.insertAdjacentElement('beforeend', tbody);
    let t = document.querySelector('select[id="timei-select"]');
    let timei = Number.parseInt(t.value);
    console.log(timei);
    if(timei>20) {
       
        let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + timei + '.json';
        axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);

    }
    else if (timei === 10) {
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '最高気温';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }

    else if (timei === 11) {
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '最低気温';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }

    else if (timei === 12) {
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '湿度';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }

    else if (timei === 13) {
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '風速';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }
    
    else if (timei == 0){
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }

    else if (timei == 1){
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }
    else if (timei == 2){
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }
    else if (timei == 3){
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = '地名';

        for (let i = 0; i < j.length; i++) {
            if (count === 11) count = -1;
            count++;
            
            n[i] = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + j[i] + '.json';
            axios.get(n[i])
            .then(showResult)
            .catch(showError)
            .then(finish);
        }
    }
}

function showResult(resp) {
    let t = document.querySelector('select[id="timei-select"]');
    let timei = Number.parseInt(t.value);
    
    if (timei > 20){
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
            
        }
        console.log(data);
        

        tbody = document.querySelector('tbody');
        let tr;
        
        tr = document.createElement('tr');
        
        tbody.insertAdjacentElement('beforeend', tr);
        let youso1 = ['都市名', '天気', '最低気温', '最高気温', '湿度', '風速'];
        

        
        
        for (let youso of youso1) {
            let td;
            td = document.createElement('td');
            tr.insertAdjacentElement('beforeend', td);
            td.textContent = youso;
        }

        
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        console.log('a');
        
        let youso2 = [data.name, data.weather[0].main, data.main.temp_min, data.main.temp_max, data.main.humidity, data.wind.speed];
        for (let youso of youso2) {
            let td;
            td = document.createElement('td');
            tr.insertAdjacentElement('beforeend', td);
            td.textContent = youso;
        }
       
    }

    else if(timei === 10) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.main.temp_max;

    }
    else if(timei === 11) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.main.temp_min;

    }
    else if(timei === 12) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.main.humidity;

    }
    else if(timei === 13) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;

        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.wind.speed;

    }

    else if (timei === 0) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        if (data.weather[0].main==='Sun') {
            tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;
        }
    }

    else if (timei === 1) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        if (data.weather[0].main==='Clouds') {
            tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;
        }
    }
    else if (timei === 2) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }

        console.log(data);
        if (data.weather[0].main==='Rain') {
            tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;
        }
    }
    else if (timei === 3) {
        let data = resp.data;
        if (typeof data === 'string') {
            data = JSON.parse(data); 
        }
        console.log(data);
        if (data.weather[0].main==='Mist') {

            tbody = document.querySelector('tbody');
        let tr;
        tr = document.createElement('tr');
        tbody.insertAdjacentElement('beforeend', tr);
        
        let td;
        td = document.createElement('td');
        tr.insertAdjacentElement('beforeend', td);
        td.textContent = data.name;
        }
    }
}



function showError(err) {
    console.log(err);
}

function finish() {
    console.log('Ajax 通信が終わりました');
}