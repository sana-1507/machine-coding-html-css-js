// 🧠 Question 1: Nested Data Processing 
// You’re given a list of products. 
// Each product contains a list of sales (quantity, price). 
// Task: • Calculate total revenue per product 
// • Handle: • Empty sales arrays • Invalid or missing data

function nestedDataProcessing(products = []) {
    if(Array.isArray(products) === false)
return [];
    return products.map(product => {
        const sales = product.sales  || [];
        const totalRev = sales.reduce((accumulator, sale) => {
            const quantity = Number(sale.quantity) || 0;
            const price = Number(sale.price) || 0;

            if(isNaN(quantity) || isNaN(price)) {
                return accumulator;
            }
            return accumulator + quantity * price
        })
        return {...product, totalRevenue: totalRev}
    })
}



























































































































































