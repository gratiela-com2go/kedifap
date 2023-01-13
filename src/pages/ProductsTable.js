import SortableTable from "../components/SortableTable";
// import getProducts from "../apis/products";

function ProductsTable() {

// const productsList = async () => {
//     const products = await getProducts();
//     return products;
// } 

const data = [
    {"code":"HD1130",
    "description":"0007 KYLINDRIKO MAXILARI MESIS",
    "availableQuantity": 5,
    "expiryDate": "25/07/2023",
    "barcode":"5204914362857",
    "vendorCode":"V1216",
    "vendorDescription":"GNC CHRISTOU TRADING LTD",
    "importerCode":"V1216",
    "importerDescription":"GNC CHRISTOU TRADING LTD",
    "ministryCode":"",
    "storageConditions":"D",
    "status":"Active",
    "inActivationDate":"",
    "categoryCode":"ORTHOPE",
    "categoryDescription":"ORTHOPEDICS",
    "lastPurchDate":"29/07/2022",
    "dateOpened":"27/04/2019",
    "wholeSalePrice":18.2,
    "retailPrice":29.88,
    "vatPercent":19.0,
    "backToStock":"",
    "newWholeSalePrice":18.2,
    "newRetailPrice":25.11},
    {"code":"HD21514","description":"0014/M MAXILARI YPNOU MEMORY",
    "availableQuantity": 9,
    "expiryDate": "29/06/2023","barcode":"","vendorCode":"V1216","vendorDescription":"GNC CHRISTOU TRADING LTD","importerCode":"V1216","importerDescription":"GNC CHRISTOU TRADING LTD","ministryCode":"","storageConditions":"D","status":"Active","inActivationDate":"","categoryCode":"ORTHOPE","categoryDescription":"ORTHOPEDICS","lastPurchDate":"30/12/2022","dateOpened":"13/11/2018","wholeSalePrice":48.72,"retailPrice":80.0,"vatPercent":19.0,"backToStock":"","newWholeSalePrice":48.72,"newRetailPrice":67.23},
    {"code":"HD21136","description":"0015/L ANATOMIKO MAXILARI MEMORY",
    "availableQuantity": 2,
    "expiryDate": "29/05/2023","barcode":"5204914336476","vendorCode":"V1216","vendorDescription":"GNC CHRISTOU TRADING LTD","importerCode":"V1216","importerDescription":"GNC CHRISTOU TRADING LTD","ministryCode":"","storageConditions":"D","status":"Active","inActivationDate":"","categoryCode":"ORTHOPE","categoryDescription":"ORTHOPEDICS","lastPurchDate":"09/01/2023","dateOpened":"13/11/2018","wholeSalePrice":52.67,"retailPrice":86.49,"vatPercent":19.0,"backToStock":"","newWholeSalePrice":52.67,"newRetailPrice":72.68},
    {"code":"P04710","description":"0022/L ANA EPIGONATIDA NE ME SPEIROEIDI",
    "availableQuantity": 6,
    "expiryDate": "19/07/2023","barcode":"","vendorCode":"V1216","vendorDescription":"GNC CHRISTOU TRADING LTD","importerCode":"V1216","importerDescription":"GNC CHRISTOU TRADING LTD","ministryCode":"","storageConditions":"D","status":"Active","inActivationDate":"","categoryCode":"ORTHOPE","categoryDescription":"ORTHOPEDICS","lastPurchDate":"20/12/2022","dateOpened":"20/12/2022","wholeSalePrice":45.0,"retailPrice":65.2,"vatPercent":5.0,"backToStock":"","newWholeSalePrice":45.0,"newRetailPrice":62.1},
    {"code":"P04463","description":"0023/L EPIGONATIDA ME METALLIKA STIRIGMATA",
    "availableQuantity": 8,
    "expiryDate": "04/07/2025","barcode":"","vendorCode":"V1216","vendorDescription":"GNC CHRISTOU TRADING LTD","importerCode":"V1216","importerDescription":"GNC CHRISTOU TRADING LTD","ministryCode":"","storageConditions":"D","status":"Active","inActivationDate":"","categoryCode":"ORTHOPE","categoryDescription":"ORTHOPEDICS","lastPurchDate":"27/10/2022","dateOpened":"27/10/2022","wholeSalePrice":44.0,"retailPrice":63.75,"vatPercent":5.0,"backToStock":"","newWholeSalePrice":44.0,"newRetailPrice":60.71},
    {"code":"P04519","description":"0023/XL EPIGONATIDA ME METALLIKA STIRIGMATA",
    "availableQuantity": 20,
    "expiryDate": "05/07/2024","barcode":"","vendorCode":"V1216","vendorDescription":"GNC CHRISTOU TRADING LTD","importerCode":"V1216","importerDescription":"GNC CHRISTOU TRADING LTD","ministryCode":"","storageConditions":"D","status":"Active","inActivationDate":"","categoryCode":"ORTHOPE","categoryDescription":"ORTHOPEDICS","lastPurchDate":"30/12/2022","dateOpened":"09/11/2022","wholeSalePrice":47.0,"retailPrice":68.0,"vatPercent":5.0,"backToStock":"","newWholeSalePrice":47.0,"newRetailPrice":64.76},
    {"code":"P04730","description":"0029 EPIGONATIDIKI DESTRA",
    "availableQuantity": 10,
    "expiryDate": "29/03/2024","barcode":"","vendorCode":"V1216","vendorDescription":"GNC CHRISTOU TRADING LTD","importerCode":"V1216","importerDescription":"GNC CHRISTOU TRADING LTD","ministryCode":"","storageConditions":"D","status":"Active","inActivationDate":"","categoryCode":"ORTHOPE","categoryDescription":"ORTHOPEDICS","lastPurchDate":"20/12/2022","dateOpened":"02/01/2023","wholeSalePrice":12.0,"retailPrice":17.38,"vatPercent":5.0,"backToStock":"","newWholeSalePrice":12.0,"newRetailPrice":16.55}
];

    const config = [
        {
            label: "Κωδικός",
            render: (product) => product.code
        },
        {
            label: "Περιγραφή",
            render: (product) => product.description,
            sortValue: (product) => product.description
        },
        {
            label: "Απόθεμα",
            render: (product) => product.availableQuantity,
            sortValue: (product) => product.availableQuantity
        },
        {
            label: "Ημ.Λήξης",
            render: (product) => product.expiryDate
        },
        {
            label: "ΧΤ",
            render: (product) => product.wholeSalePrice,
            sortValue: (product) => product.wholeSalePrice
        },
        {
            label: "ΛΤ",
            render: (product) => product.retailPrice,
            sortValue: (product) => product.retailPrice
        },
        {
            label: "Κωδ.Φ/Υ",
            render: (product) => product.code
        },
    ];

    const keyFn = (product) => {
        return product.code;
    };


    return (
        <div>
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default ProductsTable;