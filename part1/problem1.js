const jajanBoba = (uang, callback) => {
    let hargaBoba = 5000
    let hargaSeblak = 8000
    let sisaUang = (uang - hargaBoba)

    if (uang > hargaBoba) {
        setTimeout(() => {
            console.log("Kamu jajan boba dengan harga Rp. " + hargaBoba)
            console.log("Sisa uang kamu Rp. " + sisaUang)
        }, 5000)
    } if (sisaUang > hargaSeblak) {
        setTimeout(() => {
            callback(hargaSeblak)
            console.log("Sisa uang kamu Rp. " + (sisaUang - hargaSeblak))
        }, 9000)
    } else {
        setTimeout(() => {
            console.log("Maaf uang kamu belum cukup untuk membeli barang")
            console.log("Sisa uang kamu Rp. " + sisaUang)
        }, 9000)
    }

}

const jajanSeblak = (uang) => {
    console.log("Kamu jajan seblak dengan harga Rp. " + uang)
}

// jajanBoba(20000, jajanSeblak)
jajanBoba(10000, jajanSeblak)