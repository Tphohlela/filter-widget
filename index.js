let brandsElem = document.querySelector('.make')
let coloursElem = document.querySelector('.colours')


axios
     .get('https://api-tutor.herokuapp.com/v1/cars')
     .then(function(result){
         console.log(result.data)

         let brandList = [];
         let colourList = [];

         result.data.forEach(element => {
             if(!brandList.includes(element.make)){
                brandList.push(element.make)
             }

             else if(!colourList.includes(element.color)){
                colourList.push(element.color)
             }
        })

        brandList.forEach(element => {
            const dropdown = document.createElement('option')
            dropdown.innerHTML = `<option>
        ${element}
            </option>          
            `
            brandsElem.appendChild(dropdown)
        })

        colourList.forEach(element => {
            const dropdown = document.createElement('option')
            dropdown.innerHTML = `<option>
        ${element}
            </option>          
            `
            coloursElem.appendChild(dropdown)
        })


     })

