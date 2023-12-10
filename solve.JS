function solve() {
    let textarea = document.querySelectorAll('textarea');
    let tbody = document.querySelector('tbody');
    let numberOfFurnityreCreated = 0;
    let numberOfFurnityreSold = 0;
   //2 bonus promenlivi
    textarea[0].textContent = '[{"name": "here type name of object", "img": "type URL for image of object", "price": type price for object, "decFactor": type decFactor value for object}]';
//spomagatelen red
    [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));
    function execute(btn) { 
        numberOfFurnityreCreated++
        console.log("generating...")//izpisva generating...
      if (!textarea[0].value) return;
      if (btn.target.textContent === 'Generate') {
        let input = JSON.parse(textarea[0].value);

        input.forEach(furniture => {
            console.log("Name: ", furniture.name);
            console.log("Price: ", furniture.price);
            console.log("Decoration Factor: ", furniture.decFactor);
            console.log("Number of furniture created:", numberOfFurnityreCreated)//bonus info samo za konzolata
          tbody.innerHTML += `<tr>
            <td><img src=${furniture.img}></td>
            <td><p>${furniture.name}</p></td>
            <td><p>${furniture.price}</p></td>
            <td><p>${furniture.decFactor}</p></td>
            <td><input type="checkbox"/></td>
            </tr>`
        })
      } else {
        let furnitureName = [];
        let totalPrice = 0;
        let averageDecFactor = 0;
        [...document.querySelectorAll('input:checked')]
          .forEach(furniture => {
            let parentRow = furniture.parentNode.parentNode;
            numberOfFurnityreSold++;
            averageDecFactor += Number(parentRow.children[3].textContent);
            totalPrice += Number(parentRow.children[2].textContent);
            furnitureName.push(parentRow.children[1].textContent);
          });
        
        textarea[1].textContent += `\n`;
        textarea[1].textContent += `...`;
        textarea[1].textContent += `\n`;
        textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
        textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}\n`;
        textarea[1].textContent += `Total Furniture Bought: ${numberOfFurnityreSold}`;
      }//bonus info i za poleto
    }
  }