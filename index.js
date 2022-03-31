let brandsElem = document.querySelector('.make')
let coloursElem = document.querySelector('.colours')
let displayElem = document.querySelector('.displayCars')

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(function (result) {
        console.log(result.data)

        result.data.forEach(element => {
            const dropdown = document.createElement('option')
            dropdown.innerHTML = `<option value="${element}">
        ${element}
            </option>          
            `
            brandsElem.appendChild(dropdown)
        })
    })

    axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {
        console.log(result.data)

        result.data.forEach(element => {
            const dropdown = document.createElement('option')
            dropdown.innerHTML = `<option value="${element}">
        ${element}
            </option>          
            `
            coloursElem.appendChild(dropdown)
        })
    })


const check = () => {
    var templateString = document.querySelector('.entry-template').innerHTML;
    let arr = [];

    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(function (result) {
            console.log(result.data)

            result.data.forEach(element => {
                if (element.make == brandsElem.value && element.color == coloursElem.value) {
                    arr.push({
                        reg: `${element.reg_number}`,
                        colour: `${element.color}`,
                        brand: `${element.make}`
                    })
                }

                else if (element.make == brandsElem.value && coloursElem.value == '') {
                    arr.push({
                        reg: `${element.reg_number}`,
                        colour: `${element.color}`,
                        brand: `${element.make}`
                    })
                }

                else if (element.color == coloursElem.value && brandsElem.value == '') {
                    arr.push({
                        reg: `${element.reg_number}`,
                        colour: `${element.color}`,
                        brand: `${element.make}`
                    })
                }
            })
            console.log('asdfghjkxc' + arr)

            let context = {
                "table": arr == '',
                "car": arr,
            };

            console.log('sdfghj' + JSON.stringify(context))

            let templateScript = Handlebars.compile(templateString);
            displayElem.innerHTML = templateScript(context);
        })
}
