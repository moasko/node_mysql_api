exports.porductsOptions = {
    name: null,
    price: null,
    description: null,
    img: null,
    cateory_id: null,
    vendor_id: null,
    ative: null
}


exports.categorysOptions = {
    name: null
}

exports.vendorsOptions = {

}




exports.getInitial = (text) => {
    return text.replace(/\s+/, ' ')
        .split(' ')
        .slice(0, 2)
        .map((v) => v && v[0].toUpperCase())
        .join('');

}