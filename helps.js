exports.porductsOptions = {
    name: null,
    price: null,
    description: null,
    img: null,
    category_id: null,
    vendor_id: null,
    ative: true
}


exports.categorysOptions = {
    name: null
}

exports.vendorsOptions = {
    psuedo: null,
    name: null,
    phone: null,
    password: null,
    adresse: null,
    baned: null
}




exports.getInitial = (text) => {
    return text.replace(/\s+/, ' ')
        .split(' ')
        .slice(0, 2)
        .map((v) => v && v[0].toUpperCase())
        .join('');

}