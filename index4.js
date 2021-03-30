// array

const dataMahasiswa = [
    {
        nama : 'RickyTanrean',
        npm : '19421026',
        prodi : 'Informatika'
    },
    {
        nama : 'AndriTaufiq',
        npm : '19421031',
        prodi : 'Informatika'  
    }
]
    for (let i in dataMahasiswa){
        console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
    }