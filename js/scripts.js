var arrObj = [{"internalId":"11369","subsidiary":"1","customerId":"C010080","customerName":null,"clientName":null,"children":[{"customerId":"15074","itemName":null,"itemQuantity":null}]},{"internalId":"11369","subsidiary":"1","customerId":"C010080","customerName":null,"clientName":null,"children":[{"customerId":"15073","itemName":null,"itemQuantity":null}]},{"internalId":"15073","subsidiary":"1","customerId":"C100002","customerName":null,"clientName":null,"children":[]},{"internalId":"15074","subsidiary":"1","customerId":"C100003","customerName":null,"clientName":null,"children":[]},{"internalId":"11371","subsidiary":"1","customerId":"C010081","customerName":null,"clientName":null,"children":[]},{"internalId":"11373","subsidiary":"1","customerId":"C010082","customerName":null,"clientName":null,"children":[]},{"internalId":"11375","subsidiary":"1","customerId":"C010083","customerName":null,"clientName":null,"children":[]},{"internalId":"11379","subsidiary":"1","customerId":"C010084","customerName":null,"clientName":null,"children":[]},{"internalId":"11381","subsidiary":"1","customerId":"C010085","customerName":null,"clientName":null,"children":[]},{"internalId":"11442","subsidiary":"1","customerId":"C010088","customerName":null,"clientName":null,"children":[]},{"internalId":"11446","subsidiary":"1","customerId":"C010089","customerName":null,"clientName":null,"children":[]},{"internalId":"11359","subsidiary":"1","customerId":"C010101","customerName":null,"clientName":null,"children":[]},{"internalId":"11361","subsidiary":"1","customerId":"C010102","customerName":null,"clientName":null,"children":[]},{"internalId":"11365","subsidiary":"1","customerId":"C010103","customerName":null,"clientName":null,"children":[]},{"internalId":"11367","subsidiary":"1","customerId":"C010104","customerName":null,"clientName":null,"children":[]},{"internalId":"11448","subsidiary":"1","customerId":"C010412","customerName":null,"clientName":null,"children":[]},{"internalId":"11355","subsidiary":"1","customerId":"C012099","customerName":null,"clientName":null,"children":[]},{"internalId":"11357","subsidiary":"1","customerId":"C012100","customerName":null,"clientName":null,"children":[]}];

// console.log(arrObj);

arrObj.forEach(function(obj, index, array) {

    // console.log(typeof array[index + 1]);
    if(array[index - 1] != undefined) {
        var currCustId = obj.customerId;
        var prevChildren = array[index - 1].children;
        var prevcustomerId = array[index - 1].customerId;

        if (currCustId == prevcustomerId) {
            prevChildren.push(obj.children[0]);

            console.log(obj);

            arrObj.splice(index, index);

        }
    }
});

console.log(arrObj);