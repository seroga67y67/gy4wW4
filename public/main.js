
let shopList = [];
let trgId

let db = [
    {
        id: '0',
        name: 'Яблуко',
        price: 30,
        pic:'https://upload.wikimedia.org/wikipedia/commons/e/ee/Apples.jpg'
    },
    {
        id: '1',
        name: 'Груша',
        price: 40,
        pic:'https://gradinamax.com.ua/uploads/catalog_products/grusha-medovaya_1.jpg'

    },
    {
        id: '2',
        name: 'Персик',
        price: 45,
        pic:'https://freshmart.com.ua/storage/web/cache/product/154/persik-inzhirniy.jpg?w=912&h=690&fit=resize&q=80&fm=pjpg&t=1629100367&s=419d875ac875bfab7a796db84491e936'

    },
    {
        id: '3',
        name: 'Банан',
        price: 38,
        pic:'https://www.seeds.org.ua/wp-content/uploads/2019/02/Bananas-e1510674017282-649x430-%D0%AF%D0%BA-%D0%B2%D0%B8%D0%B1%D1%80%D0%B0%D1%82%D0%B8-%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D0%BB%D1%8C%D0%BE%D1%80%D1%83-%D1%96-%D0%B7-%D0%BC%D0%B0%D0%BA%D1%81%D0%B8%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%8E-%D0%BA%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%8E-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D1%8F.jpg'

    },
    {
        id: '4',
        name: 'Апельсин',
        price: 60,
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzwkSfK64fkhNkiByiq-zFZSv7h7YfOEt2g&usqp=CAU'

    },
    {
        id: '5',
        name: 'Томат',
        price: 15,
        pic:'https://content.silpo.ua/sku/ecommerce/53/480x480wwm/539783_480x480wwm_a238c847-a097-d3e2-7687-23cf874d27bf.png'

    },
    {
        id: '6',
        name: 'Манго',
        price: 50,
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9OxN-buwr_nJHD_kkhHHu9zC-LzkES7pRQ&usqp=CAU'

    },
    {
        id: '7',
        name: 'Абрикоси',
        price: 45,
        pic:'https://www.belta.by/images/storage/news/with_archive/2022/000029_1648537596_492994_big.jpg'

    },
    {
        id: '8',
        name: 'Морква',
        price: 77,
        pic:'https://prokovel.com/userfiles/image/korusne/morkva.jpg'

    },
    {
        id: '9',
        name: 'Помідор',
        price: 97,
        pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEjyBxg85e5pGizDGuh4rmDPTCldMJkxLpjQ&usqp=CAU'

    },
    {
        id: '10',
        name: 'Сливи',
        price: 45,
        pic:'https://img.tsn.ua/cached/859/tsn-84ee4f9844c21d3af2b3cfbad2c9c711/thumbs/428x268/d1/5e/9c792e62fd0cebbf7f70104cfdc85ed1.jpeg'

    },
    {
        id: '11',
        name: 'Ананас',
        price: 77,
        pic:'https://www.belta.by/images/storage/news/with_archive/2021/000467_1640617241_476909_big.jpg'

    },
    {
        id: '12',
        name: 'Вишня',
        price: 44,
        pic:'https://img.tsn.ua/cached/459/tsn-45ddb1c1da8bc78232f746637fde253d/thumbs/428x268/f5/cc/681708fc887da70f3e59e3cb00d9ccf5.jpeg'

    }
];

for (let el of db) {
    $('.goodsContainer').append(`
    <div class="element">
        <img src="${el.pic}" class='cardPng' alt="2">
        <h3 class="cardTxt">${el.name}</h3>
        <div class="flexC">
           <p class="price">${el.price}</p>
           <button class="buyBtn" id="${el.name}">Buy</button>
        </div>
    </div>
    `);

    
}
$('.buyBtn').click(function (e) {
        shopList.push(e.target.id);
        $('#cartLength').text(shopList.length);
        console.log(shopList)
        cartPush(e.target.id)
        trgId = e.target.Id
    })
function cartPush(target){
    $('.cartList').empty();
    for(let el of shopList){
        $('.cartList').append(`
    <div class="listIt">
        <p class="itName"></p>
        <button class="removeBtn"></button>
     </div>
        `)
    }
    
}

// $('.buyBtn').click(function (e) {
//     shopList.push(e.target.id);
//     $('#cartLength').text(shopList.length);
//     console.log(shopList)
//     cartPush(e.target.id)
//     trgId = e.target.Id
//     alert(trgId)
// })

$('#send').click(function () {
    let data = shopList;
    if (data.length > 0) {
        axios.post('http://localhost:3000/submit', data)
            .then(res => {
                console.log(`Дані відправлено: ${res.data}`);
            })
            .then(() => {
                shopList = [];
                $('#cartLength').text(shopList.length);
                alert('Замовлення відправлено');
            })
            .catch(err => {
                console.log(err);
            })

    } else {
        alert('Корзина пуста');
    }
})