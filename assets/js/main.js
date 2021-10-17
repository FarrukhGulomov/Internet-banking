document.addEventListener("DOMContentLoaded", () => {


    const addCardBtn = document.getElementById("add-card-btn");


    let cardArray = [];
    addCardBtn.addEventListener("click", (e) => {
        e.preventDefault();


        const tbody = document.querySelector("tbody");
        let cardNumber = document.getElementById("cardNumber").value;
        let cardDate = document.getElementById("cardDate").value;
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let typeCurrency = "";
        let cardActivity = "";
        let currency = ["UZS", "USD", "RUB"], statusCard = ["Активная", "Заблокирована"];
        if (cardNumber.length < 16 || cardDate.length < 4 || cardNumber=="" || cardDate==""){

            alert("Please check your card information");
            clearInput();
            return;
        }
        if (cardNumber.length == 16) cardActivity = statusCard[0];


        function clearInput(){
            document.getElementById("cardNumber").value = "";
            document.getElementById("cardDate").value = "";
        };

        if (cardNumber.startsWith("8600") || cardNumber.startsWith("9860") || cardNumber.startsWith("6262")) {
            typeCurrency = currency[0];
        } else if (cardNumber.startsWith("4") || cardNumber.startsWith("5")) {
            typeCurrency = currency[1];
        } else{
            alert("Please check your card information");
            return;
        }

        let obj = {
            cardNumber,
            cardDate
        };

        cardArray.push(obj);


        let hideCardNum = (obj.cardNumber).substring(0, 6) + "***" + (obj.cardNumber).substring(12, (obj.cardNumber).length);
        console.log(cardArray);

        tr.innerHTML = "<td class='change-number'>" + cardArray.length + "</td><td>" + hideCardNum + "</td><td>" + typeCurrency + "</td><td>" + cardActivity + "</td><td><select name=\"\" id=\"card-two\">\n" +
            "                            <option value=\"VALID\">Блокировать</option>\n" +
            "                            <option value=\"BLOCK\">Разблокировать</option>\n" +
            "                            <option value=\"NET_OFF\">Откл. интернет</option>\n" +
            "                            <option value=\"NET_ON\">Подкл. интернет</option>\n" +
            "                            <option value=\"SEC3D_ON\">Подкл. 3D Secure</option>\n" +
            "                        </select>" + "</td><td><input type=\"button\" value=\"Выполнить\"></td><td><input class=\"removeCard\" type=\"button\" value=\"Удалить\"></td>";
        tbody.appendChild(tr);

        clearInput();
        let removeCards = document.querySelectorAll(".removeCard");

        removeCards.forEach(removeCard =>{
            let Nums = document.querySelectorAll(".change-number");
            removeCard.addEventListener("click",()=>{

                (removeCard.parentElement).parentElement.remove();
                cardArray.pop();
               Nums.forEach(num =>{
                   num.textContent=(cardArray.length+1).toString();


               })


            })
        } )
    });

});


