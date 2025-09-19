const courses = [
    {
        id: 1,
        icons: "./imglar/desctop.png",
        title: "Kompyuter Savodxonligi",
        description: "Kursda siz kompyuter bilan tuliq ishlash kunikmasiga va undan tashqari ZOOM, Word, Excel, Point va Access dasturlarida ishlash o'rgatiladi.",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 2,
        icons: "./imglar/3d model.png",
        title: "3D Modeling",
        description: "3D modeling is considered one of the most profitable areas, the average salary starts from $500. This area is now a modern profession!!!",
        descImg: "./imglar/descImg.webp",
    },
    {
        id: 3,
        icons: "./imglar/grafikdizayn.png",
        title: "Grafik Dizayn",
        description: "Grafik dizayn - bu tipografiya, fotografiya, ikonografiya va illyustratsiya yordamida vizual aloqa va muammolarni birlashtirish jarayonidir. Ushbu sohada tinglovchilar turli xil dasturlar yordamida o‘z malakalarini oshirib borishadi. Grafik dizayn turli xil yo‘nalish va bo‘limlarga bo‘linadi. Grafik dizaynerlar turli xil g'oyalar va xabarlarning vizual ko'rinishini hosil qiladilar.",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 4,
        icons: "./imglar/english for it.png",
        title: "IT uchun ingliz tili.",
        description: "Bugungi kunda, O'zbekistonda ko'plab dasturchilar xalqaro kompaniyalarda yoki frilanser bo'lib ishlashi uchun chet tilini yaxshi bilmasligi natijasida qiynalmoqdalar, shuning uchun sizni mamnuniyat bilan ingliz tilingizni yuqori bosqichga ko'tarishga taklif qilamiz! 'IQ' bilan IT sohasida yangi marralarni zabt eting!",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 5,
        icons: "./imglar/advendefrontend.png",
        title: "Frontend ",
        description: "Front-end veb rivojlantirish, bu veb-sayt foydalanuvchilari yoki mobil ilovalar foydalanuvchilari tomonidan ko‘rib, ishlatiladigan sahifalarning foydalanish funksionallarini bajaradigan qismini foydalanishga taqdim etadigan bo‘limdir. Yuqori darajali kurslarda siz JavaScript yoki React js larda mukammal ishlashni o‘rganasiz.",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 6,
        icons: "./imglar/smmkursi.png",
        title: "SMM kursi",
        description: "Social Media Marketing (SMM) - kompaniyaning mahsulot va xizmatlarini sotish uchun ijtimoiy media saytlari va ijtimoiy tarmoqlardan foydalanishning strategik yo‘li hisoblanadi. Ijtimoiy media marketing tarmoqlari orqali yangi mijozlarga erishish, kompaniyaning obro‘sini oshirish hamda mavjud mijozlar bilan ishlash, va ular istagan madaniyat, maqsad yoki yo‘nalishni targ‘ib qilish bilan shug‘ullanadi.",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 7,
        icons: "./imglar/robot.png",
        title: "Robototexnika",
        description: "«Robotexnika» kursi 8 yoshdan 16 yoshgacha bo'lgan bolalar uchun mo'ljallangan. Kurs doirasida siz robototexnika asoslarini o'rganishingiz mumkin: (robotlar tushunchasi, atamalari va tamoyillari); robot dasturlash asoslari (robotlarni boshqarish uchun dasturlash tillari, algoritmlar va ma’lumotlar tuzilmalarini o‘rganish), mexanik modellashtirish asoslari: (robotlarning mexanik qismlarini, ularning konstruksiyasi va ishlash tamoyillarini o‘rganish), elektronika va elektr sxemalari asoslari: (komponentlarni o‘rganish va robotning ishlashi uchun zarur bo'lgan sxemalar ), sensorlar: (har xil turdagi sensorlar va ularni robototexnikada qo'llashni o'rganish), robotlar mexatronikasi: (robotlarni yaratishda foydalaniladigan mexanizmlar va ularni boshqarishni o‘rganish), robotlarning harakatini boshqarish: (robotlar harakatini boshqarish algoritmlari va usullarini o‘rganish), robotlarni loyihalash va yaratish: (robotlarni yaratish va rivojlantirish)",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 8,
        icons: "./imglar/mobil.png",
        title: "Mobile Developer",
        description: "Mobile developer mobil qurilmalar uchun dasturiy mahsulotlarni ishlab chiqishga ixtisoslashgan. Mobil ilovalar mavzuga va bajarilgan vazifalarga qarab turli xil boʻladi. Oʻyin-kulgi dasturlari (tillarni oʻrganish, kitoblarni oʻqish, sayohat qilish, sport), xarid qilish ilovalari (e-tijorat segmenti) va alohida toifadagi mobil oʻyinlar mavjud.",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 9,
        icons: "./imglar/foundation.png",
        title: "Foundation (Phyton)",
        description: "Python tili mavjud bo'lgan dasturlash tillari ichida eng ko'p ishlatiladigan tillardan biri hisoblanib, u sintaksisini soddaligi va murakkab emasligi bilan ajralib turadi. Bu esa tilni o'rganishni osonlashtiradi va foydalanuvchilar soni ham ko'pligini taminlaydi.",
        descImg: "./imglar/descImg.webp"
    },
    {
        id: 10,
        icons: "./imglar/python.png",
        title: "Backend",
        description: "Back-end kursi o'z ichiga veb-server yaratish, API lar bilan ishlash, ma'lumotlar ombori bilan ishlashni o'rgatishni o'z ichiga oladi",
        descImg: "./imglar/descImg.webp"
    }
]


const boxCard = document.querySelector(".kurslar-soni");
const mainBox = document.querySelector("main");



courses.map((item, id) => {
    const card = document.createElement("div");
    const cardImgBox = document.createElement("div");
    const cardImgB = document.createElement("div");
    const cardImg = document.createElement("img");
    const title = document.createElement("p");
    card.setAttribute("class", "kurs-cart"),
        card.append(cardImgBox),

        cardImgB.setAttribute("class", "veb-kurs"),
        cardImgBox.setAttribute("class", "img-kurs"),
        cardImgBox.append(cardImg),
        cardImg.src = item.icons,

        title.textContent = item.title,

        card.append(title)
    boxCard.append(card)


    card.addEventListener("click", (e) => {
        const boxx = document.querySelector(".boxx");
        const courses = document.querySelector(".wrapper")
        const swipper = document.querySelector(".swipper")
        const btn = document.querySelector(".btn")
        btn.classList.add("active")
        swipper.classList.add("active")
        courses.classList.add("active")
        boxx.classList.remove("active")
        boxx.innerHTML = `
         <div class="block">
                        <div class="none">
                            <img src=${item.descImg} alt=${item.description}>
                            <div class="pcom">
                                <span>
                                    <h1>${item.title}</h1>
                                </span>
                                <p>${item.description}</p>
                                    <div class="red">
                                    <button>Kursga yozilish</button>
                                    <button class="close">Ortga qaytish</button>
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div class="kutmoq">
                            <h1>Nimalar sizni kutmoqda?</h1>
                        </div>
                        <div class="put">
                            <div>
                                <img src="./imglar/ruchka.svg" alt="">
                                <p>Grafik dizayn kasbi</p>
                            </div>
                            <div>
                                <img    src="./imglar/ruchka.svg" alt="">
                                <p>Grafik dizayn kasbi</p>
                                </div>
                            <div>
                                <img src="./imglar/ruchka.svg" alt="">
                                <p>Grafik dizayn kasbi</p>
                            </div>
                        </div>
                    </div>
        `
               const closed = document.querySelector(".close");
       closed.addEventListener("click", ()=> {
            boxx.classList.add("active");
            courses.classList.remove("active")
            swipper.classList.remove("active")
            btn.classList.remove("active")
        })
    })
})

