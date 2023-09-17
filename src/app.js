import gsmarena from "gsmarena-api"
async function test(){
    const brands = await gsmarena.catalog.getBrands();
console.log(brands);
}
test()