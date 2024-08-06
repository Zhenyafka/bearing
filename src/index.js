const { getBrands, getBearings } = require('./db');

async function main ()  {
    try {
        const brands = await getBrands();
        console.log('The list of brands:')
        console.log(brands);

        const bearings = await getBearings();
        console.log('The list of bearings:')
        console.log(bearings);
    }
    catch (err) {
        console.log('ERROR!', err);
    }
    finally {
        process.exit(0);
    }
}

main();
